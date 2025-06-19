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
          about: "ABOUT ME",
          skills: "Skills",
          experience: "Experience",
          projects: "Projects",
          contact: "Contact",
          developer: "Madirimov",
          cv_download: "Download CV",
          introduce: "INTRODUCE",
          welcome: "Welcome to my personal page!",
          hello: "HELLO",
          my_name: "MY NAME", 
          _name: "IS DILMUROD",
          about_text_1: "My name is Dilmurod. I’m a .NET backend developer with a deep interest in building scalable, clean, and maintainable server-side applications.",
          about_text_2: "I started programming out of curiosity during university and eventually fell in love with backend development, especially in the Microsoft ecosystem.",
          about_text_3: "My mission is to solve real-world problems through code and continuously improve my skills. I’m always learning and excited to take on new challenges.",
          full_name: "Full Name",
          fullname: "Dilmurod Madirimov",
          location: "Location",
          _location: "Khorezm, Uzbekistan",
          experience: "Experience",
          years_experience: "years of experience",
          tech_stack: "Tech Stack",
          techstack: ".NET, C#, ASP.NET Core, EF Core, SQL Server, React, Git",
          values_title: "Personal Values",
          values_text: "I value honesty, consistency, and a growth mindset. I believe in teamwork and writing clean, maintainable code.",
          "tag_dotnet_developer": ".NET Developer",
          "tag_problem_solver": "Problem Solver",
          "tag_continuous_learner": "Continuous Learner",
          "tag_aspnet_core_expert": "ASP.NET Core Expert",
          "tag_backend_developer": "Backend Developer",
          "tag_self_motivated": "Self-Motivated",
          "tag_tdd": "TDD (Test-Driven Development)",
          "tag_goal_oriented": "Goal-Oriented",
          "tag_quick_learner": "Quick Learner"
        }
      },
      uz: {
        translation: {
          home: "Bosh sahifa",
          about: "MEN HAQIMDA",
          skills: "Ko'nikmalar",
          experience: "Tajriba",
          projects: "Loyihalar",
          contact: "Aloqa",
          developer: "Madirimov",
          cv_download: "Rezyumeni yuklab olish",
          introduce: "TANISHUV",
          welcome: "Mening shaxsiy sahifamga xush kelibsiz!",
          hello: "SALOM",
          my_name: "MENING ISMIM",
          _name: "DILMUROD",
          about_text_1: "Ismim Dilmurod. Men kengaytiriladigan, toza va texnik jihatdan yaxshi qurilgan server ilovalarini ishlab chiqishni yoqtiradigan .NET backend dasturchiman.",
          about_text_2: "Dasturlashni universitetda o‘rganishni boshladim va vaqt o‘tishi bilan aynan backend sohasi menga qiziq bo‘lib qoldi, ayniqsa Microsoft ekotizimi ichida ishlash.",
          about_text_3: "Maqsadim – real hayotdagi muammolarni kod orqali hal qilish va doimiy rivojlanish. Men har doim yangi texnologiyalarni o‘rganishga ochiqman.",
          full_name: "To‘liq ism",
          fullname: "Dilmurod Madirimov",
          location: "Manzil",
          _location: "Xorazm, Uzbekistan",
          experience: "Tajriba",
          years_experience: "yillik tajriba",
          tech_stack: "Texnologiyalar",
          techstack: ".NET, C#, ASP.NET Core, EF Core, SQL Server, React, Git",
          values_title: "Qadriyatlar",
          values_text: "Men halollik, intizom va doimiy o‘sishni qadrlayman. Jamoa bilan ishlash va toza kod yozish — ustuvor tamoyillarimdir.",
          "tag_dotnet_developer": ".NET Dasturchi",
          "tag_problem_solver": "Muammo Yechuvchi",
          "tag_continuous_learner": "Doimiy O‘rganuvchi",
          "tag_aspnet_core_expert": "ASP.NET Core Mutaxassisi",
          "tag_backend_developer": "Backend Dasturchi",
          "tag_self_motivated": "O‘zini ilhomlantira oluvchi",
          "tag_tdd": "TDD (Test orqali dasturlash)",
          "tag_goal_oriented": "Maqsadga Yo‘naltirilgan",
          "tag_quick_learner": "Tez O‘rganuvchi"
        }
      },
      ru: {
        translation: {
          home: "Главная",
          about: "ОБО МНЕ",
          skills: "Навыки",
          experience: "Опыт",
          projects: "Проекты",
          contact: "Контакт",
          developer: "Madirimov",
          cv_download: "Скачать резюме",
          introduce: "ПРЕДСТАВЛЯТЬ",
          welcome: "Добро пожаловать на мою персональную страницу!",
          hello: "ПРИВЕТ",
          my_name: "МЕНЯ",
          _name: "ЗОВУТ ДИЛМУРОД",
          about_text_1: "Меня зовут Дилмурод. Я .NET backend разработчик, увлечённый созданием масштабируемых, чистых и поддерживаемых серверных приложений.",
          about_text_2: "Я начал изучать программирование в университете и влюбился в backend разработку, особенно в рамках Microsoft стека.",
          about_text_3: "Моя цель — решать реальные задачи с помощью кода и постоянно совершенствоваться. Я всегда открыт для новых знаний и вызовов.",
          full_name: "Полное имя",
          fullname: "Дилмурод Мадиримов",
          location: "Местоположение",
          _location: "Хоразм, Узбекистан",
          experience: "Опыт",
          years_experience: "лет опыта",
          tech_stack: "Стек технологий",
          techstack: ".NET, C#, ASP.NET Core, EF Core, SQL Server, React, Git",
          values_title: "Ценности",
          values_text: "Я ценю честность, дисциплину и стремление к росту. Верю в командную работу и чистый код.",
          "tag_dotnet_developer": "Разработчик .NET",
          "tag_problem_solver": "Решатель проблем",
          "tag_continuous_learner": "Постоянно обучающийся",
          "tag_aspnet_core_expert": "Эксперт по ASP.NET Core",
          "tag_backend_developer": "Бэкенд-разработчик",
          "tag_self_motivated": "Самомотивированный",
          "tag_tdd": "TDD (Разработка через тестирование)",
          "tag_goal_oriented": "Целеустремлённый",
          "tag_quick_learner": "Быстро обучающийся"
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
