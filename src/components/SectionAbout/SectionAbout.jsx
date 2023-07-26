import { ActiveBox, Box, ContentBox, Text, Title, FunctionsBtn, AboutBtn, Section } from "./SectionAbout.module";
import urlImageAbout from '../../images/app-view-about.png';

export const SectionAbout = () => {
 
 return (
    <Section>
        <Box>
            <img src={urlImageAbout} alt="About" width='340px'/>
            <ContentBox>
                <Title>
                    Raggiungi i tuoi clienti.<br/>Attraine di nuovi.
                </Title>
                <Text>
                    La piattaforma per la ristorazione che ti aiuta a creare e gestire la tua agenda di clienti fedeli.
                </Text>
            </ContentBox>
            <ActiveBox>
                <AboutBtn type="button">
                    Vedi la demo
                </AboutBtn>
                <FunctionsBtn type="button">
                    Scopri tutte le funzioni
                </FunctionsBtn>
            </ActiveBox>
        </Box>
    </Section>

  );
};

export default SectionAbout;