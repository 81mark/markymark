import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Github = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "GitHub.png" }) {
        childImageSharp {
          sizes(quality: 90) {
            ...GatsbyImageSharpSizes
          }
          fixed(width: 64, height: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt="81mark on Github"
    />
  );
};

export default Github;
