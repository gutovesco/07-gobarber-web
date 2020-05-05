import React from 'react';
import {Container} from './styles';
import {FiAlertCircle, FiXCircle} from 'react-icons/fi';
import {ToastMessage, useToast} from '../../hooks/Toast';

interface ToastProps{
    message: ToastMessage;
}

const Toast: React.FC<ToastProps> = ({message}) => {
    const {removeToast} = useToast();

    return (
        <Container type={message.type}>
                <FiAlertCircle size={20}/>
 
                <div>
                     <strong>{message.title}</strong>
                     <p>{message.description}</p>   
                 </div> 
 
                 <button onClick={() => removeToast(message.id)} type="button"><FiXCircle size={18}></FiXCircle></button>
        </Container>
    )
}

export default Toast;