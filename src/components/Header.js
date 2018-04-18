import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import Img from 'gatsby-image';
import logo from '../images/logo-jp.svg';

const HeaderWrapper = styled.div`
    background: #524763;
    margin-bottom: 1.45rem;
    overflow: hidden;
    position: relative;
    height: 50vh;
    
    h1 {
        
        img {
            height: 120px;
        }

    }
    
`;

const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 960px;
    padding: 0.5rem 1.0875rem;
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
`;

const MainNav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        
        li {
            margin-left: 20px;
            font-family: sans-serif
            
            a {
                text-decoration: none;
                color: white;
                transition: border 0.2s;

                &:hover {
                    border-bottom: 3px solid white;
                }
            }
        }
    }
`;

export default class Header extends Component {
    
    componentDidUpdate = (prevProps, prevState) => {
        

    }

    render() {
        const { data, location } = this.props;

        return (
            <HeaderWrapper>

                <HeaderContainer>
                    <h1 style={{ margin: 0 }}>
                        <Link to="/" style={{ color: 'white', textDecoration: 'none' }} >
                            <img src={logo} alt="JP logo"/>
                        </Link>
                    </h1>
                    <MainNav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </MainNav>
                </HeaderContainer>
                <Img style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%'
                }}sizes={data.background.sizes} />

            </HeaderWrapper>
        )
    }
}