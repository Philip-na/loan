import { useState } from 'react';
import './Button.css';
import Form from './Form/Form';

const Button = () => {
  const [show, setShow] = useState(true);

  const handleShow = () => {
    setShow(!show);
  };

  return (  
    <div className="form-container">
      <button onClick={handleShow}>
        <b>Get Loan</b>
      </button>
      <div>
        {show && (
          <Form/>
        )}
      </div>
    </div>
  );
};

export default Button;
