import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FaLightbulb } from 'react-icons/fa';
import profileImg from '../assets/images/profile1.webp';
import '../assets/css/about.css';

const About = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  const tooltips = [t('about_info_1'), t('about_info_2'), t('about_info_3'), t('about_values')];

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-photo-info">
            <img src={profileImg} alt="Dilmurod" className="about-img-rect" />
            <div className="about-details">
              <p><strong>{t('full_name')}:</strong> {t('fullname')}</p>
              <p><strong>{t('location')}:</strong> {t('_location')}</p>
              <p><strong>{t('experience')}:</strong> 2+ {t('years_experience')}</p>
              <p><strong>{t('tech_stack')}:</strong> {t('techstack')}</p>
            </div>
          </div>

          <div className="about-tags">
            <span className="tag">{t('tag_dotnet_developer')}</span>
            <span className="tag">{t('tag_problem_solver')}</span>
            <span className="tag">{t('tag_continuous_learner')}</span>
            <span className="tag">{t('tag_aspnet_core_expert')}</span>
            <span className="tag">{t('tag_backend_developer')}</span>
            <span className="tag">{t('tag_self_motivated')}</span>
            <span className="tag">{t('tag_tdd')}</span>
            <span className="tag">{t('tag_goal_oriented')}</span>
            <span className="tag">{t('tag_quick_learner')}</span>
          </div>
        </motion.div>

        <motion.div
          className="about-right"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <h2 className="about-title">{t('about')}</h2>

          <div className="about-info-blocks">
            {[1, 2, 3].map((n, idx) => (
              <motion.div key={idx} className="info-box" variants={itemVariants}>
                <div className="info-icon tooltip" data-tooltip={tooltips[idx]}>
                  <FaLightbulb />
                </div>
                <p className="info-text">{t(`about_text_${n}`)}</p>
              </motion.div>
            ))}

            <motion.div className="info-box" variants={itemVariants}>
              <div className="info-icon tooltip" data-tooltip={tooltips[3]}>
                🌟
              </div>
              <p className="info-text">
                <strong>{t('values_title')}:</strong> {t('values_text')}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
