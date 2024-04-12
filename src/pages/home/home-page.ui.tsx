import { MissionPreferences } from '~widgets/mission-preferences';

export function HomePage() {
  return (
    <div className="home-page">
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">conduit</h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>

      <div className="container page">
        <div className="row">
          <div className="col-md-9">123</div>

          <div className="col-md-3">
            <MissionPreferences />
            <MissionPreferences />
            <MissionPreferences />
            <MissionPreferences />
            <MissionPreferences />
          </div>
        </div>
      </div>
    </div>
  );
}
