import { useRef } from 'react';
import { useScaleElement } from '../../../model/useScaleElement';
import styled from 'styled-components';
import { RestartView } from './RestartView';
import { Row } from 'antd';
import { Score } from './Score';
import { PauseView } from './PauseView';
import { VSpace } from '../../../components/Spacer';
import { Board } from '../../../components/Board';
import { MazeView } from './MazeView';
import { PillsView } from './PillsView';
import { PacManView } from './PacManView';
import { GhostsGameView } from './GhostsView';
import { GameOver } from './GameOver';
import { ExtraLives } from './ExtraLives';
import { LevelView } from './LevelView';
import { SoundView } from './SoundView';

export const GameBoard = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const scale = useScaleElement({ contentRef });
  return (
    <Container
      ref={contentRef}
      style={{
        transform: `scale(${scale})`,
        transformOrigin: 'top center',
      }}
    >
      <ScoreArea>
        <RestartView />
        <Row justify="center">
          <Score />
        </Row>
        <PauseView />
      </ScoreArea>
      <VSpace size="medium" />
      <BoardArea>
        <Board>
          <MazeView />
          <PillsView />
          <PacManView />
          <GhostsGameView />
          <GameOver />
        </Board>
        <VSpace size="medium" />
        <SettingsArea>
          <SoundView />
          <Row justify="center">
            <ExtraLives />
          </Row>
          <LevelView />
        </SettingsArea>
      </BoardArea>
    </Container>
  );
};

const ScoreArea = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BoardArea = styled.div`
  position: relative;
`;

const Container = styled.div`
  padding: 16px;
`;

const SettingsArea = styled.div`
  display: flex;
  justify-content: space-between;
`;
