import { scoreboardState } from '@internal/modules/scoreboard/scoreboard-state';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './scoreboard.graphics.css';

function GraphicsRoot() {
  return (
    <div className="flex flex-col items-center justify-end w-full min-h-screen px-16 pt-8 pb-24">
      <pre>{JSON.stringify(scoreboardState.value, null, 2)}</pre>
    </div>
  );
}

ReactDOM.render(<GraphicsRoot />, document.getElementById('root'));
