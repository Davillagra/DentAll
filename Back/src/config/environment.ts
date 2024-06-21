import 'dotenv/config';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: ['./.env.development', './.env'] });

export const environment = {
  port: process.env.PORT || 3000,
  bdInfo: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME || 'test',
    pass: process.env.DB_PASS || 'test',
    name: process.env.DB_NAME || 'test',
  },
};
