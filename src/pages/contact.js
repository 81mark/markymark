import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../components/Logo.js';
import Github from '../components/Github.js';
import Footer from '../components/Footer.js';

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Mark @ Full Stack development" />
    <div className="container-page">
      <div className="uk-container-medium uk-text-center">
        <Logo page="contact" />
        <h1 className="uk-text-bolder">
          <span role="img" aria-label="Contact">
            📯
          </span>{' '}
          contact me
        </h1>
        <h3 className="uk-card-title fancy-font">
          Don't worry... its not too late to back out yet!
        </h3>
        <form
          className="card"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify
        >
          <fieldset className="uk-fieldset">
            <div className="uk-margin">
              <span role="img" aria-label="Your name">
                <input
                  name="Name"
                  className="uk-input"
                  type="text"
                  placeholder="😇 Name"
                />
              </span>
            </div>
            <div className="uk-margin">
              <span role="img" aria-label="Your email">
                <input
                  name="Email"
                  className="uk-input"
                  type="text"
                  placeholder="📧 E-mail"
                />
              </span>
            </div>
            <div className="uk-margin">
              <span role="img" aria-label="Your message">
                <textarea
                  name="Message"
                  className="uk-textarea"
                  rows="4"
                  placeholder="💬 Message"
                ></textarea>
              </span>
            </div>
            <input type="hidden" name="contact" value="contact" />
            <input
              className="uk-button button uk-width-1-1"
              type="submit"
              value="👌 Send"
            />
          </fieldset>
        </form>
        <a
          href="https://github.com/81mark/"
          title="See mark's GitHub page 🤙🤙"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github />
        </a>
      </div>
    </div>
    <Footer />
  </Layout>
);

export default ContactPage;
