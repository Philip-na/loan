import { useState } from 'react';
import './Button.css';
import Form from './Form/Form';

const Button = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (  
    <div className="form-container">
      <button onClick={handleShow}>
        <b>Get Loan</b>
      </button>
      
        {show && (
          <div className='over-lay' >
            <button className='btn' onClick={handleShow}>close</button>
          <Form/>
          </div>
        )}
      </div>
    
  );
};

export default Button;
