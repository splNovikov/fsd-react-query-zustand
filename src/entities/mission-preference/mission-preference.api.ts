import { imageCreatorsUrl } from '~shared/api/ocus-pocus';
import { createJsonQuery } from '~shared/lib/fetch';
import { zodContract } from '~shared/lib/zod';
import { MissionPreferencesDtoSchema } from './mission-preference.contracts';
import { mapMissionPreferences } from './mission-preference.lib';

export async function missionPreferencesQuery(
  // params: { imageCreatorId: string },
  signal?: AbortSignal,
) {
  return createJsonQuery({
    request: {
      url: imageCreatorsUrl(
        '/image-creators/ca7a5540-79e4-4d06-b034-e061c46840fe/mission-preference',
      ),
      method: 'GET',
    },
    response: {
      contract: zodContract(MissionPreferencesDtoSchema),
      mapData: mapMissionPreferences,
    },
    abort: signal,
  });
}
