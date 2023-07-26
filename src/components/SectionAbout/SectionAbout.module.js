import styled from 'styled-components';


export const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 2.5rem;
    padding-top: 2.5rem;
    width: 80%;
`;

export const Box = styled.div`
    display: flex;
    
    gap: 1.5rem;
    width: 100%;
    @media (min-width: 366px) and (max-width: 426px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const ContentBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

 
 export const Title = styled.h1`
    display: flex;
    font-family: Brevia;
    font-weight: 850;
    --tw-text-opacity: 1;
    color: rgb(0 178 122/var(--tw-text-opacity));
    align-self: flex-start;
    margin: 0;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    @media (min-width: 100px) and (max-width: 834px) {
        font-size: 3.75em;
        margin-bottom: 0.75rem;
    }

    @media (min-width: 366px) and (max-width: 426px) {
        text-align: center;
    }
`;

 export const Text = styled.p`
    display: flex;
    margin: 0
    padding-right: 0;
    padding-bottom: 1.25rem;
    align-self: flex-start;
    margin-top: 1.25rem;
    font-size: 1.125em;
    margin-bottom: 0.75rem;
    font-family: Poppins,sans-serif;
    font-weight: 500;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    @media (min-width: 366px) and (max-width: 426px) {
        text-align: center;
    }
`;

 export const ActiveBox = styled.div`
    display: flex;
    gap: 1.25rem;

    @media (min-width: 366px) and (max-width: 426px) {
         justify-content: center;
         flex-direction: column;
         text-align: center;
    }
`;

 export const AboutBtn = styled.button`
    width: 100%;    
    text-transform: none;
    margin: 0;
    align-self: center;
    font-size: 100%;
    color: inherit;
    cursor: pointer;
    font-family: Poppins,sans-serif;
    font-weight: 600;
    --tw-bg-opacity: 1;
    background-color: rgb(220 255 207/var(--tw-bg-opacity));
    --tw-border-opacity: 1;
    border-color: rgb(0 0 0/var(--tw-border-opacity));
    border-width: 3px

    @media (min-width: 366px) and (max-width: 426px) {
        padding-bottom: 1rem;
        padding-top: 1rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
`;

 export const FunctionsBtn = styled.button`
    padding-bottom: 1.25rem;
    padding-top: 1.25rem;
    width: fit-content;
    height: max-content;
    align-self: center;
    cursor: pointer;
    text-transform: none;
    margin: 0;
    padding: 0;
    font-size: 100%;
    font-family: Poppins,sans-serif;
    font-weight: 600;
    text-decoration-line: underline;
`;