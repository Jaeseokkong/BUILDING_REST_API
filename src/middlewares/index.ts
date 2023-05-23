import express from 'express';

import {get , identity, merge} from 'lodash';
import { getUserBySessionToken } from '../db/users';

//로그인한 계정과 접근하는 계정이 동일한지 확인
export const isOwner = async (req : express.Request, res : express.Response, next : express.NextFunction) => {
    try {
        const { id } = req.params;
        const currentUserId = get(req, 'identity._id') as string;
        console.log(identity)
        console.log(currentUserId)

        if(!currentUserId){
            return res.sendStatus(403);
        }

        if(currentUserId.toString() !== id){
            return res.sendStatus(403);
        }

        next();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
}

//로그인 되어있는지 확인
export const isAuthenticated = async (req : express.Request, res : express.Response, next : express.NextFunction) => {
    try {
        const sessionToken = req.cookies['JAESEOK-AUTH']

        if(!sessionToken) {
            return res.sendStatus(403);
        }

        const existingUser = await getUserBySessionToken(sessionToken);

        console.log(existingUser)

        if(!existingUser){
            return res.sendStatus(403);
        }

        merge(req, { identity : existingUser})

        next();

    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}