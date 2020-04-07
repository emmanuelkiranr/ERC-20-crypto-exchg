import React, { Component } from 'react';
import Identicon from 'identicon.js';
class Navbar extends Component {     // just to reduce the code  in app.js into one component <Navbar />

  render() {           // the imported fns etc only take action once implemented in render fn.
    return (
      <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="https://github.com/Emmanuel1237"
            target="_blank"
            rel="noopener noreferrer"
          >
            ETHSWAP
          </a>
          {/*<p>{this.props.account}</p> for a cleaner look of account text*/}
          <ul className="navbar-nav px-3">
           <li className="nav-item text-nowrap dnone d-sm-none d-sm-block">
            <small className="text-secondary">
              <small id="account">{this.props.account}</small>
           </small>
          
            { this.props.account
             ? <img
             className="ml-2"
             width="30"
             height="30"
             src={'data:image/png;base64,$ new{Identicon(this.props.account, 30).toString()}'}
             alt=""
             />
             : <span></span>

           }
           </li>
           </ul>
        </nav> 
    );
  }
}

export default Navbar;
