import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: {
          "hero": {
            "more_than_it": "more than IT",
            "digital_lab": "Your digital lab for impactful tech products"},
          "mission": {
            "line1": "We help you digitalize your ventures and products.",
            "line2": "With ease, on time, no pain."},
          "services": {
            "what": "What We Do",
            "principle": "We believe in the <1>lean startup principle</1> that everything we build should be of value for the user. Therefore our work does not start with the question ’Can we build it?’ but rather with ‘Should webuild it?’. We want the <1>best possible product for you and your users.</1> ",
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
            "Infrastructure":"Infrastructure"},
          "values":{
            "what": "What We Stand For",
            "build_happiness": "Learn and grow as a team. Create impactful products. Build happiness.",
            "Excitement": "Excitement",
            "Excitement_text": "We love coding and aspire to build extraordinary products that excite us and have an impact to the world.",
            "Trust": "Trust",
            "Trust_text": "For us the foundation of successful teamwork and collaboration is trust based on honest and transparent communication.",
            "Growth": "Grwoth",
            "Growth_text": "We strive for more – personal and professional growth is an essential part of our everyday work."},
          "portfolio":{
            "video_platform": "Video platform (Web & iOS)",
            "survey_results": "Survey Results Dashboard",
            "seo_landingpages": "Automated SEO landing pages",
            "invoice_checker": "Automated Invoice Checker",
            "sales_dashboard": "Gamification Sales Dashboards",
            "recruiting_platform": "internal recruiting platform",
            "seo_optimized": "SEO optimized landing page",
            "nestle_app": "Nestle Finder & Nutrition App",
            "cancellation_platform": "Subscription cancellation platform"},
          "team": {
            "Hover over each profile for more info": "Hover over each profile for more info",
            "Click on each picture for more info": "Click on each picture for more info"},
          "references": "References",
          "contact": {
            "get_in_touch": "Let's <1>get in touch</1>",
            "meet_up": "Let's <1>meet up</1>",
            "build": "Let's <1>build</1>",
            "say_hi": "Say Hi",
            "office": "Office",
            "Germany": "Germany",
            "phone": "phone",
            "email": "Email"},
          "footer": {
            "your_adress":"Your destination for impactful tech products.",
            "impressum": "impressum"},
          "navbar": {
            "mission":"mission",
            "values": "values",
            "services": "services",
            "portfolio": "portfolio",
            "team": "team",
            "references":"references",
            "contact":"contact"
          }
        }
      },
      de: {
          translation:{
            "hero": {
              "more_than_it": "mehr als IT",
              "digital_lab": "Ihre Agentur für leistungsstarke, digitale Produkte",
            },
            "mission":{
            "line1": "Wir helfen Ihnen, Ihre Ideen und Produkte umzusetzen.",
            "line2": "Einfach, pünktlich und ohne Stress!"
            },
            "services": {
              "what": "Was wir tun",
              "principle": "Wir glauben an <1>die Startup-Philosophie</1>, dass alles was wir entwickeln einen Wert für den Nutzer haben sollte. Daher beginnen wir unsere Arbeit nicht mit der Frage „Können wir das entwickeln?“, sondern „Sollten wir das entwickeln?“. Wir möchten das <1>bestmögliche Produkt für Sie und Ihre Nutzer.</1>",
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
              "Infrastructure": "Infrastruktur"},
            "values": {
              "what": "Wofür wir stehen",
              "build_happiness": "Lerne und wachse als Team. Kreiere leistungsstarke Produkte. Entwickle Freude.",
              "Excitement": "Motivation",
              "Excitement_text": "Wir lieben es zu programmieren und Produkte zu entwickeln, die uns begeistern und einen Einfluss auf die Welt haben.",
              "Trust": "Vertrauen",
              "Trust_text": "Die Grundlage für erfolgreiche Teamarbeit und Zusammenarbeit ist Vertrauen, dass auf Ehrlichkeit und offener Kommunikation basiert.",
              "Growth": "Wachstum",
              "Growth_text": "Wir streben nach mehr – persönlich und beruflich ist Wachstum ein essentieller Teil unserer täglichen Arbeit.",
              },
            "portfolio": {
              "video_platform": "Video-Plattform (Web & iOS)",
              "survey_results": "Auswertungsdashboard für Umfragen",
              "seo_landingpages": "Automatisierte SEO Landingpages",
              "invoice_checker": "Automatisierter Rechnungs-Checker",
              "sales_dashboard": "Gamifiziertes Sales-Dashboard",
              "recruiting_platform": "interne Rekrutierungsplattform",
              "seo_optimized": "SEO Landingpage",
              "nestle_app": "Nestle Finder & Ernährungs-App",
              "cancellation_platform": "Kündigungsplattform",
              },
            "team": {
              "hover": "Hover über das Profil für weitere Infos",
              "click": "Klicke auf ein Profil für weitere Infos",
            },
            "references": "Referenzen",
            "contact": {
              "get_in_touch": "Lass <1>uns in Kontakt treten</1>",
              "meet_up": "Lass <1>uns ein Treffen vereinbaren</1>",
              "build": "Lass <1>uns Neues erschaffen</1>",
              "say_hi": "Sag Hallo",
              "office": "Büro",
              "Germany":"Deutschland",
              "phone": "Telefon",
              "email": "E-Mail",
            },
            "footer": {
              "your_adress":"Ihre Adresse für beeindruckende, digitale Produkte.",
              "impressum": "Impressum"},
            "navbar": {
              "mission":"Mission",
              "values": "Werte",
              "services": "Leistungen",
              "portfolio": "Portfolio",
              "team": "Team",
              "references":"Referenzen",
              "contact":"Kontakt"
            },
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