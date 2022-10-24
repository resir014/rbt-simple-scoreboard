import * as React from 'react';
import { Save as SaveIcon, Trash2 as TrashIcon } from 'react-feather';
import { removeScoreboard, setParticipantScore } from './scoreboard-state';

export interface ScoreboardEditorItemProps {
  playerIndex: number;
  name?: string;
  score?: number;
}

export function ScoreboardEditorItem({ playerIndex, name, score }: ScoreboardEditorItemProps) {
  const [nameValue, setNameValue] = React.useState(name);
  const [scoreValue, setScoreValue] = React.useState(score?.toString());

  React.useEffect(() => {
    setNameValue(name);
    setScoreValue(score?.toString());
  }, [name, score]);

  const isEqual = React.useMemo(
    () => nameValue === name && scoreValue === score?.toString(),
    [name, score, nameValue, scoreValue]
  );

  const handleRemoveClick = (index: number) => () => {
    removeScoreboard(index);
  };

  const handleSaveClick = (index: number) => () => {
    setParticipantScore(index, {
      name: nameValue ?? '',
      score: Number(scoreValue),
    });
  };

  return (
    <div className="flex flex-row items-center justify-between space-x-4">
      <div>
        <input
          type="text"
          autoComplete="off"
          className="block w-full rounded-md bg-gray-900 border-gray-700 shadow-sm hover:bg-gray-800 focus:border-green-500 focus:ring-green-500 sm:text-sm"
          value={nameValue}
          onChange={e => setNameValue(e.target.value)}
        />
      </div>
      <div className="flex-1">
        <input
          type="text"
          autoComplete="off"
          className="block w-full rounded-md bg-gray-900 border-gray-700 shadow-sm hover:bg-gray-800 focus:border-green-500 focus:ring-green-500 sm:text-sm"
          value={scoreValue}
          onChange={e => setScoreValue(e.target.value)}
        />
      </div>
      <div className="flex items-center space-x-2">
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-transparent bg-blue-600 p-1 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleSaveClick(playerIndex)}
          aria-label="Save"
          disabled={isEqual}
        >
          <SaveIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="inline-flex items-center rounded-full border border-transparent bg-red-600 p-1 text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleRemoveClick(playerIndex)}
          aria-label="Delete"
        >
          <TrashIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
