import { BlockNavigation, BtnBurger, ContentPubblicitario, IconBurger, IconProfile, LogoRestaurantsClub, Pubblicitario, Wrapper } from "./Header.module";
import urlLogo from '../../images/logo-restaurants-club.png';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Wrapper>
            <Pubblicitario>
                <ContentPubblicitario>fino a 1400€ di credito pubblicitario incluso</ContentPubblicitario>
            </Pubblicitario>
            <BlockNavigation>
                <BtnBurger type="button">
                    <IconBurger />
                </BtnBurger>
                <LogoRestaurantsClub src={urlLogo} alt="Restaurants Club" />
                <Link to='login'>
                    <IconProfile /> 
                </Link>          
            </BlockNavigation>
        </Wrapper>
    );
};

export default Header;