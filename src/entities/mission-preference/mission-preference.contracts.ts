import { z } from 'zod';

export const MissionPreferenceDtoSchema = z.object({
  id: z.string(),
  imageCreatorId: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  radius: z.number(),
  minimumFee: z.number(),
  feeCurrency: z.string(),
  languages: z.string().array(),
  hasAppointmentDate: z.boolean(),
  visualTypeId: z.string().array(),
  visualVerticalId: z.string().array(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export const MissionPreferencesDtoSchema = z.array(MissionPreferenceDtoSchema);

export const MissionPreferenceSchema = z.object({
  id: z.string(),
  imageCreatorId: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  radius: z.number(),
  minimumFee: z.number(),
  feeCurrency: z.string(),
  languages: z.string().array(),
  hasAppointmentDate: z.boolean(),
  visualTypeId: z.string().array(),
  visualVerticalId: z.string().array(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});
export const MissionPreferencesSchema = z.array(MissionPreferenceSchema);
