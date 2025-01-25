import Container from '@/components/Container';
import { Tabs, Tab } from "@/components/Tabs";
import Grid from '@/components/Grid';
import Box from '@/components/Box';
import Accordion from '@/components/Accordion';
import Layout from '@/components/Layout';
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import RichText from '@/components/RichText';
import Link from 'next/link';
import InNumbers from '@/components/inNumbers';
import Image from 'next/image';
import Gallery from '@/components/Gallery';
import ContainerNoWrapper from '@/components/ContainerNoWrapper';
import TeaserCard from '@/components/TeaserCard';

const Home: React.FC = () => {


  return (
    <Layout>
      <HeroBanner content={`
      <h1>Przekształcamy</br>
      <span class="color-primary-500 italic">Marzenia</span> w Rzeczywistość</h1>
      <p>Specjalizujemy się w projektowaniu stron internetowych, aplikacji webowych oraz kompleksowych usługach marketingowych i graficznych, od logotypów po materiały wizualne, które wzmacniają wizerunek Twojej marki.</p>
      <a class="button primary" href="/#contact">Napisz do nas</a>
      `} 
      background="neutral-900" 
      size="auto"/>
      <Container paddingBottom="3" background="neutral-900">
        <RichText>
          <h2 className="custom-center-text pb-3">Zaufali nam</h2>
        </RichText>
        <Box padding='3' background='neutral-700'>
          <Grid xs="2" md="5" xl="7" justify="center">
              <Image className="trusted-logo" alt="Logo infra-bruk" src="/img/zaufali-nam/logo-infra-bruk.png" height={50} width={100}/>
              <Image className="trusted-logo" alt="Logo infra-bruk" src="/img/zaufali-nam/logo-awt.png" height={50} width={100}/>
              <Image className="trusted-logo" alt="Logo infra-bruk" src="/img/zaufali-nam/logo-mogilno-run.png" height={50} width={100}/>
              <Image className="trusted-logo" alt="Logo infra-bruk" src="/img/zaufali-nam/logo-superspas.png" height={50} width={100}/>
              <Image className="trusted-logo" alt="Logo infra-bruk" src="/img/zaufali-nam/logo-turbohive.png" height={50} width={100}/>
              <Image className="trusted-logo" alt="Logo infra-bruk" src="/img/zaufali-nam/logo-jp-kop.png" height={50} width={100}/>
              <Image className="trusted-logo" alt="Logo infra-bruk" src="/img/zaufali-nam/logo-pk-bruk.svg" height={50} width={100}/>
          </Grid>
        </Box>
      </Container>
      <Container anchor="Sekcja-2" paddingTop="5" paddingBottom="5" background="neutral-900">
        <RichText>
          <h3 className="pb-2">Hazle w liczbach</h3>
        </RichText>
        <InNumbers/>
      </Container>
      <Container anchor="how-we-work" paddingTop="5" paddingBottom="5" background="neutral-900">
        <RichText>
          <h3 className="pb-2">Jak pracujemy?</h3>
        </RichText>
        <Grid xs="1" md="2" xl="2">
          <RichText>
            <p className="big">Pomysł, realizacja, publikacja – prosta droga do osiągnięcia Twoich celów online.</p>
          </RichText>
          <RichText>
            <p className='pb-2'>Trzy etapy pozwalają nam skupić się na tym, co naprawdę ważne – od stworzenia solidnych fundamentów,
              przez dokładne wykonanie, aż po dopracowaną publikację. Dzięki temu każdy projekt jest przemyślany i
              dopracowany w najmniejszym szczególe. To prosty proces, który gwarantuje efekty!</p>
              <Link className="button primary" href="#">Napisz do nas</Link>
          </RichText>
        </Grid>
      </Container>
      <Container paddingBottom="5" background="neutral-900">
        <Grid xs="1" md="3" xl="3">
          <RichText>
            <span className="number-box">1</span>
            <h4>Kreatywne Fundamenty</h4>
            <p>Każdy projekt zaczyna się od inspiracji. Wspólnie analizujemy Twoje potrzeby i cele, tworząc koncepcję, która idealnie oddaje charakter Twojej marki.</p>
          </RichText>
          <RichText>
            <span className="number-box">2</span>
            <h4>Profesjonalne Wykonanie</h4>
            <p>Przekuwamy pomysł w rzeczywistość. Projektujemy, wdrażamy i optymalizujemy, dbając o każdy detal, aby efekt był zarówno estetyczny, jak i funkcjonalny.</p>
          </RichText>
          <RichText>
            <span className="number-box">3</span>
            <h4>Sukces Twojej Marki</h4>
            <p>Gdy wszystko jest gotowe, wdrażamy projekt na żywo. Zapewniamy wsparcie techniczne, by Twoja marka działała sprawnie i zyskała widoczność.</p>
          </RichText>
        </Grid>
      </Container>
      <Container paddingTop="5" paddingBottom="5" background="neutral-100">
        <RichText justify='center'>
          <h2 className="center">Nasze Projekty</h2>
          <p className='center width-700'>Pomagamy naszym klientom zwiększać zyski dzięki przejrzystym i profesjonalnym stronom internetowym i nie tylko.</p>
        </RichText>
      </Container>
      <ContainerNoWrapper paddingTop="2" paddingBottom="5" background="neutral-100">
      <Gallery>
        <Image alt="Logo infra-bruk" src="/img/gallery/Superspas.jpg" height={1200} width={900}/>
        <Image alt="Logo infra-bruk" src="/img/gallery/Superspas.jpg" height={1200} width={900}/>
        <Image alt="Logo infra-bruk" src="/img/gallery/Superspas.jpg" height={1200} width={900}/>
        <Image alt="Logo infra-bruk" src="/img/gallery/Superspas.jpg" height={1200} width={900}/>
        <Image alt="Logo infra-bruk" src="/img/gallery/Superspas.jpg" height={1200} width={900}/>
        <Image alt="Logo infra-bruk" src="/img/gallery/Superspas.jpg" height={1200} width={900}/>
        <Image alt="Logo infra-bruk" src="/img/gallery/Superspas.jpg" height={1200} width={900}/>
        <Image alt="Logo infra-bruk" src="/img/gallery/Superspas.jpg" height={1200} width={900}/>
        </Gallery>
      </ContainerNoWrapper>
      <Container paddingTop="5" paddingBottom="5" background="neutral-900">
        <RichText>
          <h3 className="center">Co potrafimy?</h3>
          <h2 className="pb-3 center">Możemy ci pomóc w...</h2>
        </RichText>
        <Box justify="center" display="flex">
          <span className="badge">Strony internetowe</span>
          <span className="badge">Social media</span>
          <span className="badge">Reklama i marketing</span>
          <span className="badge">Design system</span>
          <span className="badge">Logo i branding</span>
          <span className="badge">Aplikacje web</span>
          <span className="badge">Projekty graficzne</span>
          <span className="badge">SEO</span>
          <span className="badge">Audyt UX</span>
          <span className="badge">Sklepy internetowe</span>
          <span className="badge">Animacje i wideo</span>
          <span className="badge">Analiza konkurencji</span>
        </Box>
      </Container>
      <Container paddingBottom="5" background="neutral-900">
        <RichText>
          <h3 className="pb-2">Dlaczego warto z nami wspópracować?</h3>
        </RichText>
        <Grid xs="1" md="2" xl="2">
          <RichText>
            <p className="big">Zapewniamy profesjonalne rozwiązania dopasowane do Twoich potrzeb.</p>
          </RichText>
          <RichText>
            <p className='pb-2'>Twój sukces jest naszym priorytetem, dlatego dokładamy wszelkich starań, aby wspierać Cię na każdym etapie współpracy. Dzięki pracy z naszymi ekspertami będziesz mógł wyróżnić się na rynku i zyskać przewagę konkurencyjną. Nasze doświadczenie i zaangażowanie pomogą Ci osiągnąć cele, które postawisz przed sobą.</p>
          </RichText>
        </Grid>
      </Container>
      <Container paddingBottom="5" background="neutral-900">
      <table className="grid-table">
        <tbody>
          <tr>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-infinity"/>
                <h4>Elastyczność na żądanie</h4>
                <p>Zgłaszaj swoje potrzeby w prosty sposób, a my zajmiemy się realizacją projektów krok po kroku.</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-ranking-star"/>
                <h4>Najwyższa jakość projektów</h4>
                <p>Jesteśmy doświadczonymi specjalistami, którzy zapewnią profesjonalne wykonanie każdego zadania.</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-brands fa-react"/>
                <h4>Technologie skrojone na miarę</h4>
                <p>Tworzymy strony i aplikacje dostosowane do Twoich wymagań, korzystając z najnowszych technologii webowych.</p>
              </RichText>
            </td>
          </tr>
          <tr>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-list-check"/>
                <h4>Personalizacja projektów</h4>
                <p>Każdy projekt tworzymy od podstaw, dopasowując go do Twojej marki i potrzeb biznesowych.</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-lightbulb"/>
                <h4>Kreatywność na najwyższym poziomie</h4>
                <p>Proponujemy unikalne rozwiązania graficzne i marketingowe, które wyróżnią Twoją markę na rynku.</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-users-gear"/>
                <h4>Doświadczenie ekspertów</h4>
                <p>Nasz zespół to profesjonaliści z wieloletnim doświadczeniem, którzy dostarczą Ci najwyższej jakości rezultaty.</p>
              </RichText>
            </td>
          </tr>
          <tr>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-bolt"/>
                <h4>Szybkość działania</h4>
                <p>Realizujemy projekty w krótkim czasie, nie tracąc przy tym na jakości.</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-handshake"/>
                <h4>Indywidualne podejście</h4>
                <p>Stawiamy na bliską współpracę, by w pełni zrozumieć Twoje potrzeby i cele.</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-shield-halved"/>
                <h4>Wsparcie po realizacji</h4>
                <p>Oferujemy pełną obsługę posprzedażową – od aktualizacji projektów po doradztwo w zakresie marketingu.</p>
              </RichText>
            </td>
          </tr>
        </tbody>
      </table>
      </Container>
      <Container paddingBottom="5" background="neutral-900">
        <RichText justify='center'>
          <h3 className="center">Blog</h3>
          <h2 className="center">Nowości i Artykuły</h2>
          <p className="center width-700 pb-5">Najnowsze wpisy, inspiracje i porady, które pomogą Ci rozwijać Twoją markę.</p>
        </RichText>
        <Grid xs="1" md="2" xl="2">
         <TeaserCard href="/blog/article-1" imagePosition="left"/>
         <TeaserCard href="/blog/article-1" imagePosition="left"/>
         <TeaserCard href="/blog/article-1" imagePosition="left"/>
         <TeaserCard href="/blog/article-1" imagePosition="left"/>
         <TeaserCard href="/blog/article-1" imagePosition="left"/>
         <TeaserCard href="/blog/article-1" imagePosition="left"/>
        </Grid>
      </Container>
      <Container anchor="Sekcja-5" paddingTop="5" paddingBottom="5" background="neutral-100">
        <Accordion
          title="What is your refund policy?"
          faq={{
          question: "What is your refund policy?", 
          answer: "You can request a refund within 30 days of purchase.",
          }}>
          <p>You can request a refund within 30 days of purchase.</p>
        </Accordion>
        <Accordion
          title="What is your refund policy?"
          faq={{
          question: "What is your refund policy?", 
          answer: "You can request a refund within 30 days of purchase.",
          }}>
          <p>You can request a refund within 30 days of purchase.</p>
        </Accordion>
      </Container>
      <Container anchor="Sekcja-6" paddingTop="5" paddingBottom="5" background="neutral-300">
        <Tabs>
          <Tab title="Tab 1">
            <p>Content for Tab 1</p>
          </Tab>
          <Tab title="Tab 2">
            <p>Content for Tab 2</p>
          </Tab>
          <Tab title="Tab 3">
            <p>Content for Tab 3</p>
          </Tab>
        </Tabs>
      </Container>
    </Layout>
  );
};

export default Home;
