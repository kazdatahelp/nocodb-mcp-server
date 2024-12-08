import dotenv from 'dotenv';
dotenv.config();

export const config = {
  nocodbUrl: process.env.NOCODB_URL || '',
  nocodbApiToken: process.env.NOCODB_API_TOKEN || '',
};