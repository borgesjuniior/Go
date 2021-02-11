import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { ToastsMessages } from '../../hooks/ToastsContext';
import { Container, Toast } from './styles';

interface ToastsContainerProps {
  messages: ToastsMessages[];

}


const ToastContainer: React.FC<ToastsContainerProps> = ({ messages }) => {

  return (
    <Container>
      {messages.map(messages => (

        <Toast key={messages.id} type={messages.type} hasDescription={!!messages.description}>
          <FiAlertCircle size={18} />

          <div>
            <strong>{messages.title}</strong>
            <p>{messages.description}</p>
          </div>

          <button type="button">
                  <FiXCircle size={18}/>
          </button>
        </Toast>

      ))}
    </Container>
  )

}

export default ToastContainer;
