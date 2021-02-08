import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Logo from '../../assets/logo.svg'
import { Container, Content, Background } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';


const SingIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={Logo} alt="Logo"/>
        <form>
          <h1>Faça seu logon</h1>
          <Input Icon={FiMail} name="email" placeholder="E-mail"/>
          <Input Icon={FiLock} name="password" placeholder="Senha" type="password"/>

          <Button type="submit">Entrar</Button>

          <a href="adf">Esqueci minha senha</a>
        </form>

        <a href="criar">
          <FiLogIn />
          Criar conta</a>
      </Content>
      <Background />
    </Container>
  )
};

export default SingIn;
