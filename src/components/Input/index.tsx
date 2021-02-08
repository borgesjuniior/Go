import React, { InputHTMLAttributes, useEffect , useRef, useState, useCallback } from  'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  Icon: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null); //acessa a DOM do input
  const {fieldName, registerField} = useField(name);

  const [ isFocused, setIsFocused ] = useState(false);
  const [isFilled, setIsFielled] = useState(false);

  const handleInputFocus = useCallback(() => { //verifica se o input está com foco
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => { //verifica se o input perdeu o foco
    setIsFocused(false);
    setIsFielled(!!inputRef.current?.value);

  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    })
  }, [fieldName, registerField])

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      { Icon && <Icon size={20} />}
      <input ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}/>
    </Container>
  )
}

export default Input;
