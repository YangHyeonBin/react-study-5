import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import styles from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHideCart} />;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </Card>
  );
};

const Modal = (props) => {
  const portalElement = document.getElementById('modal-root');
  
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </React.Fragment>
  );
};

export default Modal;
