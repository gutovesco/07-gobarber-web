import React, { useCallback, useRef} from 'react';
import {Form} from '@unform/web'
import { Container, Content, Background, AnimationContainer } from './styles';
import LogoImg from '../../assets/logo.svg'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import {FormHandles} from '@unform/core'
import * as Yup from 'yup'
import getValidationErrors from '../../utils/getValidationErrors'
import {useAuth} from '../../hooks/AuthContext'
import {useToast} from '../../hooks/Toast'
import {Link, useHistory} from 'react-router-dom'

interface SignInFormData{
    email: string;
    password: string;
}

const SignIn: React.FC = () => {
    const formRef = useRef<FormHandles>(null)

    const {user, signIn} = useAuth();
    const {addToast} = useToast();
    const history = useHistory()

    console.log(user)

    const handleSubmit = useCallback(async (data: SignInFormData) => {
        try{
            formRef.current?.setErrors({})
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().required('Senha obrigatória')
            })

            await schema.validate(data, {
                abortEarly: false,
            })

            await signIn({
                email: data.email,
                password: data.password
            })

            history.push('/dashboard')
        
        }catch(err){
            if(err instanceof Yup.ValidationError){
            const errors = getValidationErrors(err)

            formRef.current?.setErrors(errors)
            }
            
            addToast({
                type: 'info',
                title: 'Erro na autenticação',
                description: 'Ocorreu um erro ao fazer login, verifique as credenciais'
            });
        }
    }, [signIn, addToast, history])
    
    return(
    <>
    <div>
        <Container>
            <Content>
                <AnimationContainer>
                    <img style={{paddingTop: 50}} src={LogoImg} alt="logo"></img>

                    <Form ref={formRef} onSubmit={handleSubmit}>
                        <h1>Faça seu logon</h1>
                        <Input name="email" icon={FiMail} placeholder="Email"></Input>
                        <Input name="password" icon={FiLock} placeholder="Senha" type="password"></Input>
                        <Button type="submit">Entrar</Button>

                        <a href="forgot">Esqueci minha senha</a>
                    </Form>
                    <Link to="/signup"><FiLogIn/>Criar conta</Link>
                </AnimationContainer> 
            </Content>
            <Background></Background>
        </Container>
    </div>
    </>
  
)}

export default SignIn
