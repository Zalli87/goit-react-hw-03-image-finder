import { Component } from "react";
import PropTypes from "prop-types";
import css from './Modal.module.css'
import { createPortal } from "react-dom";  

const modalRoot = document.querySelector('#modal-root');



export class Modal extends Component {

    componentDidMount() {
        document.addEventListener('keydown', this.closeModal)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.closeModal)
    }

    closeModal = ({target, currentTarget, code}) => {
        if (target === currentTarget || code === 'Escape') {
            this.props.close()
        }
    }

    render() {
        const { children } = this.props;
        const { closeModal } = this;
        return (
            createPortal(<div className={css.overlay} onClick={closeModal}>
  <div className={css.modal}>
    { children }
  </div>
</div>, modalRoot)
        )
    }
}

Modal.propTypes = {
    close: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}