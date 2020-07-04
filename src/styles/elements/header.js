import styled from 'styled-components';
import theme from '../settings';

const Header = styled.header`
    color: ${theme.white};
    padding: 1rem 2rem;
    align-content: center;
    justify-content: space-between;
    display: flex;
    border-bottom: 1px solid ${theme.secondary};
    background-color: ${theme.primary};

    img {
        filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(355deg) brightness(107%) contrast(101%);
    }

    .brand {
        display: flex;
        justify-content: space-between;

        p {
            margin: 0;
            padding: 0;
            font-weight: 700;
            font-size: 1.5em;
        }
    }

    .hamburger {
        width: 30px;
        margin-right: 1rem;
    }

    ul {
        padding: 0;
        margin: .5rem 0 0 0;
        list-style-type: none;
        text-align: center;
        display: none;
        justify-content: space-between;

        li {
            padding: 0 2rem;
        }
    }

    .nav-icons {
        display: flex;
    }

    .nav-icons img {
        width: 25px;
        padding: 0 .5rem;
    }

    @media screen and (min-width: 680px) {
        padding: 1.5rem 2.5rem;

        .hamburger {
            display: none;
        }

        ul {
            display: flex;
            font-size: 1em;
        }

        .nav-icons img {
            width: 25px;
            padding: 0 1rem;
        }
    }
`;

export default Header;