import React from 'react';
import SunIcon from './Icons/SunIcon';
import MoonIcon from './Icons/MoonIcon';
import avatar from '../assets/avatar.jpeg';
import '../css/skeleton.css';
import '../css/normalize.css';
import '../css/components.css';
import { ThemeType } from '../ts/types';

function Header(): JSX.Element {
  // Lấy theme của thiết bị
  const getDeviceTheme = (): ThemeType => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDarkMode ? 'dark' : 'light';
  };

  const [theme, setTheme] = React.useState<ThemeType>(getDeviceTheme());

  React.useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  const isDark = theme === 'dark';

  const handleSwitchTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="Header container">
      <div className="ten columns Header__inner">
        <img src={avatar} alt="avatar" />
        &nbsp;&nbsp;&nbsp;
        <h2>
          <b>Khoa Nguyễn <i>(@yunkhngn)</i>.</b>
        </h2>
      </div>
      <button className="switch-theme-button" onClick={handleSwitchTheme}>
        {isDark ? <MoonIcon color="white" /> : <SunIcon />}
      </button>
    </div>
  );
}

export default Header;
