import React, { useState } from 'react';
import styled from 'styled-components';
import LoadingBtn from '../btn/loadingBtn';
import ArticleForm from '../form/articleForm';
import LogoButton from '../btn/logoBtn';
import { Link } from 'react-router-dom';

const DangerWrapper = styled.div`
    border: 2px solid #F85757;
    border-radius: 10px;
    margin: 30px;
    padding-bottom: 30px;
    display: grid;
    justify-items: center;
    align-items: center;
`;

const UnderTitle = styled.h4`
    font-size: 20px;
    font-weight: 700;
    color: #F85757;
    padding: 20px 0 10px;
    margin: 0;
    text-align: center;
`;

const Text = styled.p`
    font-size: 18px;
    font-weight: 400;
    color: #888;
    margin-bottom: 50px;
`;

const Message = styled.p`
    font-size: 24px;
    font-weight: 600;
    color: black;
`;

const StyledLink = styled(props => <Link {...props} />)`
    transition: all 500ms ease;
    display: ${props => props.redirect ? 'block' : 'hidden'};
    opacity: ${props => props.redirect ? '1' : '0'};
    transform: translateY(${props => props.redirect ? '0px' : '50px'});
    text-decoration: none;
`;

const EditArticle = props => {
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const [redirect, setRedirect] = useState(false);

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

    if (finished && !loading) {
        setTimeout(() => {
            setRedirect(true);
        }, 1000);
    }

    const request = (data, id) => {
        return fetch('http://localhost:4000/articles/' + id, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <>
            <ArticleForm 
                title='Edit article'
                text='Change the content of the article below and dont forget to save the changes! You can also delete article.'
                btnName='Save changes'
                finishedMsg='Save changed'
                data={props.data}
                categoryData={props.categoryData}
                id={props.match.params.id}
                disabled={loading || finished}
                updateArticles={props.updateArticles}
                request={request}
            />
            <DangerWrapper>
                <UnderTitle>Danger Zone</UnderTitle>
                <Text>NB! Deleting this article is irreversible.</Text>
                <LoadingBtn 
                    name='Delete'
                    loading={loading}
                    finished={finished}
                    handleClick={() => deleteArticle(props.match.params.id)}
                    backgroundColor='#F85757'
                />

                {finished && <Message>Article deleted</Message>}

                <StyledLink to='/edit' redirect={redirect} onClick={() => props.updateArticles()}>
                    <LogoButton 
                        logo='/icons/exit.svg' 
                        text='Exit' 
                        color='#80D7EA'
                    />
                </StyledLink>
            </DangerWrapper>
        </>
    )
}

export default EditArticle;