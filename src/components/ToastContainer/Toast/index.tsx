import React, { useEffect } from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi';

import { useToast, ToastsMessages } from '../../../hooks/ToastsContext';
import { Container } from './styles';

interface TastProps {
  messages: ToastsMessages;
  style: object;
}

const icons = {
  info: <FiInfo />,
  success: <FiCheckCircle />,
  error: <FiAlertCircle />,
}

const Toast: React.FC<TastProps> = ({ messages, style }) => {
  const { removeToast } = useToast();

  useEffect(() => {
    const time = setTimeout(() => {
      removeToast(messages.id)
    }, 3000);

    return () => {
      clearTimeout(time);
    }

  }, [removeToast, messages]);

  return (

    <Container type={messages.type} hasDescription={!!messages.description} style={style}>
      {icons[messages.type || 'info']}
      <div>
        <strong>{messages.title}</strong>
        <p>{messages.description}</p>
      </div>

      <button onClick={() => removeToast(messages.id)} type="button">
        <FiXCircle size={18}/>
      </button>
    </Container>
  )
};

export default Toast;
