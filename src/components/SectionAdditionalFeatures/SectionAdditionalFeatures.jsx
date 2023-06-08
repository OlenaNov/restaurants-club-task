import { Box, ItemBox, ImgBox, Item, Section, Image, ContentBox, SubTitle, TextBox, Text, Span, ActiveBox, List, TitleList, TextItem, LinkBox, ArrowSvg, LinkBtn } from "./SectionAdditionalFeatures.module";
import urlRestaurant from '../../images/restaurant-features.svg';
import urlMan from '../../images/man-features.svg';
import urlPhone from '../../images/phone-features.svg';

export const SectionAdditionalFeatures = () => {
 
 return (
    <Section>
      <Item>
        <Box>
          <ItemBox>
            <ImgBox>
              <Image src={urlRestaurant} alt="Restaurant" />
            </ImgBox>
            <ContentBox>
              <SubTitle>Attrai</SubTitle>
              <TextBox>
                <Text>
                  Cattura l’attenzione su internet e fai conoscere la tua attività. Stai sempre ai
                    <Span> primi posti </Span>
                  su Google: con un 
                    <Span> sito web </Span>
                  ottimizzato e la scheda
                    <Span> Google MyBusiness </Span>
                  completa fatti trovare da locali e turisti.
                </Text>
              </TextBox>
              <ActiveBox>
                <TitleList>Lo puoi fare con:</TitleList>
                <List>
                  <li><TextItem>#clientetipo</TextItem></li>
                  <li><TextItem>#GoogleMyBusiness</TextItem></li>
                  <li><TextItem>#socialmedia</TextItem></li>
                </List>
              </ActiveBox>
              <LinkBox>
                <LinkBtn>
                  Fai un Tour del prodotto
                  <ArrowSvg />
                </LinkBtn>
              </LinkBox>
            </ContentBox>

          </ItemBox>
        </Box>
      </Item>
      <Item>
        <Box>
          <ItemBox>
            <ImgBox>
              <Image src={urlMan} alt="Man" />
            </ImgBox>
            <ContentBox>
              <SubTitle>Converti</SubTitle>
              <TextBox>
                <Text>
                  Trasforma tutti i “Mi Piace” sui social media e le visualizzazioni del tuo sito in clienti con le Campagne Pubblicitarie ottimizzate. Per il budget marketing? C’è il
                    <Span>  credito pubblicitario </Span>
                  incluso!
                </Text>
              </TextBox>
              <ActiveBox>
                <TitleList>Lo puoi fare con:</TitleList>
                <List>
                  <li><TextItem>#clientetipo</TextItem></li>
                  <li><TextItem>#GoogleMyBusiness</TextItem></li>
                  <li><TextItem>#socialmedia</TextItem></li>
                </List>
              </ActiveBox>
              <LinkBox>
                <LinkBtn>
                  Fai un Tour del prodotto
                  <ArrowSvg />
                </LinkBtn>
              </LinkBox>
            </ContentBox>
          </ItemBox>
        </Box>
      </Item>
      <Item>
        <Box>
          <ItemBox>
            <ImgBox>
              <Image src={urlPhone} alt="Phone" />
            </ImgBox>
            <ContentBox>
              <SubTitle>Fidelizza</SubTitle>
              <TextBox>
                <Text>
                  Crea una base
                    <Span> clienti fedele e affezionata </Span>
                  con cui crescere: invita i tuoi clienti a tornare da te co 
                    <Span> Newsletter </Span>
                  personalizzate, inviti ad eventi e promozioni speciali con la tua
                    <Span> carta Fedeltà.</Span>
                </Text>
              </TextBox>
              <ActiveBox>
                <TitleList>Lo puoi fare con:</TitleList>
                <List>
                  <li><TextItem>#newsletter</TextItem></li>
                  <li><TextItem>#maildedicate</TextItem></li>
                  <li><TextItem>#agendadigitale</TextItem></li>
                </List>
              </ActiveBox>
              <LinkBox>
                <LinkBtn>
                  Fai un Tour del prodotto
                  <ArrowSvg />
                </LinkBtn>
              </LinkBox>
            </ContentBox>
          </ItemBox>
        </Box>
      </Item>
    </Section>
  );
};

export default SectionAdditionalFeatures;