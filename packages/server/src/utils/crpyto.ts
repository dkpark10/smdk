import { Logger } from '@nestjs/common';
import crypto from 'crypto';

const HASH_ITERATION_COUNT = 82842;

export const getCryptoedPassword2 = (plainText: string) => {
  return new Promise<Buffer>((resolve) => {
    crypto.randomBytes(64, (_, buffer) => {
      return resolve(buffer);
    });
  }).then((salt) => {
    crypto.pbkdf2(plainText, salt, HASH_ITERATION_COUNT, 64, 'sha512', (_, key) => {
      return key.toString('base64');
    });
  }).catch((error) => Logger.error(`getCryptoedPassword2 error: ${error}`))
};
