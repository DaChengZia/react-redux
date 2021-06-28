import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
    background-color: rgb(219,0,17);
    border: 1px solid rgb(219,0,17);
    border-radius: 0;
    overflow: hidden;
    color: #fff;
    height: 40px;
    line-height: 40px;
    padding: 0 19px;
    outline: none;
    font-size: 14px;
    &:hover {
        background-color: rgb(175,0,13);
        border-color:rgb(175,0,13);
    }
    &:active {
        background-color: rgb(131,0,10);
        border-color: rgb(131,0,10);
    }
`

const Button = ({children, ...rest}) => {
    return(
        <ButtonWrapper {...rest}>{children}</ButtonWrapper>
    )
}

export default Button;