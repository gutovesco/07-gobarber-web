import styled from 'styled-components'

export const Container = styled.div`
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;
    color: #f4ede8;
    display: flex;
    align-items: center;

    & + div {
    margin-top: 10px;
    }

    input{
        flex: 1;
        border: 0;
        background: transparent;
        color: #f4ede8;
    }

    svg{
        margin-right: 16px;
    }
`;