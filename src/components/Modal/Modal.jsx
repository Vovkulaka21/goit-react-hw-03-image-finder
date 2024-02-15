import css from './Modal.module.css';

import { Component } from 'react';

class Modal extends Component {
  render() {
    return (
      <div className={css.overlay}>
        <div className={css.modal}>
          <img src="" alt="img" />
        </div>
      </div>
    );
  }
}

export default Modal