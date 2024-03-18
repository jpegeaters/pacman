import styled from 'styled-components';
import { useStore } from '../../../components/StoreContext';

export const RestartView = () => {
  const store = useStore();

  const handleClick = () => {
    store.resetGame();
    store.game.gameStarted = true;
  };
  return <ButtonStyled onClick={handleClick}>Restart</ButtonStyled>;
};

const ButtonStyled = styled.button`
  min-width: 95px;
  font-family: BoldPixel;
  border: 3px solid #ffff00c7;
  border-radius: 4px;
  background: transparent;
  color: #ffff00c7;
  font-size: 16px;
  height: auto;
  cursor: pointer;
  padding-top: 5px;
  transition: all 0.2s ease-in-out;
  :hover {
    border-color: yellow;
    color: yellow;
  }
`;
