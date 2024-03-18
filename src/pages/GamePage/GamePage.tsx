import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useStore } from '../../components/StoreContext';
import { useGameLoop } from '../../model/useGameLoop';
import { GameBoard } from './components/GameBoard';
import { useKeyboardActions } from './components/useKeyboardActions';
import { StartSound } from './components/StartSound';

export const GamePage: React.FC = observer(() => {
  const [isStarted, setIsStarted] = useState(false);
  const store = useStore();
  useGameLoop();
  useKeyboardActions();

  const handleStart = () => {
    store.resetGame();
    setIsStarted(true);
    store.game.gameStarted = true;
  };

  return (
    <Layout data-testid="GamePage">
      {isStarted ? (
        <>
          <StartSound />
          <GameBoard />
        </>
      ) : (
        <Container>
          <StartButton onClick={handleStart}>Start</StartButton>
        </Container>
      )}
    </Layout>
  );
});

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

const StartButton = styled.button`
  min-width: 95px;
  font-family: BoldPixel;
  border: 3px solid #ffff00c7;
  border-radius: 4px;
  background: transparent;
  color: #ffff00c7;
  font-size: 48px;
  padding: 5px 20px 0;
  height: auto;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    border-color: yellow;
    color: yellow;
  }
`;

const Container = styled.div`
  padding: 16px;
`;
