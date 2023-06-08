import { ActiveBox, Box, ContentBox, Text, Title, FunctionsBtn, DemoBtn, Section } from "./SectionDemo.module";
import urlImageDemo from '../../images/img-pubblicitario-demo.png';

export const SectionDemo = () => {
 
 return (
    <Section>
        <Box>
            <img src={urlImageDemo} alt="Demo" width='340px'/>
            <ContentBox>
                <Title>
                    Raggiungi i tuoi clienti.<br/>Attraine di nuovi.
                </Title>
                <Text>
                    La piattaforma per la ristorazione che ti aiuta a creare e gestire la tua agenda di clienti fedeli.
                </Text>
            </ContentBox>
            <ActiveBox>
                <DemoBtn type="button">
                    Vedi la demo
                </DemoBtn>
                <FunctionsBtn type="button">
                    Scopri tutte le funzioni
                </FunctionsBtn>
            </ActiveBox>
        </Box>
    </Section>

  );
};

export default SectionDemo;