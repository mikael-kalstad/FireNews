import React, { useState } from 'react';
import styled from 'styled-components';
import CategoryChooser from '../form/categoryChooser';

const Container = styled.div`
    width: 100%;
    border: 1px solid red;
`;

const EditTop = (props) => {
    const [category, setCategory] = useState('');

    return (
        <Container>
            <CategoryChooser 
                data={props.data}
                active={category}
                setActive={setCategory}
            />
        </Container>
    );
}

export default EditTop;