import {  useRef } from 'react';
import './css/CustomModal.css';

const CustomModal = ({ isOpen, onClose, children, className, overlayClass,active='showModal' }) => {
  const modalRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  return  (
    <div className={`custom-modal-overlay ${overlayClass} ${isOpen ? active : ''} `} onClick={handleOutsideClick}>
      <div className={`custom-modal-content ${isOpen ? 'active' : ''}  ${className}`} ref={modalRef}>
        {children}
      </div>
    </div>
  ) 
};

export default CustomModal;
