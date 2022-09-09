export const env = {
  port: process.env.PORT ?? 3000,
  jwtSecretKey: process.env.JWT_SECRET_KEY ?? 'jwt',
  nodeEnv: process.env.NODE_ENV ?? 'development',
};
