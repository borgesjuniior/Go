import React from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import Logo from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';


const SingIn: React.FC = () => {
  return (
    <Container>
      <Background />
      <Content>
        <img src={Logo} alt="Logo"/>
        <form>
          <h1>Faça seu cadastro</h1>
          <Input Icon={FiUser} name="name" placeholder="Nome"/>
          <Input Icon={FiMail} name="email" placeholder="E-mail"/>
          <Input Icon={FiLock} name="password" placeholder="Senha" type="password"/>

          <Button type="submit">Cadastrar</Button>
        </form>

        <a href="criar">
          <FiArrowLeft />
          Voltar para logon</a>
      </Content>
    </Container>
  )
};

export default SingIn;
