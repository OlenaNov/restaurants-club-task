import SectionAdditionalFeatures from "../SectionAdditionalFeatures/SectionAdditionalFeatures";
import SectionAdvantages from "../SectionAdvantages/SectionAdvantages";
import SectionDemo from "../SectionDemo";
import { Wrapper } from "./Main.styled";

export const Main = () => {
 
 return (
    <Wrapper>
      <SectionDemo />
      <SectionAdvantages />
      <SectionAdditionalFeatures />
    </Wrapper>
  );
};

export default Main;