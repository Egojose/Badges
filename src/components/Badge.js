import React, { Component } from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo conferencia" />
        </div>

        <div className="Badge__section-name">
          <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"  className="Badge__avatar"/>
          <h1>
            Jose <br /> Vásquez
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3>Microbiologist</h3>
          <div>@jose</div>
        </div>

        <div className="Badge__footer">#Platziconf</div>
      </div>
    );
  }
}

export default Badge;
