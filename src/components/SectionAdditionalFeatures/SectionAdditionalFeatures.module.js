import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";

 export const Section = styled.ul`
    display: flex;
    flex-direction: column;
`;

 export const Item = styled.li`
    display: flex;
    justify-content: center;
    width: 100%;
    --tw-bg-opacity: 1;
    background-color: rgb(255 255 255/var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(0 0 0/var(--tw-text-opacity));

     @media (min-width: 366px) and (max-width: 426px) {
        padding-bottom: 3.5rem;
        height: fit-content;
    }

    :nth-child(2n) {
        --tw-bg-opacity: 1;
        background-color: rgb(17 70 83/var(--tw-bg-opacity));
        --tw-text-opacity: 1;
        color: rgb(255 255 255/var(--tw-text-opacity));
    }
`;

 export const Box = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;

    @media (min-width: 366px) and (max-width: 426px) {
        width: 100%;
    }
`;

 export const ItemBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

 export const ImgBox = styled.div`

    padding-top: 4rem;

    @media (min-width: 366px) and (max-width: 426px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;

 export const Image = styled.img`
    display: block;
    overflow-clip-margin: content-box;
    overflow: clip;
    vertical-align: middle;
    height: auto;
    max-width: 100%;
`;

 export const ContentBox = styled.div`
 
    @media (min-width: 366px) and (max-width: 426px) {
        width: 100%;
        padding: 0;
    }
`;

 export const SubTitle = styled.h2`

    font-family: Brevia;
    font-weight: 700;
    color: inherit;
    font-size: 3em;
    font-style: italic;
    margin: 0;
    margin-bottom: 0.75rem;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

    @media (min-width: 366px) and (max-width: 426px) {
        text-align: center;
    }
`;


 export const TextBox = styled.div`
    display: flex;
    column-gap: 1rem;
    flex-direction: column;
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 1rem;
`;


 export const Text = styled.p`

    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    width: 100%;
    font-weight: 400;
    font-family: Poppins,sans-serif;
    margin: 0;
    color: inherit;

    @media (min-width: 366px) and (max-width: 426px) {
        text-align: center;
    }

    @media (min-width: 100px) and (max-width: 834px) {
        font-size: 1.125em;
        margin-bottom: 0.75rem;
    }
`;

 export const Span = styled.span`
    font-family: Poppins,sans-serif;
    font-weight: 700;
    color: inherit;
    font-size: 1.125em;

    @media (min-width: 366px) and (max-width: 426px) {
        text-align: center;
    }
`;

 export const ActiveBox = styled.div`
    padding-bottom: 1.25rem;
`;

 export const TitleList = styled.h3`
    display: block;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    margin: 0;
    margin-bottom: 0.75rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    font-weight: 600;
    font-family: Poppins,sans-serif;
    text-align: center;
    font-size: 1.5em;
`;

 export const List = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-left: auto;
    margin-right: auto;
`;

 export const TextItem = styled.p`
    display: flex;
    width: fit-content;
    margin: 0;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    font-family: Poppins,sans-serif;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(255 255 255/var(--tw-text-opacity));
    text-transform: uppercase;
    --tw-bg-opacity: 1;
    background-color: rgb(17 70 83/var(--tw-bg-opacity));
    border-radius: 9999px;

    @media (min-width: 100px) and (max-width: 834px) {
        font-family: Poppins,sans-serif;
        font-size: 1.125em;
        font-weight: 400;
        margin-bottom: 0.75rem;
    }
`;

 export const LinkBox = styled.div`
    display: flex;
    justify-content: center;
`;

 export const LinkBtn = styled.button`
    font-family: Poppins,sans-serif;
    font-weight: 700;
    font-size: 100%;
    line-height: inherit;
    margin: 0;
    padding: 0;
    text-decoration-line: underline;
    color: inherit;
    cursor: pointer;

    @media (min-width: 366px) and (max-width: 426px) {
        text-align: center;
    }
`;

 export const ArrowSvg = styled(AiOutlineArrowRight)`
    user-select: none;
    width: 1em;
    height: 1em;
    display: inline-block;
    fill: currentcolor;
    flex-shrink: 0;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-size: 1.5rem;
    margin: 0.5rem;
    vertical-align: middle;
    overflow-clip-margin: content-box;
    overflow: hidden;
`;