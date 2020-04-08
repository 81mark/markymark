import React from 'react';
import Footer from '../components/Footer.js';
import Logo from '../components/Logo.js';
import Layout from '../components/layout';
import SEO from '../components/seo';

const SuccessPage = () => (
  <Layout>
    <SEO title="Full Stack development by Mark" />

    <div className="container-home">
      <div className="uk-container-medium uk-text-center">
        <Logo page="success" />
        <h1>Thank you for contacting me!</h1>
        <span role="img" aria-label="rock on">
          🤘🤘🤘🤘
        </span>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default SuccessPage;
