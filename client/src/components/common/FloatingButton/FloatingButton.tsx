import React from 'react';
import { MdAdd } from 'react-icons/md';
import { CircleButton } from './FloatingButton.style';

type FloatingButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const FloatingButton = ({ handleClick }: FloatingButtonProps) => {
  return (
    <>
      <CircleButton onClick={handleClick}>
        <MdAdd />
      </CircleButton>
    </>
  );
};

export default FloatingButton;
