import { useSuspenseQuery } from '@tanstack/react-query';
import { withErrorBoundary } from 'react-error-boundary';
import { missionPreferencesQueries } from '~entities/mission-preference';
import { withSuspense } from '~shared/lib/react';
import { ErrorHandler } from '~shared/ui/error';
import { Loader } from '~shared/ui/loader';

function Preferences() {
  const { data: missionPreferences } = useSuspenseQuery(
    missionPreferencesQueries.missionPreferencesService.queryOptions(),
  );

  return (
    <div className="sidebar">
      <p>Mission Preferences</p>
      <div className="tag-list">
        {missionPreferences &&
          missionPreferences.length &&
          missionPreferences.map((pref) => (
            <button
              key={pref.id}
              className="tag-pill tag-default"
              type="button"
            >
              {pref.radius}
            </button>
          ))}
      </div>
    </div>
  );
}

const SuspensedMissionPreferences = withSuspense(Preferences, {
  fallback: <Loader />,
});
export const MissionPreferences = withErrorBoundary(
  SuspensedMissionPreferences,
  {
    fallbackRender: ({ error }) => <ErrorHandler error={error} />,
  },
);
