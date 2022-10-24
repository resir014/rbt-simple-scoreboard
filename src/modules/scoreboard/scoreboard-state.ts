import { signal } from '@preact/signals-react';
import { produce } from 'immer';

export interface ScoreboardItem {
  name: string;
  score: number;
}

export const scoreboardReplicant = nodecg.Replicant<ScoreboardItem[]>('scoreboard-state', {
  defaultValue: [],
});

export const scoreboardState = signal<ScoreboardItem[]>([]);

export function addScoreboard() {
  scoreboardReplicant.value = [
    ...(scoreboardReplicant.value ?? []),
    { name: `Player ${(scoreboardReplicant.value?.length ?? 0) + 1}`, score: 0 },
  ];
}

export function removeScoreboard(index: number) {
  scoreboardReplicant.value = scoreboardReplicant.value?.filter(
    item => item !== scoreboardReplicant.value?.[index]
  );
}

export function setParticipantScore(index: number, value: ScoreboardItem) {
  if (scoreboardReplicant.value) {
    scoreboardReplicant.value = produce(scoreboardReplicant.value, draft => {
      draft[index] = value;
    });
  }
}

scoreboardReplicant.on('change', newValue => {
  scoreboardState.value = newValue;
});
