// src/data/content.js
import planningIcon from "../assets/img/planifikim.png";
import supervisionIcon from "../assets/img/mbikqyrja.png";
import constructionIcon from "../assets/img/ndertimi.png";
import deliveryIcon from "../assets/img/dorezimi.png";


export const siteInfo = {
  logo: "SAQIPI",
  companyName: "SAQIPI CONSTRUCTION",
  phone: "+381631115523",
  email: "emailexample@gmail.com",
  address: "Adress b13 example",
};

export const navLinks = [
  { id: "ballina", label: "BALLINA" },
  { id: "rreth-nesh", label: "RRETH NESH" },
  { id: "sherbimet", label: "SHËRBIMET" },
  { id: "kontakt", label: "KONTAKTI" },
];

export const heroContent = {
  id: "ballina",
  title: "KOMPANI MODERNE",
  subtitle:
    "Specialistë në ndërtime të larta, të ulëta dhe projekte infrastrukturore — Që nga vitet 2000.",
  primaryCta: {
    label: "MË SHUMË",
    href: "#rreth-nesh",
  },
};

export const processSteps = [
  {
    id: 1,
    title: "PLANIFIKIMI & DIZAJNI",
    description:
      "Transformojmë konceptet tuaja në projekte të qarta dhe funksionale, duke krijuar zgjidhje të personalizuara që përputhen me nevojat dhe vizionin e klientit.",
    icon: planningIcon,
  },
  {
    id: 2,
    title: "MBIKËQYRJA PROFESIONALE",
    description:
      "Mbikëqyrim i vazhdueshëm dhe i kujdesshëm në çdo fazë të punimeve. Sigurojmë cilësi maksimale dhe përpikëri të plotë sipas standardeve të ndërtimit.",
    icon: supervisionIcon,
  },
  {
    id: 3,
    title: "NDËRTIMI",
    description:
      "Realizojmë punime të vrazhda me materiale cilësore dhe teknologji moderne. Nga struktura deri te muret mbajtëse, garantojmë qëndrueshmëri dhe siguri afatgjatë.",
    icon: constructionIcon,
  },
  {
    id: 4,
    title: "DORËZIMI I OBJEKTIT",
    description:
      "Objekti dorëzohet i përfunduar sipas të gjitha fazave të ndërtimit të vrazhdë, i gatshëm për punimet pasuese. Siguri, saktësi dhe cilësi në çdo detaj konstruktiv.",
    icon: deliveryIcon,
  },
];

;

export const projectsLogos = [
  { name: "PREMIUM PALACE" },
  { name: "esa group" },
];


export const contactContent = {
  id: "kontakt",
  title: "Na Kontaktoni",
  phoneLabel: "Telefon",
  emailLabel: "Email",
  addressLabel: "Adresë",
};


import g1 from "../assets/img/img1.jpg";
import g2 from "../assets/img/img2.jpg";
import g3 from "../assets/img/img3.jpg";
import g4 from "../assets/img/img4.jpg";
import g5 from "../assets/img/img5.jpg";
import g6 from "../assets/img/img6.jpg";

export const galleryImages = [
  { id: 1, src: g1, alt: "Projekti ndërtimor 1" },
  { id: 2, src: g2, alt: "Projekti ndërtimor 2" },
  { id: 3, src: g3, alt: "Projekti ndërtimor 3" },
  { id: 4, src: g4, alt: "Projekti ndërtimor 4" },
  { id: 5, src: g5, alt: "Projekti ndërtimor 5" },
  { id: 6, src: g6, alt: "Projekti ndërtimor 6" },
];


// ABOUT SECTION
import aboutImg from "../assets/img/IMGABOUT.png";

export const aboutContent = {
  title: "RRETH NESH",
  paragraphs: [
    "Ne jemi një kompani ndërtimi e specializuar në realizimin e projekteve të ndërtimit të vrazhdë dhe konstruk­sioneve moderne, duke ofruar cilësi të lartë dhe standarde profesionale në çdo punë që marrim përsipër.",
    "Me një ekip ekspertësh, përvojë shumëvjeçare dhe teknologji bashkëkohore, ne garantojmë zgjidhje të sigurta, afatgjata dhe të dizajnuara për të përmbushur nevojat e çdo klienti.",
    "Misioni ynë është të ndërtojmë me korrektësi, transparencë dhe përgjegjësi — duke krijuar struktura të forta, të qëndrueshme dhe me vlerë të lartë funksionale.",
    "Çdo projekt e trajtojmë me përkushtim të plotë, duke respektuar afatet, buxhetin dhe standardet më të larta të industrisë."
  ],
  highlight: "Ndërtojmë me kujdes. Krijojmë vlerë. Sigurojmë cilësi.",
  image: aboutImg,
};


// STATS SECTION
import statsBg from "../assets/img/img2.jpg";

export const statsSection = {
  background: statsBg,
  items: [
    { id: 1, value: 300, suffix: "+", label: "PROJEKTE" },
    { id: 2, value: 24,  suffix: "+", label: "EXPERIENCË" },
    { id: 3, value: 50,  suffix: "+", label: "PUNTORË" },
  ],
};



// FEATURED PROJECTS / MAIN BUILDINGS
import premiumPalaceLogo from "../assets/img/BestCompanyLogo1.png";
import esaGroupLogo from "../assets/img/BestCompanyLogo2.png";

export const featuredProjects = {
  title: "NDËRTIMET TONA MË TË MËDHA DHE MË DOMETHËNËSE",
  logos: [
    {
      id: 1,
      src: premiumPalaceLogo,
      alt: "Premium Palace",
    },
    {
      id: 2,
      src: esaGroupLogo,
      alt: "ESA Group",
    },
  ],
};


// WHY CHOOSE US SECTION
export const whyChooseUs = {
  title: "PSE TË NA ZGJIDHNI NE",
  items: [
    {
      title: "CILËSI E GARANTUAR DHE STANDARDE TË LARTA",
      description:
        "Ne ndërtojmë me përpikëri, duke përdorur materiale të certifikuara dhe teknologji moderne. Çdo projekt kalon kontroll të rreptë cilësie që nga themeli deri te përfundimi.",
    },
    {
      title: "BESUESHMËRI DHE TRANSPARENTË NË ÇDO HAP",
      description:
        "Ne besojmë në komunikim të qartë dhe marrëdhënie të ndershme me klientët tanë. Jepim afate reale dhe dorëzojmë çdo projekt sipas planit të dakorduar.",
    },
    {
      title: "PËRVOJË PROFESIONALE DHE ZGJIDHJE TË PERSONALIZUARA",
      description:
        "Ekipi ynë përbëhet nga specialistë me përvojë shumëvjeçare në ndërtimin e objekteve të mëdha. Ofron zgjidhje të personalizuara për çdo projekt, rezidencial apo komercial.",
    },
  ],
};


// CONTACT SECTION
import contactImg from "../assets/img/Contactimg.jpg";

export const contactInfo = {
  title: "Na Kontaktoni",
  phone: "+381631115523",
  email: "emailexample@gmail.com",
  address: "Adress b13 example",
  image: contactImg,
};
