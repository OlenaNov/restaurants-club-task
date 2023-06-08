import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";

export const Wrapper = styled.header`
    display: flex;
    flex-direction: column;

    *, :after, :before {
        border: 0 solid #e5e7eb;
        box-sizing: border-box;
    }
`;

export const Pubblicitario = styled.div`
    --tw-bg-opacity: 1;
    background-color: rgb(17 70 83/var(--tw-bg-opacity));
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    display: flex;
`;

export const ContentPubblicitario = styled.p`
    font-family: Poppins,sans-serif;
    font-weight: 500;
    --tw-text-opacity: 1;
    color: rgb(255 255 255/var(--tw-text-opacity));
    text-transform: uppercase;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin: 0;
    margin-bottom: 0.75rem;

    @media (min-width: 366px) and (max-width: 426px) {
        font-size: .9rem;
    }
`;

export const BlockNavigation = styled.div`
    transition-duration: .3s;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    width: 100%;
    z-index: 10;
    --swiper-navigation-color: #000;
    --swiper-navigation-size: 44px;
    --swiper-theme-color: #007aff;
`;

export const BtnBurger = styled.button`
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
    --animate-duration: 1s;
    --animate-delay: 1s;
    --animate-repeat: 1;
    --swiper-navigation-color: #000;
    --swiper-navigation-size: 44px;
    --swiper-theme-color: #007aff;
`;

export const IconBurger = styled(GiHamburgerMenu)`
    color: rgb(0, 178, 122);
    display: block;
    vertical-align: middle;
    stroke: currentcolor;
    fill: currentcolor;
    stroke-width: 0;
    color: rgb(0, 178, 122);
    height: 30;
    width: 30;
    overflow-clip-margin: content-box;
    overflow: hidden;
`;

export const LogoRestaurantsClub = styled.img`
    width: 66.666667%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    display: block;
    vertical-align: middle;
    overflow-clip-margin: content-box;
    overflow: clip;
    line-height: inherit;
`;

export const IconProfile = styled(BsPersonCircle)`
    color: rgb(0, 178, 122);
    display: block;
    vertical-align: middle;
    stroke: currentcolor;
    fill: currentcolor;
    stroke-width: 0;
    color: rgb(0, 178, 122);
    height: 30;
    width: 30;
    overflow-clip-margin: content-box;
    overflow: hidden;
    line-height: inherit;
`;