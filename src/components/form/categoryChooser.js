import React from 'react';
import styled from 'styled-components';
import CategorySelector from './categorySelector';

const Container = styled.div`
    width: fit-content;
    display: grid;
    grid-gap: 20px;
    grid-auto-flow: column;
`;

let scroll_color = 'lightgrey';
let scroll_borderRadius = '5px';

const Slider = styled.div`
    max-width: 100%;
    padding-bottom: 30px;
    -webkit-overflow-scrolling: touch;
    overflow-x: auto;        

    ::-webkit-scrollbar {
        height: 10px; 
    }

    /* The empty space “below” the progress bar. */
    ::-webkit-scrollbar-track {
        background-color: #F5F5F5;
        border: 1px solid ${scroll_color};
        border-radius: ${scroll_borderRadius};
    }

    /*  The draggable scrolling element resizes depending on the size of the scrollable element. */
    ::-webkit-scrollbar-thumb {
        background-color: ${scroll_color};
        border-radius: ${scroll_borderRadius};
    }
`;

const CategoryChooser = (props) => {
    let categories = [];

    for (let i = 0; i < 7; i++) {
        categories.push(
            <CategorySelector key={i} loading={true}/>
        )
    }

    if (props.data && props.data.length !== 0) {
        // clear all skeleton data
        categories = [];

        props.data.forEach(c => {
            categories.push(
                <CategorySelector 
                    key={c._id}
                    name={c.name}
                    active={props.active === c.name}
                    setActive={props.setActive}
                    disabled={props.disabled}
                />
            );
        });
    }

    return (
        <Slider>
            <Container>
                {categories}
            </Container>
        </Slider>
    );
}

export default CategoryChooser;