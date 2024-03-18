import { useStore } from '../../../components/StoreContext';
import styled from 'styled-components';

export const PauseView = () => {
  const store = useStore();
  const handleClick = () => {
    store.game.gamePaused = !store.game.gamePaused;
  };

  return (
    <ButtonStyled id="pacman-pause" onClick={handleClick}>
      Pause
    </ButtonStyled>
  );
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
  padding-top: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  :hover {
    border-color: yellow;
    color: yellow;
  }
`;
