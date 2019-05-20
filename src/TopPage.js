import React, { } from 'react';
// import { fluid } from 'react-bootstrap'

// import logo from './images/logo.svg'
import Miku from './images/miku.png';


function TopPage() {
  return (
    <div className="TopPage">
      <header className="Top-header">
      </header>
      <div className="contens">
        <img style={style.image} src={ Miku } />
        <a className="Top-text">
          開発中！
        </a>
      </div>
    </div>
  );
}

const style = {
  image:{
    width: 700,
    height: 900,
  }

}

export default TopPage;