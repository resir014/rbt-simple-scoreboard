import * as React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';
import { addScoreboard, scoreboardState } from './scoreboard-state';
import { ScoreboardEditorItem } from './scoreboard-editor-item';

export function ScoreboardEditor() {
  const handleAddClick = () => {
    addScoreboard();
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-lg font-medium">
          Number of players: {scoreboardState.value.length || 0}
        </h2>
        <button
          type="button"
          onClick={handleAddClick}
          disabled={scoreboardState.value.length >= 4}
          className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" aria-hidden="true" />
          Add people
        </button>
      </div>
      <div className="space-y-4">
        {scoreboardState.value.length > 0 ? (
          scoreboardState.value.map((item, index) => (
            <div key={`${index}`}>
              <ScoreboardEditorItem playerIndex={index} name={item.name} score={item.score} />
            </div>
          ))
        ) : (
          <div>No players. Click the &quot;Add people&quot; button above.</div>
        )}
      </div>
    </div>
  );
}
