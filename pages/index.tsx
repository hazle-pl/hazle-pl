import Container from '@/components/Container';
import { Tabs, Tab } from "@/components/Tabs";
import Grid from '@/components/Grid';
import Box from '@/components/Box';
import Accordion from '@/components/Accordion';
import Layout from '@/components/Layout';
import React from 'react';
import HeroBanner from '@/components/HeroBanner';
import TeaserCard from '@/components/TeaserCard';
import FixedSideMenu from '@/components/FixedSideMenu';
import HeroBannerV2 from '@/components/HeroBanner-v2';

const Home: React.FC = () => {


  return (
    <Layout>
      <FixedSideMenu />
      <HeroBannerV2/>
      <HeroBanner content={`<h1>Hero Banner</h1><p>To jest przykładowy paragraf zawierający <i>kursywę</i> i dodatkowy tekst.</p><button>Kliknij mnie</button>`} imageSrc="/assets/preview.jpg" background="neutral-300" size="md"/>
      <Container anchor="Sekcja-1" paddingTop="5" paddingBottom="5" background="neutral-100">
        container padding 5 bg primary-300
      </Container>
      <Container anchor="Sekcja-2" paddingTop="5" paddingBottom="5" background="neutral-300">
        container padding 4 bg secondary-500
      </Container>
      <Container anchor="Sekcja-3" paddingTop="5" paddingBottom="5" background="neutral-100">
        container padding 5 bg primary-500
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
