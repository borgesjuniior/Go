import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErros';
import Logo from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';


const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: {}) => {
    try {

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo seis digítos'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

    } catch (err) {
      const errors = getValidationErrors(err)
      formRef.current?.setErrors(errors); //seta is erros para o Input

    }
  }, [])

  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="Logo"/>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input Icon={FiUser} name="name" placeholder="Nome"/>
          <Input Icon={FiMail} name="email" placeholder="E-mail"/>
          <Input Icon={FiLock} name="password" placeholder="Senha" type="password"/>

          <Button type="submit">Cadastrar</Button>
        </Form>

        <a href="criar">
          <FiArrowLeft />
          Voltar para logon</a>
      </Content>
    </Container>
  )
};

export default SingIn;
