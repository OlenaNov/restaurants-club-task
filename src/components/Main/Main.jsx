import SectionAdditionalFeatures from "../SectionAdditionalFeatures";
import SectionAdvantages from "../SectionAdvantages";
import SectionAbout from "../SectionAbout";
import { Wrapper } from "./Main.styled";

export const Main = () => {
 
 return (
    <Wrapper>
      <SectionAbout />
      <SectionAdvantages />
      <SectionAdditionalFeatures />
    </Wrapper>
  );
};

export default Main;