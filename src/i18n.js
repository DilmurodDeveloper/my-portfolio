import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: "Home",
          about: "About",
          skills: "Skills",
          experience: "Experience",
          projects: "Projects",
          contact: "Contact",
          developer: ".NET Developer",
        }
      },
      uz: {
        translation: {
          home: "Bosh sahifa",
          about: "Men haqimda",
          skills: "Ko'nikmalar",
          experience: "Tajriba",
          projects: "Loyihalar",
          contact: "Aloqa",
          developer: ".NET Dasturchi",
        }
      },
      ru: {
        translation: {
          home: "Главная",
          about: "Обо мне",
          skills: "Навыки",
          experience: "Опыт",
          projects: "Проекты",
          contact: "Контакт",
          developer: ".NET Разработчик",
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
