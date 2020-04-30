import React from 'react';

import { Container, Content, Background } from './styles';
import LogoImg from '../../assets/logo.svg'
import signInBackground from '../../assets/sign-in-background.png'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'

const SignIn: React.FC = () => (
    <>
    <div>
        <Container>
            <Content>
                <img style={{paddingTop: 200}} src={LogoImg} alt="logo"></img>

                <form>
                    <h1>Faça seu logon</h1>
                    <Input name="email" icon={FiMail} placeholder="Email"></Input>
                    <Input name="password" icon={FiLock} placeholder="Senha" type="password"></Input>
                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </form>

                <a href="login"><FiLogIn/>Criar conta</a>
            </Content>
            <Background><img style={{flex: 1, backgroundSize: 'cover'}} src={signInBackground} alt="img"></img></Background>
        </Container>
    </div>
    </>
  
)

export default SignIn