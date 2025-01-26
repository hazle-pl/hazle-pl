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
      <Container anchor="how-we-work" paddingBottom="5" background="neutral-900">
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
      <Container anchor='services' paddingTop="5" paddingBottom="5" background="neutral-900">
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
        <Grid xs="1" md="1" xl="2">
          <TeaserCard href="/blog/article-1" imagePosition="left" imageSrc='https://designerup.co/blog/content/images/2023/07/2.png' content='<h3 className="center">Branding</h3><h5>Jak Zbudować Silną Markę</h5><p>Stworzenie silnej marki to klucz do sukcesu w dzisiejszym konkurencyjnym świecie biznesu...</p>'/>
          <TeaserCard href="/blog/article-2" imagePosition="left" imageSrc='https://designerup.co/blog/content/images/2023/07/3.png' content='<h3 className="center">SEO</h3><h5>Skuteczne Strategie SEO dla Nowoczesnych Firm</h5><p>Dowiedz się, jak optymalizować swoją stronę internetową, aby zyskać wyższą pozycję w wyszukiwarkach...</p>'/>
          <TeaserCard href="/blog/article-3" imagePosition="left" imageSrc='https://designerup.co/blog/content/images/2023/07/4.png' content='<h3 className="center">Web Design</h3><h5>Trendy w Projektowaniu Stron Internetowych na 2025 Rok</h5><p>Odkryj najnowsze trendy, które zdominują projektowanie stron w nadchodzących latach...</p>'/>
          <TeaserCard href="/blog/article-4" imagePosition="left" imageSrc='https://designerup.co/blog/content/images/2023/07/5.png' content='<h3 className="center">Marketing</h3><h5>Jak Skutecznie Promować Markę w Mediach Społecznościowych</h5><p>Przeczytaj o najlepszych strategiach marketingowych, które pomogą wyróżnić Twoją markę na platformach społecznościowych...</p>'/>
          <TeaserCard href="/blog/article-5" imagePosition="left" imageSrc='https://designerup.co/blog/content/images/2023/07/6.png' content='<h3 className="center">E-commerce</h3><h5>Jak Zwiększyć Sprzedaż w Sklepie Internetowym</h5><p>Przygotuj się na zwiększenie sprzedaży dzięki sprawdzonym technikom i rozwiązaniom dla sklepów internetowych...</p>'/>
          <TeaserCard href="/blog/article-6" imagePosition="left" imageSrc='https://designerup.co/blog/content/images/2023/07/7.png' content='<h3 className="center">Social Media</h3><h5>Strategia Social Media dla Twojej Firmy</h5><p>Sprawdź, jak skutecznie prowadzić kampanie w mediach społecznościowych, które angażują i konwertują...</p>'/>
        </Grid>
      </Container>
      <Container anchor='faq' paddingTop="5" paddingBottom="5" background="neutral-100">
        <RichText justify='center'>
          <h2 className="center">Pytania i Odpowiedzi</h2>
          <p className="center width-700 pb-5">Odpowiedzi na najczęstrze pytania zadawane przez klientów</p>
        </RichText>
        <Accordion
          title="Jak długo trwa stworzenie strony internetowej?"
          faq={{
          question: "Jak długo trwa stworzenie strony internetowej?", 
          answer: "Czas realizacji projektu strony internetowej zależy od jego złożoności. Proste strony wizytówki możemy dostarczyć w ciągu tygodnia, natomiast bardziej zaawansowane projekty, takie jak sklepy internetowe czy aplikacje, mogą zająć od 4 do 8 tygodni.",
          }}>
          <p>Czas realizacji projektu strony internetowej zależy od jego złożoności. Proste strony wizytówki możemy dostarczyć w ciągu tygodnia, natomiast bardziej zaawansowane projekty, takie jak sklepy internetowe czy aplikacje, mogą zająć od 4 do 8 tygodni.</p>
        </Accordion>
        <Accordion
          title="Czy mogę samodzielnie edytować zawartość swojej strony?"
          faq={{
          question: "Czy mogę samodzielnie edytować zawartość swojej strony?", 
          answer: "Tak, jeśli zdecydujesz się na strone zbudowaną w systemie CMS będziesz mógł w łatwy sposób edytować teksty, obrazy i inne elementy na stronie.",
          }}>
          <p>Tak, jeśli zdecydujesz się na strone zbudowaną w systemie CMS będziesz mógł w łatwy sposób edytować teksty, obrazy i inne elementy na stronie.</p>
        </Accordion>
        <Accordion
          title="Czy oferujecie wsparcie po zakończeniu projektu?"
          faq={{
          question: "Czy oferujecie wsparcie po zakończeniu projektu?", 
          answer: "Oczywiście! Po zakończeniu projektu zapewniamy wsparcie techniczne, aktualizacje oraz utrzymanie strony lub aplikacji. Możesz także skorzystać z naszej oferty usług dodatkowych, takich jak marketing online czy SEO.",
          }}>
          <p>Oczywiście! Po zakończeniu projektu zapewniamy wsparcie techniczne, aktualizacje oraz utrzymanie strony lub aplikacji. Możesz także skorzystać z naszej oferty usług dodatkowych, takich jak marketing online czy SEO.</p>
        </Accordion>
        <Accordion
          title="Czy pomagacie w promocji stron w internecie?"
          faq={{
          question: "Czy pomagacie w promocji stron w internecie?", 
          answer: "Tak, oferujemy kompleksowe usługi marketingowe, w tym SEO, prowadzenie kampanii reklamowych w Google Ads i mediach społecznościowych oraz tworzenie strategii content marketingowych. Dzięki temu Twoja strona dotrze do szerszego grona odbiorców.",
          }}>
          <p>Tak, oferujemy kompleksowe usługi marketingowe, w tym SEO, prowadzenie kampanii reklamowych w Google Ads i mediach społecznościowych oraz tworzenie strategii content marketingowych. Dzięki temu Twoja strona dotrze do szerszego grona odbiorców.</p>
        </Accordion>
      </Container>
    </Layout>
  );
};

export default Home;
