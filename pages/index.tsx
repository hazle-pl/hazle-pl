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

const Home: React.FC = () => {


  return (
    <Layout>
      <HeroBanner content={`<h1>Bringing Your</br><span class="color-primary-500 italic">dream</span> Into Reality</h1><p>We increase revenue and ensure sustainable long-term growth for your business through powerful Webflow websites.</p><a class="button primary" href="/#contact">Contact us</a>`} background="neutral-900" size="auto"/>
      <Container anchor="how-we-work" paddingTop="5" paddingBottom="5" background="neutral-900">
        <RichText>
          <h3 className="pb-2">How We Work</h3>
        </RichText>
        <Grid xs="1" md="2" xl="2">
          <RichText>
            <p className="big">Get a dedicated design team at fraction of the cost.</p>
          </RichText>
          <RichText>
            <p className='pb-2'>Grow your brand with high-quality design for a flat
              monthly fee. Work with senior designers.
              Subscribe and make as many requests as you
              need - no limits.</p>
              <Link className="button primary" href="#">Learn more</Link>
          </RichText>
        </Grid>
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
