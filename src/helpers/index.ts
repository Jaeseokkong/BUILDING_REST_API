import crypto from 'crypto'

const SECRET = "JAESEOK-REST-API"

export const random = () => crypto.randomBytes(128).toString('base64');
//암호화된 비밀번호 생성 모듈
export const authentication = (salt : string, password : string) => {
    return crypto.createHmac('sha256', [salt , password].join('/')).update(SECRET).digest('hex');
}