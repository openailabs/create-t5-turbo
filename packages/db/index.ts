import { customAlphabet } from 'nanoid';

export { prisma } from './lib';
export { Prisma } from '@prisma/client';

export const genId = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', 16);
