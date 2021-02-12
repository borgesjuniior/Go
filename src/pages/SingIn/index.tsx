import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { useToast } from '../../hooks/ToastsContext';
import { useAuth } from '../../hooks/AuthContext';
import getValidationErrors from '../../utils/getValidationErros';
import Logo from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';


interface SingInFormData {
  email: string;
  password: string;
}


const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn, user } = useAuth();
  const { addToast } = useToast();

  console.log(user);

  const handleSubmit = useCallback(async (data: SingInFormData) => {
    try {

      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'Senha obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await signIn({
        email: data.email, //Pega os dados do form e passa pra dentro do contexto
        password: data.password,
      })

    } catch (err) {

      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors); //seta os erros para o Input
      }


      addToast({
        type: 'info',
        title: 'Ocorreu um erro na autenticação',
        description: 'Ocorreu um erro ao fazer login, cheque suas credencias',
      }) //Dispara um toast
    }

  }, [signIn, addToast])

  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input Icon={FiMail} name="email" placeholder="E-mail"/>
          <Input Icon={FiLock} name="password" placeholder="Senha" type="password"/>

          <Button type="submit">Entrar</Button>

          <a href="adf">Esqueci minha senha</a>
        </Form>

        <Link to="/signup">
          <FiLogIn />
          Criar conta</Link>
      </Content>
      <Background />
    </Container>
  )
};

export default SingIn;
