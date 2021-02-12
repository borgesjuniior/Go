import React from 'react';
import { useTransition } from 'react-spring';

import Toast from './Toast';
import { ToastsMessages } from '../../hooks/ToastsContext';
import { Container } from './styles';

interface ToastsContainerProps {
  messages: ToastsMessages[];
}

const ToastContainer: React.FC<ToastsContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0},
      enter: { right: '0%', opacity: 1},
      leave: { right: '-120%', opacity: 0},
    }
  )

  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props}) => (
        <Toast key={key} style={props} messages={item} />
      ))}
    </Container>
  )

}

export default ToastContainer;
