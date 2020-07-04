import styled from 'styled-components';
import theme from '../settings';

const Button = styled.button`
    font-size: 1em;
    margin: 1rem 0;
    padding: 1rem 2rem;
    background-color: ${theme.primary};
    border: none;
    border-radius: 5px;
    color: ${theme.white};
    cursor: pointer;
    display: block;

    &[disabled] {
        background-color: ${theme.secondary};
        color: black;
    }
`

export default Button;