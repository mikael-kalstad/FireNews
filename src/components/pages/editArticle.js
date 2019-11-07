import React, { useState } from 'react';
import styled from 'styled-components';
import LoadingBtn from '../btn/loadingBtn';
import ArticleForm from '../form/articleForm';
import LogoButton from '../btn/logoBtn';
import { Link } from 'react-router-dom';
import Dialog from '../dialog';
import ArticleDAO from '../../dao/articleDAO';

const articleDAO = new ArticleDAO();

const DangerWrapper = styled.div`
    max-width: 1200px;
    border: 2px solid #F85757;
    border-radius: 10px;
    margin: 30px auto;
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

const EditArticle = props => {
    const [loading, setLoading] = useState(false);
    const [finished, setFinished] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [error, setError] = useState(false);

    const StyledLink = styled(props => <Link {...props} />)`
        transition: all 500ms ease;
        display: ${redirect ? 'block' : 'hidden'};
        opacity: ${redirect ? '1' : '0'};
        transform: translateY(${redirect ? '0px' : '50px'});
        text-decoration: none;
    `;

    const toggleShowDialog = () => setShowDialog(!showDialog);

    const handleClick = async() => {
        toggleShowDialog();

        setLoading(true);

        const res = await articleDAO.deleteArticle(props.match.params.id);
        console.log(res instanceof Error)

        if (!(res instanceof Error)) {
            setLoading(false);
            setFinished(true);
        } else {
            setLoading(false);
            setFinished(true);
            setError(true);
        }
    }
    if (finished && !loading) {
        setTimeout(() => {
            setRedirect(true);
        }, 800);
    }

    return (
        <>
            <ArticleForm 
                title='Edit article'
                text='Change the content of the article below and dont forget to save the changes! You can also delete article.'
                btnName='Save changes'
                finishedMsg='Save changed'
                backTo='/edit'
                data={props.data}
                categoryData={props.categoryData}
                id={props.match.params.id}
                disabled={loading || finished}
                updateArticles={props.updateArticles}
                request={articleDAO.updateArticle}
            />

            {showDialog && 
                <Dialog 
                    title='Delete article?'
                    text='Are you sure you want to delete this article?'
                    btnActionText='Yes, delete article'
                    btnSecondaryText='Cancel'
                    actionClick={handleClick}
                    display={showDialog}
                    toggleDisplay={toggleShowDialog}
                />
            }

            <DangerWrapper>
                <UnderTitle>Danger Zone</UnderTitle>
                <Text>NB! Deleting this article is irreversible.</Text>
                <LoadingBtn 
                    name='Delete'
                    loading={loading}
                    finished={finished}
                    error={error}
                    handleClick={() => toggleShowDialog()}
                    backgroundColor='#F85757'
                />

                {finished && !error && <Message>Article deleted</Message>}
                {error && <Message>An error occured, could not delete the article</Message>}

                <StyledLink to='/edit' onClick={() => props.updateArticles()}>
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