import styled from 'styled-components';

const TwoCol = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > button:first-of-type {
        margin-right: .5rem;
    }

    &.billing > div {
        width: 30%;
    }

    &.billing > div:first-of-type {
        margin-right: 2rem;
    }

    &.shipping > div:first-of-type {
        margin-right: 2rem;
        width: 30%;
    }
`

export default TwoCol;