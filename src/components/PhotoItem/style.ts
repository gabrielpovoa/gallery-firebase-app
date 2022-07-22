import styled from 'styled-components';

export const Container = styled.div`
    background-color:#7159c1;
    border-radius: .5rem;
    padding: 1rem;

    img {
        max-width: 100%;
        display: block;
        margin-bottom: 1rem;
        border-radius: .5rem;
        object-fit: cover;
    }
    p {
        font-size: 1.3rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
`;
