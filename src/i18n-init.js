import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const options =
  [ 
    { value: 'en', label: 'English' },
    { value: 'de', label: 'German' },
  ];

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "more than IT": "more than IT",
          "Your digital lab for impactful tech products": "Your digital lab for impactful tech products",
          "We help you digitalize your ventures and products.": "We help you digitalize your ventures and products.",
          "What We Do": "What We Do",
          "We believe in the": "We believe in the",
          "startup_principle": "lean startup principle",
          "user_advantage": "that everything we build should be of value for the user. Therefore our work does not start with the question ’Can we build it?’ but rather with ‘Should webuild it?’. We want the",
          "best_product":"best possible product for you and your users.",
          "more_than_IT":"This is why we are more than IT.",
          "Consulting":"Consulting",
          "Agile Methods": "Agile Methods",
          "Design Thinking": "Design Thinking",
          "Concept":"Concept",
          "Product Development":"Product Development",
          "MVP Testing":"MVP Testing",
          "Development":"Development",
          "Web & Mobile": "Web & Mobile",
          "Fullstack Software Development": "Fullstack Software Development",
          "Tracking & Analytics": "Tracking und Analytics",
          "Salesforce": "Salesforce",
          "Tech Stack": "Tech Stack",
          "Database": "Database",
          "Infrastructure":"Infrastructure",
          "What We Stand For": "What We Stand For",
          "build_happiness": "Learn and grow as a team. Create impactful products. Build happiness.",
          "Excitement": "Excitement",
          "Excitement_text": "We love coding and aspire to build extraordinary products that excite us and have an impact to the world.",
          "Trust": "Trust",
          "Trust_text": "For us the foundation of successful teamwork and collaboration is trust based on honest and transparent communication.",
          "Growth": "Grwoth",
          "Growth_text": "We strive for more – personal and professional growth is an essential part of our everyday work.",
        }
      },
      de: {
          translation:{
            "more than IT": "mehr als IT",
            "Your digital lab for impactful tech products": "Ihre Agentur für leistungsstarke, digitale Produkte",
            "typedText": "Wir helfen Ihnen, Ihre Ideen und Produkte umzusetzen.",
            "What We Do": "Was wir tun",
            "We believe in the": "Wir glauben an",
            "startup_principle": "das einfache Startup-Prinzip,",
            "user_advantage":"dass alles was wir entwickeln einen Wert für den Nutzer haben sollte. Daher beginnen wir unsere Arbeit nicht mit der Frage „Können wir das entwickeln?“, sondern „Sollten wir das entwickeln?“. Wir möchten das",
            "best_product": "bestmögliche Produkt für Sie und Ihre Nutzer.",
            "more_than_IT": "Deshalb sind wir mehr als IT.",
            "Consulting":"Beratung",
            "Agile Methods": "Agile Methoden",
            "Design Thinking": "Design Thinking",
            "Concept":"Konzept",
            "Product Development":"Produktentwicklung",
            "MVP Testing":"MVP Tests",
            "Development":"Entwicklung",
            "Web & Mobile": "Web & Mobile",
            "Fullstack Software Development": "Softwareentwicklung",
            "Tracking & Analytics": "Tracking und Analytics",
            "Salesforce": "Salesforce",
            "Tech Stack": "Technologien",
            "Database": "Datenbanken",
            "Infrastructure": "Infrastruktur",
            "What We Stand For": "Wofür wir stehen",
            "build_happiness": "Lerne und wachse als Team. Kreiere leistungsstarke Produkte. Entwickle Freude.",
            "Excitement": "Motivation",
            "Excitement_text": "Wir lieben es zu programmieren und Produkte zu entwickeln, die uns begeistern und einen Einfluss auf die Welt haben.",
            "Trust": "Vertrauen",
            "Trust_text": "Die Grundlage für erfolgreiche Teamarbeit und Zusammenarbeit ist Vertrauen, dass auf Ehrlichkeit und offener Kommunikation basiert.",
            "Growth": "Wachstum",
            "Growth_text": "Wir streben nach mehr – persönlich und beruflich ist Wachstum ein essentieller Teil unserer täglichen Arbeit.",

          }
      }
    },
    lng: "de",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    }
  });
  export default i18n;