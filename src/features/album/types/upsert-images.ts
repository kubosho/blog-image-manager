import * as z from 'zod/mini';

import type {
  upsertImagesErrorResponseSchema,
  upsertImagesResponseSchema,
  upsertImagesSuccessResponseSchema,
} from '../utils/upsert-images-schema';

export type UpsertImagesSuccessResponseObject = z.infer<typeof upsertImagesSuccessResponseSchema>;

export type UpsertImagesErrorResponseObject = z.infer<typeof upsertImagesErrorResponseSchema>;

export type UpsertImagesResponseObject = z.infer<typeof upsertImagesResponseSchema>;
