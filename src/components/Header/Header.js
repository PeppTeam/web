import React from "react";
import { Link } from "gatsby";
import Logo from "../Logo";
import styled from "styled-components";

const LogoLink = styled(Link)`
  width: 4rem;
  height: 4rem;
  display:flex;
  alignItems:center;
`;

class Header extends React.Component {

  state = {
    isActive: false,
  }

  toggleNav = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive
    }))
  }

  render() {
    return (
      <nav className="navbar"
          aria-label="main navigation"
      >
      <div class="container">
        <div className="navbar-brand" style={{margin: '30px'}}>
        <LogoLink to="/">
           <Logo />
         </LogoLink>
          <button className="navbar-burger" onClick={this.toggleNav}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
          <div className="navbar-start">
          <Link className="navbar-item" to="om-pepp">
            Om Pepp
           </Link>
           <Link className="navbar-item" to="ansok">
             Gå med
           </Link>
           <Link className="navbar-item" to="blogg">
             Blogg
           </Link>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="https://github.com/aaronklaser">
              <span className="icon">
                <i className="fab fa-lg fa-github"></i>
              </span>
            </a>
            <a className="navbar-item" href="https://twitter.com/awklaser">
              <span className="icon has-text-info" style={{ color: '#0084FF' }}>
                <i className="fab fa-lg fa-twitter"></i>
                Twitter🇬🇧
              </span>
            </a>
            
          </div>
        </div></div>
      </nav>
    )
  }
}

export default Header
    


