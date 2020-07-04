import styled from 'styled-components';
import theme from '../settings';

const Form = styled.form`
    @media screen and (min-width: 680px) {
        max-width: 300px;
    }

    @media screen and (min-width: 800px) {
        max-width: 20rem;
    }

    @media screen and (min-width: 1100px) {
        margin: 0 auto;
    }

    label {
        text-align: left;
        color: rgb(150, 149, 149);
        margin-bottom: 0.5rem;
        display: block;
        cursor: pointer;
    }

    input, select {
        border: none;
        background-color: ${theme.secondary};
        width: 100%;
        padding: .75rem;
        margin-bottom: 1rem;
    }
`
export default Form;
