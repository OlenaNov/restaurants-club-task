import styled from "styled-components";

export const Section = styled.ul`
    list-style: none;

    @media (min-width: 366px) and (max-width: 426px) {
        margin: 0.5rem;
    }
`;

export const Item = styled.li`
    position: relative;
    display: flex;
    column-gap: 0;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 2.5rem;
`;


export const ContentBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`;

export const SubTitle = styled.h2`
    
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    font-family: Brevia;
    font-weight: 700;
    font-style: italic;
    --tw-text-opacity: 1;
    color: rgb(17 70 83/var(--tw-text-opacity));

    @media (min-width: 100px) and (max-width: 834px) {
        font-size: 2.25em;
        margin-bottom: 0.75rem;
    }
`;