import styled from 'styled-components';

export const Container = styled.div`
  background-color: #27282f;
  color: #fff;
  min-height: 100vh;
`;

export const Area = styled.div`
    margin: auto;
    max-width: 98rem;
    padding: 3rem 0;
`;

export const Header = styled.h1`
    margin: 0;
    font-size: 4rem;
    font-family: 'Poppins', sans-serif;
    padding: 0;
    text-align: center;
    margin-bottom: 3rem;
`;

export const ScreenWarning = styled.div`
    text-align: center;

    .emoji {
        font-size: 5rem;
        margin-bottom: 2rem;
    }
    .loading {
        color: #7159c1;
        font-size: 2rem;
    }
`;

export const PhotoList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
`

export const UploadForm = styled.form`
    background-color: #7159c1;
    padding: 1.5rem;
    border-radius: .5rem;
    margin-bottom: 3rem;

    input[type=submit] {
        background-color: #756df4;
        color: #FFF;
        padding: 1rem 2rem;
        font-size: 1.6rem;
        margin: 0 20px;
        cursor: pointer;
        border-radius: .5rem;
        text-transform: capitalize;

        &:hover {
            opacity: 0.9;
        }
    }
    
`;