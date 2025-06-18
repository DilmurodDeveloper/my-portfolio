import profile from '../assets/images/profile1.webp';
import ParticleBackground from '../components/ParticleBackground';
import '../assets/css/home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <ParticleBackground />
      <div className="vertical-label">
        <span>INTRODUCE</span>
      </div>
      <div className="home-container">
        <div className="home-left">
          <p className="welcome-text">Welcome to my personal page!</p><br />
          <h1 className="main-title">
            <span className="hello">HELLO </span>
            <span className="line">MY NAME</span><br />
            <span className="highlight-name">IS DILMUROD</span>
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