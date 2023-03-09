import jwt from "jsonwebtoken";

type Payload = string | object | Buffer;

export const sign = (payload: Payload, options: jwt.SignOptions): string => {
  return jwt.sign(payload, process.env.JWT_SECRET_KEY as string, options);
}

export const verify = (token: string): jwt.JwtPayload | string => {
  return jwt.verify(token, process.env.JWT_SECRET_KEY as string);
}
