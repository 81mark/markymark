import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const Me = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "me.png" }) {
        childImageSharp {
          sizes(quality: 90) {
            ...GatsbyImageSharpSizes
          }
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Img
      fixed={data.placeholderImage.childImageSharp.fixed}
      alt="Hey i'm Mark!"
      className="me-img"
    />
  );
};

export default Me;
