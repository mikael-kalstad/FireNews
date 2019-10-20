import React from 'react';
import styled from 'styled-components';
import Add from './add';

const DangerWrapper = styled.div`
    background: #F85757;
    padding-bottom: 50px;
`;

const UnderTitle = styled.h4`
    font-size: 20px;
    font-weight: 700;
    color: white;
    padding: 50px 0;
    margin: 0;
    text-align: center;
`;

const Btn = styled.div`
    margin: auto;
    width: 150px;
    height: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10000px;
    background-color: white;
    display: grid;
    justify-items: center;
    align-items: center;
    padding-right: 10px;
    text-decoration: none;
    transition: all 170ms ease;

    display: grid; 
    justify-items: center;
    align-items: center;
    cursor: pointer;

    :hover {
        filter: brightness(95%);
    }

    :active {
        box-shadow: none;
    }
`;  


const EditArticle = props => {
    return (
        <>
            <Add 
                data={props.data}
                categoryData={props.categoryData}
                id={props.match.params.id}
            />
            <DangerWrapper>
                <UnderTitle>Danger Zone</UnderTitle>
                <Btn onClick={() => deleteArticle(props.match.params.id)}>Delete article</Btn>
            </DangerWrapper>
        </>
    )
}

const deleteArticle = id => {
    fetch('http://localhost:4000/articles/' + id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
    })
    .then(res => res.json())
    .catch(err => console.log('Error: ', err));
}

export default EditArticle;