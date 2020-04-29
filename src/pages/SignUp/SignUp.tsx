import React from 'react';

import { Container, Content, Background } from './styles';
import LogoImg from '../../assets/logo.svg'
import signUpBackground from '../../assets/sign-up-background.png'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {FiArrowLeft, FiMail, FiUser, FiLock} from 'react-icons/fi'

const SignUp: React.FC = () => (
    <>
    <div>
        <Container>
        <Background><img style={{flex: 1, backgroundSize: 'cover'}} src={signUpBackground} alt="img"></img></Background>
            <Content>
                <img style={{paddingTop: 200}} src={LogoImg} alt="logo"></img>

                <form>
                    <h1>Faça seu Cadastro</h1>
                    <Input name="name" icon={FiUser} placeholder="Nome"></Input>
                    <Input name="email" icon={FiMail} placeholder="Email"></Input>
                    <Input name="password" icon={FiLock} placeholder="Senha" type="password"></Input>
                    <Button type="submit">Cadastrar</Button>
                </form>

                <a href="login"><FiArrowLeft/>Voltar para logon</a>
            </Content>
        </Container>
    </div>
    </>
  
)

export default SignUp
