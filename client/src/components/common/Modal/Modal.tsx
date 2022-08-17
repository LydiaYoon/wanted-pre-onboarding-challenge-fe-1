import React from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../../modules';
import * as layoutActions from '../../../modules/layout/actions';
import { Close, ModalBox, ModalContent, ModalHead, ModalWrapper } from './Modal.style';

const Modal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
