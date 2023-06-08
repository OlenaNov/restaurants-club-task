import { ArrowBox, ArrowBtn, ArrowImg, ContentBox, ImgBox, Item, ProfileImg, Section, Text, SubTitle } from "./SectionAdvantages.module";
import urlProfile from '../../images/profile-advantages.svg';
import urlPC from '../../images/pc-advantages.svg';
import urlSurfer from '../../images/surfer-advantages.svg';
import urlArrow from '../../images/arrow_down.svg';

export const SectionAdvantages = () => {
 
 return (
    <Section>
      <ContentBox>
        <Item>
            <ImgBox>
              <ProfileImg src={urlProfile} alt="Profile" />
            </ImgBox>
            <SubTitle>(Ri)prenditi i tuoi clienti </SubTitle>
            <Text>
              Crea e gestisci la tua base clienti autonomamente con i migliori strumenti: niente più marketplace che ti sottraggono fatturato e contatti
            </Text>
        </Item>
        <Item>
            <ImgBox>
              <ProfileImg src={urlPC} alt="PC" />
            </ImgBox>
            <SubTitle>Digitalizzati in modo efficace</SubTitle>
            <Text>
              Avere un sito o un’app non basta: per essere efficace online bisogna usare i giusti strumenti di marketing digitale
            </Text>
        </Item>
        <Item>
            <ImgBox>
              <ProfileImg src={urlSurfer} alt="Surfer" />
            </ImgBox>
            <SubTitle>Stai sempre sulla cresta dell’onda</SubTitle>
            <Text>
              Nulla è lasciato al caso quando si tratta della tua cucina: la stessa cura è fondamentale per trasmettere il valore del tuo ristorante 
            </Text>
        </Item>
      </ContentBox>
      <ArrowBox>
        <ArrowBtn>
          <ArrowImg src={urlArrow} alt="Arrow" />
        </ArrowBtn>
      </ArrowBox>
    </Section>
  );
};

export default SectionAdvantages;