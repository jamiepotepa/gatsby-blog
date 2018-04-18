import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    background: #efefef;
`;

const InnerWrapper = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0.5rem 1.0875rem;

    p {
        margin: 0;
        font-size: 18px;
    }
`;


const Footer = () => (
    <FooterWrapper>
        <InnerWrapper>
            <p>Gatsby.js Playground</p>
        </InnerWrapper>
    </FooterWrapper>
);

export default Footer;