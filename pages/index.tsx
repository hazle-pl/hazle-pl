import Container from '@/components/Container';
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
import useTranslation from '@/lib/useTranslations';

const Home: React.FC = () => {
  const { translate } = useTranslation();

  return (
    <Layout>
      <HeroBanner content={`
      <h1>${translate('default', 'transform')}</br>
      <span class="color-primary-500 italic">${translate('default', 'dreams')}</span> ${translate('default', 'inReality')}</h1>
      <p>${translate('default', 'heroSubtitle')}</p>
      <a class="button primary" href="/#contact">${translate('default', 'writeUs')}</a>
      `} 
      background="neutral-900" 
      size="auto"/>
      <Container paddingBottom="3" background="neutral-900">
        <RichText>
          <h2 className="custom-center-text pb-3">{translate('default', 'trustedUs')}</h2>
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
          <h3 className="pb-2">{translate('default', 'hazleInNumbers')}</h3>
        </RichText>
        <InNumbers/>
      </Container>
      <Container anchor="how-we-work" paddingBottom="5" background="neutral-900">
        <RichText>
          <h3 className="pb-2">{translate('default', 'howWeWork')}</h3>
        </RichText>
        <Grid xs="1" md="2" xl="2">
          <RichText>
            <p className="big">{translate('default', 'howWeWork2')}</p>
          </RichText>
          <RichText>
            <p className='pb-2'>{translate('default', 'howWeWork3')}</p>
              <Link className="button primary" href="#">{translate('default', 'writeUs')}</Link>
          </RichText>
        </Grid>
      </Container>
      <Container paddingBottom="5" background="neutral-900">
        <Grid xs="1" md="3" xl="3">
          <RichText>
            <span className="number-box">1</span>
            <h4>{translate('default', 'creativeFoundations')}</h4>
            <p>{translate('default', 'creativeFoundations2')}</p>
          </RichText>
          <RichText>
            <span className="number-box">2</span>
            <h4>{translate('default', 'ProfessionalWorkmanship')}</h4>
            <p>{translate('default', 'ProfessionalWorkmanship2')}</p>
          </RichText>
          <RichText>
            <span className="number-box">3</span>
            <h4>{translate('default', 'SuccessOfYourBrand')}</h4>
            <p>{translate('default', 'SuccessOfYourBrand2')}</p>
          </RichText>
        </Grid>
      </Container>
      <Container paddingTop="5" paddingBottom="5" background="neutral-100">
        <RichText justify='center'>
          <h2 className="center">{translate('default', 'OurProjects')}</h2>
          <p className='center width-700'>{translate('default', 'OurProjects2')}</p>
        </RichText>
      </Container>
      <ContainerNoWrapper anchor='portfolio' paddingTop="2" paddingBottom="5" background="neutral-100">
      <Gallery>
        <Image alt="Strona internetowa z ofertami wakacyjnymi UX/UI Design Tripply" src="/img/gallery/Tripply.webp" height={225} width={400}/>
        <Image alt="Strona internetowa firmy budowlanej z usługami pracy ziemnych UX/UI Design Gravix" src="/img/gallery/Gravix.webp" height={225} width={400}/>
        <Image alt="Strona internetowa dla wypożyczalni samochodów UX/UI Design TurboHive" src="/img/gallery/TurboHive.webp" height={225} width={400}/>
        <Image alt="Strona internetowa dla architekta budynków UX/UI Design Dwellio" src="/img/gallery/Dwellio.webp" height={225} width={400}/>
        <Image alt="Strona internetowa dla lidera w branży spa ogrodowych UX/UI Superspas" src="/img/gallery/Superspas.webp" height={225} width={400}/>
        <Image alt="Strona internetowa dla firmy zajmującą się odnawialnym źródłem energii UX/UI Windly" src="/img/gallery/Windly.webp" height={225} width={400}/>
        <Image alt="Strona internetowa dla restauracji sushi UX/UI Zenrolls" src="/img/gallery/Zenrolls.webp" height={225} width={400}/>
        <Image alt="Strona internetowa dla siłowni UX/UI AnyxGym" src="/img/gallery/AnyxGym.webp" height={225} width={400}/>
        </Gallery>
      </ContainerNoWrapper>
      <Container anchor='services' paddingTop="5" paddingBottom="5" background="neutral-900">
        <RichText>
          <h3 className="center">{translate('default', 'WhatWeCanDo')}</h3>
          <h2 className="pb-3 center">{translate('default', 'WeCanHelp')}</h2>
        </RichText>
        <Box justify="center" display="flex">
          <span className="badge">{translate('default', 'websites')}</span>
          <span className="badge">{translate('default', 'socialMedia')}</span>
          <span className="badge">{translate('default', 'advertisingMarketing')}</span>
          <span className="badge">{translate('default', 'designSystem')}</span>
          <span className="badge">{translate('default', 'logoBranding')}</span>
          <span className="badge">{translate('default', 'webApps')}</span>
          <span className="badge">{translate('default', 'graphicDesign')}</span>
          <span className="badge">{translate('default', 'seo')}</span>
          <span className="badge">{translate('default', 'uxAudit')}</span>
          <span className="badge">{translate('default', 'ecommerce')}</span>
          <span className="badge">{translate('default', 'animationsVideos')}</span>
          <span className="badge">{translate('default', 'competitionAnalysis')}</span>
        </Box>
      </Container>
      <Container paddingBottom="5" background="neutral-900">
        <RichText>
          <h3 className="pb-2">{translate('default', 'whyWorkWithUs')}</h3>
        </RichText>
        <Grid xs="1" md="2" xl="2">
          <RichText>
            <p className="big">{translate('default', 'whyWorkWithUs2')}</p>
          </RichText>
          <RichText>
            <p className='pb-2'>{translate('default', 'whyWorkWithUs3')}</p>
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
                <h4>{translate('default', 'flexibility')}</h4>
                <p>{translate('default', 'flexibility2')}</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-ranking-star"/>
                <h4>{translate('default', 'quality')}</h4>
                <p>{translate('default', 'quality2')}</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-brands fa-react"/>
                <h4>{translate('default', 'technology')}</h4>
                <p>{translate('default', 'technology2')}</p>
              </RichText>
            </td>
          </tr>
          <tr>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-list-check"/>
                <h4>{translate('default', 'personalization')}</h4>
                <p>{translate('default', 'personalization2')}</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-lightbulb"/>
                <h4>{translate('default', 'creativity')}</h4>
                <p>{translate('default', 'creativity2')}</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-lightbulb"/>
                <h4>{translate('default', 'experience')}</h4>
                <p>{translate('default', 'experience2')}</p>
              </RichText>
            </td>
          </tr>
          <tr>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-bolt"/>
                <h4>{translate('default', 'quick')}</h4>
                <p>{translate('default', 'quick2')}</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-handshake"/>
                <h4>{translate('default', 'individual')}</h4>
                <p>{translate('default', 'individual2')}</p>
              </RichText>
            </td>
            <td>
              <RichText justify='left'>
                <i className="fa-solid fa-shield-halved"/>
                <h4>{translate('default', 'support')}</h4>
                <p>{translate('default', 'support2')}</p>
              </RichText>
            </td>
          </tr>
        </tbody>
      </table>
      </Container>
      <Container paddingBottom="5" background="neutral-900">
        <RichText justify='center'>
          <h3 className="center">{translate('default', 'blog')}</h3>
          <h2 className="center">{translate('default', 'news')}</h2>
          <p className="center width-700 pb-5">{translate('default', 'news2')}</p>
        </RichText>
        <Grid xs="1" md="1" xl="2">
          <TeaserCard href="/blog/article-1" imagePosition="left" imageSrc='https://designerup.co/blog/content/images/2023/07/2.png' content={`<h3 className="center">${translate('blog-1', 'category')}</h3><h5>${translate('blog-1', 'title')}</h5><p>${translate('blog-1', 'description')}</p>`}/>
          <TeaserCard href="/blog/article-2" imagePosition="left" imageSrc='https://designerup.co/blog/content/images/2023/07/2.png' content={`<h3 className="center">${translate('blog-2', 'category')}</h3><h5>${translate('blog-2', 'title')}</h5><p>${translate('blog-2', 'description')}</p>`}/>
          <TeaserCard href="/blog/article-3" imagePosition="left" imageSrc='https://designerup.co/blog/content/images/2023/07/2.png' content={`<h3 className="center">${translate('blog-3', 'category')}</h3><h5>${translate('blog-3', 'title')}</h5><p>${translate('blog-3', 'description')}</p>`}/>
          <TeaserCard href="/blog/article-4" imagePosition="left" imageSrc='https://designerup.co/blog/content/images/2023/07/2.png' content={`<h3 className="center">${translate('blog-4', 'category')}</h3><h5>${translate('blog-4', 'title')}</h5><p>${translate('blog-4', 'description')}</p>`}/>
        </Grid>
      </Container>
      <Container anchor='faq' paddingTop="5" paddingBottom="5" background="neutral-100">
        <RichText justify='center'>
          <h2 className="center">{translate('default', 'faq')}</h2>
          <p className="center width-700 pb-5">{translate('default', 'faq2')}</p>
        </RichText>
        <Accordion
          title={`${translate('default', 'faq-item-1-question')}`}
          faq={{
          question: "Jak długo trwa stworzenie strony internetowej?", 
          answer: "Czas realizacji projektu strony internetowej zależy od jego złożoności. Proste strony wizytówki możemy dostarczyć w ciągu tygodnia, natomiast bardziej zaawansowane projekty, takie jak sklepy internetowe czy aplikacje, mogą zająć od 4 do 8 tygodni.",
          }}>
          <p>{translate('default', 'faq-item-1-answer')}</p>
        </Accordion>
        <Accordion
          title={`${translate('default', 'faq-item-2-question')}`}
          faq={{
          question: "Czy mogę samodzielnie edytować zawartość swojej strony?", 
          answer: "Tak, jeśli zdecydujesz się na strone zbudowaną w systemie CMS będziesz mógł w łatwy sposób edytować teksty, obrazy i inne elementy na stronie.",
          }}>
          <p>{translate('default', 'faq-item-2-answer')}</p>
        </Accordion>
        <Accordion
          title={`${translate('default', 'faq-item-3-question')}`}
          faq={{
          question: "Czy oferujecie wsparcie po zakończeniu projektu?", 
          answer: "Oczywiście! Po zakończeniu projektu zapewniamy wsparcie techniczne, aktualizacje oraz utrzymanie strony lub aplikacji. Możesz także skorzystać z naszej oferty usług dodatkowych, takich jak marketing online czy SEO.",
          }}>
          <p>{translate('default', 'faq-item-3-answer')}</p>
        </Accordion>
        <Accordion
          title={`${translate('default', 'faq-item-4-question')}`}
          faq={{
          question: "Czy pomagacie w promocji stron w internecie?", 
          answer: "Tak, oferujemy kompleksowe usługi marketingowe, w tym SEO, prowadzenie kampanii reklamowych w Google Ads i mediach społecznościowych oraz tworzenie strategii content marketingowych. Dzięki temu Twoja strona dotrze do szerszego grona odbiorców.",
          }}>
          <p>{translate('default', 'faq-item-4-answer')}</p>
        </Accordion>
      </Container>
    </Layout>
  );
};

export default Home;
