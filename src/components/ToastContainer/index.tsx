import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';


import { Container, Toast } from './styles';


const ToastContainer: React.FC = () => {

  return (
    <Container>
      <Toast hasDescription>
      <FiAlertCircle size={18} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possével logar na aplicação</p>
        </div>

        <button type="button">
          <FiXCircle size={18}/>
        </button>

      </Toast>

      <Toast type="success" hasDescription={false}>
      <FiAlertCircle size={18} />

        <div>
          <strong>Aconteceu um erro</strong>
        </div>

        <button type="button">
          <FiXCircle size={18}/>
        </button>

      </Toast>

      <Toast hasDescription type="error">
      <FiAlertCircle size={18} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possével logar na aplicação</p>
        </div>

        <button type="button" id="teste">
          <FiXCircle size={18}/>
        </button>

      </Toast>
    </Container>
  )

}

export default ToastContainer;
