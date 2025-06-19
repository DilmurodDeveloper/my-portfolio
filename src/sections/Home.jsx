import profile from '../assets/images/profile1.webp';
import ParticleBackground from '../components/ParticleBackground';
import { useTranslation } from 'react-i18next';
import '../assets/css/home.css';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <section id="home" className="home-section">
      <ParticleBackground />
      <div className="vertical-label">
        <span>{t('introduce')}</span>
      </div>
      <div className="home-container">
        <div className="home-left">
          <p className="welcome-text">{t('welcome')}</p><br />
          <h1 className="main-title">
            <span className="hello">{t('hello')} </span>
            <span className="line">{t('my_name')}</span><br />
            <span className="highlight-name">{t('_name')}</span>
          </h1><br />
          <hr className="animated-line" />
        </div>
        <div className="home-right">
          <img src={profile} alt="Dilmurod" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;