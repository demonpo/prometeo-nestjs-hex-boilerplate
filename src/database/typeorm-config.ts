export const typeormConfig: any = {
  type: 'postgres',
  host: process.env.POSTGRESQL_HOST || 'localhost',
  url: process.env.POSTGRESQL_URL,
  port: process.env.DB_PORT || 5432,
  username: process.env.POSTGRESQL_USERNAME || 'postgres',
  password: process.env.POSTGRESQL_PASSWORD || 'password',
  database: process.env.POSTGRESQL_DATABASE,
  entities: [
    `${
      process.env.NODE_ENV === 'production' ? 'dist' : 'src'
    }/**/*.entity.{js,ts}`,
  ],
  subscribers: [
    `${
      process.env.NODE_ENV === 'production' ? 'dist' : 'src'
    }/**/*.subscriber.{js,ts}`,
  ],
  migrations: [
    `${
      process.env.NODE_ENV === 'production' ? 'dist' : 'src'
    }/database/migrations/*.{js,ts}`,
  ],
  seeds: [
    `${
      process.env.NODE_ENV === 'production' ? 'dist' : 'src'
    }/database/seeds/*.{js,ts}`,
  ],
  factories: [
    `${
      process.env.NODE_ENV === 'production' ? 'dist' : 'src'
    }/database/factories/*.{js,ts}`,
  ],
};
