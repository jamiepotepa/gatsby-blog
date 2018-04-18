import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from '../components/Header';
import Footer from '../components/Footer';

//import './index.css'
const MainWrapper = styled.div`
    min-height: 100vh;
`;

const BodyWrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0px 1.0875rem 1.45rem;
    padding-top: 0;
`;

const TemplateWrapper = ({ children, data, location }) => (
    <MainWrapper>
        <Helmet
            title="Gatsby portfolio"
            meta={[
                { name: 'description', content: 'Portfolio site' },
                { name: 'keywords', content: 'Portfolio, Gatsby' },
            ]}
        />
        <Header data={data} location={location}/>
        <BodyWrapper>
            {children()}
        </BodyWrapper>
        <Footer />
    </MainWrapper>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper

export const query = graphql`
query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
    background: imageSharp(id: { regex: "/sanfrancisco.jpg/" }) {
        sizes(maxWidth: 1240) {
            ...GatsbyImageSharpSizes
        }
    }
  }
`;