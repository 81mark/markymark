import React from 'react';
import Footer from '../components/Footer.js';
import Logo from '../components/Logo.js';
import Layout from '../components/layout';
import Me from '../components/Me';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Full Stack development by Mark" />

    <div className="container-home">
      <div className="uk-container-medium uk-text-center">
        <Logo page="home" />
        <Me />
      </div>
    </div>
    <Footer />
  </Layout>
);

export default IndexPage;
