import React from 'react';
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { RootState } from '../../modules';
import { closeModal } from '../../modules/layout';
import { routes } from '../../routes/routes';
import { Close, ModalBox, ModalContent, ModalHead, ModalWrapper } from './Modal.style';

const Modal = () => {
  const dispatch = useDispatch();
  const { modal } = useSelector((state: RootState) => state.layout);

  const navigate = useNavigate();

  const handleClickOutside = ({ target, currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    if (modal.isOpen && target == currentTarget) {
      dispatch(closeModal());
      navigate(routes.todos);
    }
  };

  const handleCloseButtonClick = () => {
    if (modal.isOpen) {
      dispatch(closeModal());
      navigate(routes.todos);
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
