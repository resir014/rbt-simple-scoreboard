import { ScoreboardEditor } from '@internal/modules/scoreboard/scoreboard-editor';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './score-editor.dashboard.css';

function DashboardRoot() {
  return (
    <div className="p-4">
      <ScoreboardEditor />
    </div>
  );
}

ReactDOM.render(<DashboardRoot />, document.getElementById('root'));
