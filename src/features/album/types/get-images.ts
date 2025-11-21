import * as z from 'zod/mini';

import type {
  getImagesErrorResponseSchema,
  getImagesResponseSchema,
  getImagesSuccessResponseSchema,
} from '../utils/get-images-schema';

export type GetImagesSuccessResponseObject = z.infer<typeof getImagesSuccessResponseSchema>;

export type GetImagesErrorResponseObject = z.infer<typeof getImagesErrorResponseSchema>;

export type GetImagesResponseObject = z.infer<typeof getImagesResponseSchema>;
