import React, { useCallback, useRef} from 'react';
import {Form} from '@unform/web'
import { Container, Content, Background } from './styles';
import LogoImg from '../../assets/logo.svg'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import {FormHandles} from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback(async (data: object) => {
        try{
            formRef.current?.setErrors({})
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória')
            })

            await schema.validate(data, {
                abortEarly: false,
            })

        }catch(err){
            const errors = getValidationErrors(err)

            formRef.current?.setErrors(errors)
            console.log(err)
        }
    }, [])
    
    return(
    <>
    <div>
        <Container>
            <Content>
                <img style={{paddingTop: 200}} src={LogoImg} alt="logo"></img>

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>
                    <Input name="email" icon={FiMail} placeholder="Email"></Input>
                    <Input name="password" icon={FiLock} placeholder="Senha" type="password"></Input>
                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </Form>

                <a href="login"><FiLogIn/>Criar conta</a>
            </Content>
            <Background></Background>
        </Container>
    </div>
    </>
  
)}

export default SignIn
