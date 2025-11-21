import * as z from 'zod/mini';

export const upsertImagesSuccessResponseSchema = z.object({
  imagePath: z.string(),
});

export const upsertImagesErrorResponseSchema = z.object({
  message: z.string(),
});

export const upsertImagesResponseSchema = z.union([upsertImagesSuccessResponseSchema, upsertImagesErrorResponseSchema]);
