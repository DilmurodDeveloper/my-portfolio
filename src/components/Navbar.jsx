import { useState, useContext  } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';
import {
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaInstagram,
  FaFacebook,
  FaDownload,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { FaCode } from 'react-icons/fa';
import '../assets/css/navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const { theme, toggleTheme } = useContext(ThemeContext);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  const changeLang = (lang) => i18n.changeLanguage(lang);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <div className="logo-icon-text">
            <FaCode className="logo-icon" />
            <a href='/' className="logo-text">
              <span className="logo-name">Dilmurod</span>
              <span className="logo-sub">{t('developer')}</span>
            </a>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/DilmurodDeveloper" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/dilmurodmadirimov" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://t.me/DilmurodDeveloper" target="_blank" rel="noreferrer"><FaTelegram /></a>
          <a href="https://instagram.com/dilmurod_developer" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com/dilmurod.dev" target="_blank" rel="noreferrer"><FaFacebook/></a>
          <a href="/Resume.pdf" download title={t('cv_download')}><FaDownload /></a>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button>
          <div className="menu-toggle" onClick={toggleMenu}>
            <FaBars />
          </div>
        </div>
      </nav>

      <div className={`sidebar-menu ${menuOpen ? 'open' : ''}`}>
        <div className="close-btn" onClick={toggleMenu}>
          <FaTimes />
        </div>

        <div className="language-selector">
          <button onClick={() => changeLang('en')} title="English">
            <img src="/flags/en.png" alt="EN" />
          </button>
          <button onClick={() => changeLang('uz')} title="Uzbek">
            <img src="/flags/uz.png" alt="UZ" />
          </button>
          <button onClick={() => changeLang('ru')} title="Russian">
            <img src="/flags/ru.png" alt="RU" />
          </button>
        </div>

        <div className="sidebar-links">
          <a href="#home" onClick={toggleMenu}>{t('home')}</a>
          <a href="#about" onClick={toggleMenu}>{t('about')}</a>
          <a href="#skills" onClick={toggleMenu}>{t('skills')}</a>
          <a href="#experience" onClick={toggleMenu}>{t('experience')}</a>
          <a href="#projects" onClick={toggleMenu}>{t('projects')}</a>
          <a href="#contact" onClick={toggleMenu}>{t('contact')}</a>
        </div>

        <div className="sidebar-social">
          <a href="https://github.com/DilmurodDeveloper" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/dilmurodmadirimov" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href="https://t.me/DilmurodDeveloper" target="_blank" rel="noreferrer"><FaTelegram /></a>
          <a href="https://instagram.com/dilmurod_developer" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://facebook.com/dilmurod.dev" target="_blank" rel="noreferrer"><FaFacebook/></a>
          <a href="/Resume.pdf" download title={t('cv_download')}><FaDownload /></a>
        </div>

        <div className="sidebar-footer">
          © Dilmurod Developer 2025
        </div>
      </div>
      {menuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </>
  );
};

export default Navbar;
