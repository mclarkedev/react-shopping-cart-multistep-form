import styled from 'styled-components';
import theme from '../settings';

const RightAsideRail = styled.aside`
    section {
        padding: 1rem;
        border-bottom: 1px solid ${theme.secondary};
        text-align: left;       
    }

    section:last-of-type {
        border: none;
    }

    .gift-card {
        display: flex;
        align-items: center;
    }

    .gift-card input {
        border: none;
        background-color: ${theme.secondary};
        width: 80%;
        height: 3rem;
        margin-right: .5rem;
    }

    .order-totals {
        display: flex;
        justify-content: space-between;
    }

    .order-totals > div:nth-child(2) {
        text-align: right;
    }

    .cart-item {
        display: flex;
        margin-bottom: 2rem;
        align-items: flex-start;
    }

    .cart-item > img {
        margin-right: 1rem;
    }

    .product-img {
        max-width: 100px;
        height: auto;
    }
`
export default RightAsideRail;