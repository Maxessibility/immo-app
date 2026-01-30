import { z } from "zod";

const first = (v: unknown) => (Array.isArray(v) ? v[0] : v);

export const propertyCreateSchema = z.object({
  title: z.preprocess(first, z.string().min(2)),
  description: z.preprocess(first, z.string().optional()),
  price: z.preprocess(first, z.coerce.number().int().positive()),
  surface: z.preprocess(first, z.coerce.number().int().positive()),
  rooms: z.preprocess(first, z.coerce.number().int().positive()),
  bedrooms: z.preprocess(first, z.coerce.number().int().positive()).optional(),
  type: z.preprocess(first, z.enum(["HOUSE", "APARTMENT"])),
  status: z.preprocess(first, z.enum(["SALE", "RENT"])),
});

export const propertyUpdateSchema = propertyCreateSchema.partial();
