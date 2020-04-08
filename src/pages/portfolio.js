import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../components/Logo.js';
import Footer from '../components/Footer.js';

const PortfolioPage = ({ data }) => {
  const portfolios = data.allContentfulPortfolio.edges;

  return (
    <Layout>
      <SEO title="Portfolio @ Full Stack development by Mark" />
      <div className="container-page">
        <div className="uk-container-medium uk-text-center">
          <Logo page="portfolio" />
          <h1 className="uk-text-bolder">My Portfolio</h1>

          {portfolios.map(portfolio => (
            <div
              key={portfolio.node.contentful_id}
              className="uk-card uk-card-default uk-card-body card"
            >
              <h3 className="uk-card-title">{portfolio.node.title}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    portfolio.node.descriptionText.childMarkdownRemark.html,
                }}
              />
              <a
                href={portfolio.node.link}
                className="button uk-button uk-width-1-1"
                target="_blank"
                rel="noreferrer noopener"
                title={portfolio.node.linkText}
              >
                {portfolio.node.linkText}
              </a>
              <p>
                <span role="img" aria-label="Notice">
                  🚥 All links open in a new tab 🚥
                </span>
              </p>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allContentfulPortfolio(sort: { fields: [customOrder], order: ASC }) {
      edges {
        node {
          title
          linkText
          link
          contentful_id
          descriptionText {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;

export default PortfolioPage;
