import { z } from 'zod';
import {
  MissionPreferenceDtoSchema,
  MissionPreferenceSchema,
  MissionPreferencesDtoSchema,
  MissionPreferencesSchema,
} from './mission-preference.contracts.ts';

export type MissionPreferenceDto = z.infer<typeof MissionPreferenceDtoSchema>;
export type MissionPreferencesDto = z.infer<typeof MissionPreferencesDtoSchema>;

export type MissionPreference = z.infer<typeof MissionPreferenceSchema>;
export type MissionPreferences = z.infer<typeof MissionPreferencesSchema>;
