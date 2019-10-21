import React, { useState } from 'react';
import styled from 'styled-components';
import Add from './add';
import { Redirect, Link } from 'react-router-dom';
import LoadingBtn from '../btn/loadingBtn';

const DangerWrapper = styled.div`
    /* background: whi; */
    border: 2px solid #F85757;
    border-radius: 10px;
    margin: 30px;
    padding-bottom: 50px;
    display: grid;
    justify-items: center;
    align-items: center;
`;

const UnderTitle = styled.h4`
    font-size: 20px;
    font-weight: 700;
    color: #F85757;
    padding: 50px 0;
    margin: 0;
    text-align: center;
`;

const Text = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: black;
`;



const EditArticle = props => {
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);

    const deleteArticle = id => {
        setLoading(true);

        fetch('http://localhost:4000/articles/' + id, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
        })
        .then(() => {
            setLoading(false);
            setFinished(true);
        })
        .catch(err => console.log('Error: ', err));
    }

    return (
        <>
            <Add 
                title='Edit article'
                text='Change the content of the article below and dont forget to save the changes! You can also delete article.'
                btnText='Save changes'
                data={props.data}
                categoryData={props.categoryData}
                id={props.match.params.id}
            />
            <DangerWrapper>
                <UnderTitle>Danger Zone</UnderTitle>
                <LoadingBtn 
                    name='Delete'
                    loading={loading}
                    finished={finished}
                    handleClick={() => deleteArticle(props.match.params.id)}
                    backgroundColor='#F85757'
                />

                {finished && <Text>Article deleted</Text>}
            </DangerWrapper>

            {/* {finished && <Redirect to='/' />} */}
        </>
    )
}

export default EditArticle;