declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_URL: string;
    REDIS_URL: string;
    SESSION_NAME: string;
    SESSION_SECRET: string;
    DOMAIN: string;
    PORT: string;
  }
}
