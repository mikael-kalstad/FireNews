import React from 'react';
import styled from 'styled-components';

const DialogBox = styled.div`
    position: fixed;
    left: 0; right: 0; top: 0; bottom: 0;
    margin: auto;
    display: ${props => props.show ? 'block' : 'none'}; 
    z-index: 10000;
    width: 470px;
    height: 240px;
    background: white;
    border-radius: 5px;
    display: grid;
    grid-template-rows: 60px auto 70px;
    align-items: center;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.3);
`;

const Title = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: #444;
    padding: 10px;
`;

const TextWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f6f6f6;
    border-bottom: 1px solid #999;
    border-top: 1px solid #999;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #444;
    padding: 10px;
`;

const ButtonWrapper = styled.div`
    display: grid; 
    grid-template-columns: auto auto;
    grid-gap: 10px;
    justify-content: end;
    margin-right: 10px;
`;

const Btn = styled.button`
    background: ${props => props.action === 'true' ? '#df2e06' : 'white'};
    border: ${props => props.action === 'true' ? 'none' : '1px solid #777'};
    color: ${props => props.action === 'true' ? 'white' : '#777'};
    border-radius: 5px;
    outline: none;
    padding: 9px 15px;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;

    :focus {
        outline: blue;                                  
    }

    :hover {
        filter: brightness(110%);
    }
`;

const Dialog = props => {
    let overlay = document.getElementById('overlay');
    overlay.style.display = props.display ? 'block' : 'none';
    overlay.onclick = () => toggleDisplay();

    const toggleDisplay = () => {
        props.toggleDisplay();
        overlay.style.display = 'none';
    }

    return (
        <>
            <DialogBox>
                <Title>{props.title}</Title>
                <TextWrapper>
                    <Text>{props.text}</Text>
                </TextWrapper>

                <ButtonWrapper>
                    <Btn 
                        onClick={() => toggleDisplay()}
                    >
                        {props.btnSecondaryText}
                    </Btn>
                    
                    <Btn 
                        onClick={() => {
                            props.actionClick();
                            toggleDisplay();
                        }}
                        action='true'
                    >
                        {props.btnActionText}
                    </Btn>
                </ButtonWrapper>
            </DialogBox>
        </>
    )
}

export default Dialog;