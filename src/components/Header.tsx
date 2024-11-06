import React from 'react';
import SunIcon from './Icons/SunIcon';
import MoonIcon from './Icons/MoonIcon';
import avatar from '../assets/avt.jpg';
import '../css/skeleton.css';
import '../css/normalize.css';
import '../css/components.css';

function Header(): JSX.Element {

  const theme = "light"

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="Header container">
      <div className=" columns Header__inner">
        <img src={avatar} alt="avatar" />
        &nbsp;&nbsp;&nbsp;
        <h2>
          <b>Khoa Nguyễn <i>(@yunkhngn)</i>.</b>
        </h2>
      </div>
      
      {/* <button className="switch-theme-button" onClick={()=>window.open("https://github.com/yunkhngn")}>
        <SunIcon />
      </button> */}
    </div>
  );
}

export default Header;
