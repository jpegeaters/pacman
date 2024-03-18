import { useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../../../components/StoreContext';
import { SoundOff } from '../../../components/SoundOff';
import { SoundOn } from '../../../components/SoundOn';

export const SoundView = () => {
  const [isMuted, setIsMuted] = useState(
    Boolean(localStorage.getItem('pacman-muted'))
  );
  const store = useStore();

  const handleClick = () => {
    store.muteSounds();
    const muted = localStorage.getItem('pacman-muted');

    if (muted !== 'true') {
      setIsMuted(true);
      localStorage.setItem('pacman-muted', 'true');
    } else {
      setIsMuted(false);
      localStorage.removeItem('pacman-muted');
    }
  };
  return (
    <StyledButton onClick={handleClick}>
      {isMuted ? <SoundOff width={20} /> : <SoundOn width={20} />}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background: black;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  display: flex;
  min-width: 95px;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  transition: all 0.2s ease-in-out;
  border: 3px solid white;
  padding: 3px;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
`;
