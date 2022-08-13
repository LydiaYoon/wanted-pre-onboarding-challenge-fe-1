import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as layoutActions from '../../modules/layout/actions';
import { RootState } from '../../modules';
import styled, { css } from 'styled-components';
import { MdClose } from 'react-icons/md';

const Modal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.layout);

  const handleClickOutside = ({ target, currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    if (modal.isOpen && target == currentTarget) {
      dispatch(layoutActions.closeModal());
    }
  };

  const handleCloseButtonClick = () => {
    if (modal.isOpen) {
      dispatch(layoutActions.closeModal());
    }
  };

  return (
    <ModalWrapper isOpen={modal.isOpen} onClick={handleClickOutside}>
      <ModalBox>
        <ModalHead>
          <Close onClick={handleCloseButtonClick}>
            <MdClose />
          </Close>
        </ModalHead>
        <ModalContent>{modal.element}</ModalContent>
      </ModalBox>
    </ModalWrapper>
  );
};

export default Modal;

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);

  ${props =>
    props.isOpen &&
    css`
      display: flex;
    `}
`;

const ModalBox = styled.div`
  display: box;
  width: calc(100% - 30px);
  max-width: 400px;
  height: 60%;
  max-height: 60%;
  background: white;
  border-radius: 16px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  text-align: left;
  box-shadow: 0px 10px 20px 0 rgba(0, 0, 0, 0.05);
  z-index: 950;
`;

const ModalHead = styled.div`
  height: 30px;
  position: absolute;
  top: 6px;
  right: -36px;
`;

const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  overflow-y: auto;
`;

const Close = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;
