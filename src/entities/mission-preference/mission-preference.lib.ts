import {
  MissionPreference,
  MissionPreferenceDto,
  MissionPreferences,
  MissionPreferencesDto,
} from './mission-preference.types';

export function mapMissionPreference(
  missionPreferenceDto: MissionPreferenceDto,
): MissionPreference {
  return missionPreferenceDto;
}

export function mapMissionPreferences(
  missionPreferencesDto: MissionPreferencesDto,
): MissionPreferences {
  return missionPreferencesDto;
}
