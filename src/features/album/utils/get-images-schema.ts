import * as z from 'zod/mini';

export const getImagesSuccessResponseSchema = z.object({
  urls: z.array(z.string()),
  nextToken: z.nullable(z.string()),
});

export const getImagesErrorResponseSchema = z.object({
  message: z.string(),
});

export const getImagesResponseSchema = z.union([getImagesSuccessResponseSchema, getImagesErrorResponseSchema]);
