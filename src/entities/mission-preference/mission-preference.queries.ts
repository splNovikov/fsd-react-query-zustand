import { queryOptions as tsqQueryOptions } from '@tanstack/react-query';
import { queryClient } from '~shared/lib/react-query';
import { missionPreferencesQuery } from './mission-preference.api';
import { MissionPreferences } from './mission-preference.types';

const keys = {
  root: () => ['mission-preference'],
  missionPreferences: () => [...keys.root(), 'mission-preferences'] as const,
};

export const missionPreferencesService = {
  queryKey: () => keys.missionPreferences(),

  getCache: () =>
    queryClient.getQueryData<MissionPreferences>(
      missionPreferencesService.queryKey(),
    ),

  // setCache: (missionPreferences: MissionPreferences) =>
  //   queryClient.setQueryData(missionPreferencesService.queryKey(), missionPreferences),

  // removeCache: () =>
  //   queryClient.removeQueries({ queryKey: missionPreferencesService.queryKey() }),

  queryOptions: () => {
    const missionPreferencesKey = missionPreferencesService.queryKey();
    return tsqQueryOptions({
      queryKey: missionPreferencesKey,
      queryFn: async ({ signal }) => missionPreferencesQuery(signal),
      initialData: () => missionPreferencesService.getCache()!,
      initialDataUpdatedAt: () =>
        queryClient.getQueryState(missionPreferencesKey)?.dataUpdatedAt,
    });
  },

  prefetchQuery: async () => {
    queryClient.prefetchQuery(missionPreferencesService.queryOptions());
  },
};
