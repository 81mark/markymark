import React from 'react';
import Footer from '../components/Footer.js';
import Logo from '../components/Logo.js';
import Layout from '../components/layout';
import SEO from '../components/seo';
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container-page">
      <div className="uk-container-medium uk-text-center">
        <Logo page="404" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default NotFoundPage;
