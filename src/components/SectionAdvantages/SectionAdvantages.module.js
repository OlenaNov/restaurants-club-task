import styled from "styled-components";

export const Section = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 2rem;
    padding-top: 2rem;
    --tw-bg-opacity: 1;
    background-color: rgb(246 246 244/var(--tw-bg-opacity));
    

    @media (min-width: 366px) and (max-width: 426px) {
        row-gap: 1.75rem;
        height: fit-content;
    }
`;

export const ContentBox = styled.ul`
    display: flex;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
    padding-top: 0.75rem;
    padding-bottom: 10px;
    padding-left: 40px;
    padding-right: 40px;
    column-gap: 2.5rem;
    width: 100%;
    --tw-bg-opacity: 1;

    @media (min-width: 366px) and (max-width: 426px) {
        row-gap: 5rem;
        flex-direction: column;
    }
`;

 export const Item = styled.li`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`;

 export const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: fit-content;
    margin: 0.5rem;
    margin-left: auto;
    margin-right: auto;
`;

 export const ProfileImg = styled.img`
    display: block;
    vertical-align: middle;
    width: 40%;
    height: 60%;
    margin-left: auto;
    margin-right: auto;
    --tw-bg-opacity: 1;

    @media (min-width: 366px) and (max-width: 426px) {
        width: 50%;
    }
`;


 export const SubTitle = styled.h2`
    display: block;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0;
    margin-bottom: 15px;
    font-size: 1.5em;
    text-align: center;
    --tw-text-opacity: 1;
    color: rgb(0 0 0/var(--tw-text-opacity));
    font-family: Poppins,sans-serif;
    font-weight: 700;
    --tw-bg-opacity: 1;
`;


 export const Text = styled.p`
    text-align: center;
    margin: 0;
    font-family: Poppins,sans-serif;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(0 0 0/var(--tw-text-opacity));
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    --tw-bg-opacity: 1;

    @media (min-width: 100px) and (max-width: 834px) {
        font-family: Poppins,sans-serif;
        font-size: 1.125em;
        font-weight: 400;
        margin-bottom: 0.75rem;
    }
`;

 export const ArrowBox = styled.div`
    display: flex;
    column-gap: 0.75rem;
    flex-direction: row;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
    padding-bottom: 24px;
    padding-left: 40px;
    padding-right: 40px;
    --tw-bg-opacity: 1;
`;

 export const ArrowBtn = styled.button`
    cursor: pointer;
    -webkit-appearance: button;
    background-color: initial;
    background-image: none;
    text-transform: none;
    color: inherit;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    margin: 0;
    padding: 0;
`;

 export const ArrowImg = styled.img`
    height: auto;
    max-width: 100%;
    display: block;
    vertical-align: middle;
    overflow-clip-margin: content-box;
    overflow: clip;
    cursor: pointer;
    text-transform: none;
    color: inherit;
    font-family: inherit;
    font-size: 100%;
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: normal;
    word-spacing: normal;
    text-indent: 0px;
    text-shadow: none;
    text-align: center;
`;