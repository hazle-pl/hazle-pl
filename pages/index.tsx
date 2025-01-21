import Container from '@/components/Container';
import { Tabs, Tab } from "@/components/Tabs";
import Grid from '@/components/Grid';
import Box from '@/components/Box';
import Accordion from '@/components/Accordion';
import Layout from '@/components/Layout';
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import TeaserCard from '@/components/TeaserCard';
import RichText from '@/components/RichText';
import Link from 'next/link';
import InNumbers from '@/components/inNumbers';

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
      <Container anchor="Sekcja-3" paddingTop="5" paddingBottom="5" background="neutral-100">
        <RichText>
          <h2 className="pb-2">Nasza praca</h2>
        </RichText>
      </Container>
      <Container anchor="Sekcja-4" paddingTop="5" paddingBottom="5" background="neutral-300">
        <Grid xs="2" md="3" xl="6">
          <TeaserCard background="neutral-100"/>
          <TeaserCard background="neutral-100"/>
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
