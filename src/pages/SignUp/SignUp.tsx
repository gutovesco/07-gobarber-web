import React, {useCallback, useRef} from 'react';

import { Container, Content, Background } from './styles';
import LogoImg from '../../assets/logo.svg'
//import signUpBackground from '../../assets/sign-up-background.png'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {FiArrowLeft, FiMail, FiUser, FiLock} from 'react-icons/fi'
import {Form} from '@unform/web'
import * as Yup from 'yup'
import {FormHandles} from '@unform/core'
import getValidationErrors from '../../utils/getValidationErrors'

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback(async (data: object) => {
        try{
            formRef.current?.setErrors({})
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'No mínimo 6 digitos')
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
    
    return (
        <Container>
        <Background></Background>
            <Content>
                <img style={{paddingTop: 200}} src={LogoImg} alt="logo"></img>

                <Form ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu Cadastro</h1>
                    <Input name="name" icon={FiUser} placeholder="Nome"></Input>
                    <Input name="email" icon={FiMail} placeholder="Email"></Input>
                    <Input name="password" icon={FiLock} placeholder="Senha" type="password"></Input>
                    <Button type="submit">Cadastrar</Button>
                </Form>

                <a href="login"><FiArrowLeft/>Voltar para logon</a>
            </Content>
        </Container>
    )
}

export default SignUp
