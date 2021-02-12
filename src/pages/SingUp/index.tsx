import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/ToastsContext';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErros';
import Logo from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';


interface UserData {
  name: string,
  email: string,
  password: string;
}

const SingIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: UserData) => {
    try {

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo seis digítos'),
      });

      await schema.validate(data, {
        abortEarly: false, //Deixa mostrar todos os campos que não foram válidados
      });

      await api.post('/users', data);

      addToast({
        type: 'success',
        title: 'Cadastro realizado com sucesso!',
        description: 'Você já pode fazer seu logon'
      })

      history.push('/'); //Redireciona o usuário para a página de Logon
    } catch (err) {

      if(err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err)
        formRef.current?.setErrors(errors); //seta os erros para o Input
      }

      console.log(err);

      addToast({
        type: 'error',
        title: 'Erro no cadastro!',
        description: 'Ocorreu um erro ao fazer cadastro, tente novamente.',
      }) //Dispara um toast //seta is erros para o Input

    }
  }, [history, addToast])

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

        <Link to="/">
          <FiArrowLeft />
          Voltar para logon</Link>
      </Content>
    </Container>
  )
};

export default SingIn;
