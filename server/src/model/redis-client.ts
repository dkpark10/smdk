import redis from 'redis';

const redisClient = redis.createClient();

export const getRedisValue = (key: string) => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
};

export const deleteRedisKey = (key: string) => {
  redisClient.del(key);
}

export const setRedisValue = (key: string, value: string) => {
  redisClient.set(key, value);
}
