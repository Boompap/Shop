import HeaderScrollState from "@/components/HeaderScrollState";
import LanguageToggle from "@/components/LanguageToggle";
import SfoliatoidiPopup from "@/components/SfoliatoidiPopup";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=%CE%A1%CE%99%CE%96%CE%9F%CE%A3%20%CE%92%CE%91%CE%A3%CE%99%CE%9B%CE%95%CE%99%CE%9F%CE%A3%20%CE%95%CE%9B%CE%95%CE%A5%CE%98%CE%95%CE%A1%CE%99%CE%9F%CE%A3%20%CE%9B%CE%B5%CF%89%CF%86.%20%CE%9A%CF%81%CF%85%CE%BF%CE%BD%CE%B5%CF%81%CE%AF%CE%BF%CF%85%2017%20%CE%86%CE%B3.%20%CE%A3%CF%84%CE%AD%CF%86%CE%B1%CE%BD%CE%BF%CF%82%20145%2065";
const facebookUrl = "https://www.facebook.com/profile.php?id=100063526604702";
const listingUrl =
  "https://www.xrysietairia.eu/company/rizos-basileios-eleutherios-335874";

const bougatsaOptions = [
  {
    greek: "Άχνη και κανέλα",
    english: "Sugar and cinnamon",

    title: (
      <>
        <span className="flourWord">Άχνη</span>{" "}
        <span className="creamWord">και</span>{" "}
        <span className="cinnamonWord">Κανέλα</span>
      </>
    ),

    englishTitle: (
      <>
        <span className="flourWord">Sugar</span>{" "}
        <span className="creamWord">and</span>{" "}
        <span className="cinnamonWord">Cinnamon</span>
      </>
    ),
    textGreek: "Η κλασική επιλογή που μυρίζει πρωινό.",
    textEnglish: "The classic breakfast-style finish.",
  },
  {
    greek: "Πραλίνα σοκολάτα",
    english: "Praline chocolate",

    title: (
      <>
        <span className="pralineWord">Πραλίνα</span>{" "}
        <span className="chocolateWord">Σοκολάτα</span>
      </>
    ),

    englishTitle: (
      <>
        <span className="pralineWord">Praline</span>{" "}
        <span className="chocolateWord">Chocolate</span>
      </>
    ),
    textGreek: "Για όσους θέλουν τη μπουγάτσα πιο πλούσια και γλυκιά.",
    textEnglish: "For a richer, sweeter bougatsa.",
  },
  {
    greek: "Μπουγάτσα με τυρί",
    english: "Bougatsa with cheese",

    title: (
      <>
        <span className="creamWord">Μπουγάτσα με</span>{" "}
        <span className="cheeseWord">Τυρί</span>
      </>
    ),

    englishTitle: (
      <>
        <span className="creamWord">Bougatsa with</span>{" "}
        <span className="cheeseWord">Cheese</span>
      </>
    ),
    textGreek: "Αλμυρή επιλογή με τυρί για κάθε ώρα.",
    textEnglish: "A savory cheese option for any hour.",
  },
  {
    greek: "Λιωμένο Bueno",
    english: "Melted Bueno",

    title: (
      <>
        <span className="creamWord">Λιωμένο</span>{" "}
        <span className="buenoWord">Bueno</span>
      </>
    ),

    englishTitle: (
      <>
        <span className="creamWord">Melted</span>{" "}
        <span className="buenoWord">Bueno</span>
      </>
    ),
    textGreek: "Κρεμώδης topping επιλογή για πιο μοντέρνα γεύση.",
    textEnglish: "A creamy topping for a more modern sweet bite.",
  },
];

const productShowcase = [
  {
    greek: "Μπουγάτσα Σοκολάτα",
    english: "Chocolate Bougatsa",
    textGreek: "Η σπεσιαλιτέ μας.",
    textEnglish: "Our specialty.",
    image: "/rizos/sweet-bougatsa.jpg",
    alt: "Μπουγάτσα σοκολάτα",
    featured: true,
  },
  {
    greek: "Κλασική Μπουγάτσα",
    english: "Classic Bougatsa",
    textGreek: "Τραγανό φύλλο, ζεστή βιτρίνα, καθημερινή επιλογή.",
    textEnglish: "Crisp pastry, warm counter, everyday choice.",
    image: "/rizos/bougatsa-tray.jpg",
    alt: "Κλασικές μπουγάτσες στη βιτρίνα",
  },
  {
    greek: "Σφολιατοειδή",
    english: "Savory pastries",
    textGreek: "Τυροπιτοειδή, σφολιάτες και αλμυρές επιλογές για κάτι γρήγορο.",
    textEnglish:
      "Cheese pies, pastries, and savory choices for something quick.",
    image: "/rizos/pastry-display.jpg",
    alt: "Τυροπιτοειδή και σφολιάτες στη βιτρίνα",
  },
  {
    greek: "Πεϊνιρλί",
    english: "Peinirli",
    textGreek: "Ζεστό πεϊνιρλί για πρωινό ή σνακ.",
    textEnglish: "Warm peinirli for breakfast or a snack.",
    image: "/rizos/ham-cheese-rolls.jpg",
    alt: "Πεϊνιρλί με ζαμπόν και τυρί",
  },
  {
    greek: "Πίτσα Ατομική",
    english: "Individual Pizza",
    textGreek: "Αφράτη πίτσα με τυρί, αλλαντικά και πιπεριές.",
    textEnglish: "Soft individual pizza with cheese, ham, and peppers.",
    image: "/rizos/pizza-warm-background.png",
    alt: "Ατομική πίτσα σε ζεστό φόντο αρτοποιείου",
  },
];

const productPair = [
  {
    greek: "Καφές",
    english: "Coffee",
    textGreek: "Freddo espresso, freddo cappuccino, cappuccino και άλλα.",
    textEnglish: "Freddo espresso, freddo cappuccino, cappuccino, and more.",
    image: "/rizos/coffee-clean.png",
    alt: "Καφές ΡΙΖΟΣ",
  },
  {
    greek: "Μπριός",
    english: "Brioche Buns",
    textGreek: "Αφράτα μπριός για κάθε στιγμή.",
    textEnglish: "Soft brioche buns for any moment.",
    image: "/rizos/brioche-buns.jpg",
    alt: "Μπριός ΡΙΖΟΣ",
  },
];

const productTicker = {
  greek:
    "ΚΑΦΕΔΕΣ | ΡΟΦΗΜΑΤΑ | ΧΥΜΟΙ | ΑΝΑΨΥΚΤΙΚΑ | ΜΠΥΡΕΣ | ΣΦΟΛΙΑΤΕΣ | ΜΠΑΓΚΕΤΕΣ",
  english:
    "COFFEES | DRINKS | JUICES | SOFT DRINKS | BEERS | PASTRIES | BAGUETTES",
};

export default function Home() {
  return (
    <main className="pageShell">
      <HeaderScrollState />

      <header className="siteHeader" id="top">
        <a className="brand" href="#top" aria-label="ΜΠΟΥΓΑΤΣΟΠΩΛΕΙΟ ΡΙΖΟΣ">
          <span className="brandMark">Ρ</span>
          <span className="brandName">ΜΠΟΥΓΑΤΣΟΠΩΛΕΙΟ ΡΙΖΟΣ</span>
          <span className="compactBrandName">ΡΙΖΟΣ</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <p className="topInfoLabel">
            <span className="el">
              Αγ. Στέφανος · Λεωφ. Κρυονερίου 17 · <br className="topInfoMobileBreak" />
              ΔΕΥ - ΠΑΡ 05:00 - 20:00 · <br className="topInfoMobileBreak" />
              ΣΑΒ - ΚΥΡ 05:00 - 15:00
            </span>
            <span className="en">
              AGIOS STEFANOS · <br className="topInfoMobileBreak" />
              MON - FRI 05:00 - 20:00 · <br className="topInfoMobileBreak" />
              SAT - SUN 05:00 - 15:00
            </span>
          </p>

          <a className="fullMenuNavButton" href="#products">
            <span className="fullMenuNavIcon" aria-hidden="true">
              <svg viewBox="0 0 32 24" focusable="false">
                <path d="M3 4h26v3H3z" />
                <path d="M3 10.5h26v3H3z" />
                <path d="M3 17h26v3H3z" />
              </svg>
            </span>

            <span>
              <span className="el">Όλο το μενού</span>
              <span className="en">Full menu</span>
            </span>
          </a>

          <div className="navLinks">
            <a href="#products">
              <span className="el">Προϊόντα</span>
              <span className="en">Products</span>
              <span className="navIcon navIconProducts" aria-hidden="true">
                <svg viewBox="0 0 64 48" focusable="false">
                  <defs>
                    <mask id="navCroissantCuts">
                      <rect width="64" height="48" style={{ fill: "white" }} />
                      <path
                        d="M18 18c5 5 8 12 8 22"
                        style={{
                          fill: "none",
                          stroke: "black",
                          strokeLinecap: "round",
                          strokeWidth: 5,
                        }}
                      />
                      <path
                        d="M30 10c6 8 8 18 6 31"
                        style={{
                          fill: "none",
                          stroke: "black",
                          strokeLinecap: "round",
                          strokeWidth: 5,
                        }}
                      />
                      <path
                        d="M43 12c-4 8-5 17-3 27"
                        style={{
                          fill: "none",
                          stroke: "black",
                          strokeLinecap: "round",
                          strokeWidth: 5,
                        }}
                      />
                      <path
                        d="M53 22c-6 4-10 10-11 17"
                        style={{
                          fill: "none",
                          stroke: "black",
                          strokeLinecap: "round",
                          strokeWidth: 5,
                        }}
                      />
                    </mask>
                  </defs>
                  <path
                    d="M5 30c4-12 16-22 31-25 12 0 22 7 25 17 2 8-1 15-8 20-4 3-9 2-12-2-7 5-18 5-25 0-4 4-9 4-12 0-3-3-2-7 1-10zm9 4c11 7 31 7 42-6-5 3-12 5-20 5s-16-1-22-5c-3 2-3 4 0 6z"
                    fillRule="evenodd"
                    mask="url(#navCroissantCuts)"
                  />
                </svg>
              </span>
            </a>
            <a href="#options">
              <span className="el">Μπουγάτσα</span>
              <span className="en">Bougatsa</span>
              <span className="navIcon navIconBougatsa" aria-hidden="true">
                <svg viewBox="0 0 88 58" focusable="false">
                  <path
                    d="M16 30c-2-7 2-13 9-16 5-5 14-9 22-7 3 0 4 4 7 4 8-3 17 0 20 7 6 5 8 13 3 21-4 6-12 8-19 13-5 4-13 3-19 0-7-4-18-3-23-10-4-2-4-7 0-12z"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 5.2,
                    }}
                  />
                  <path
                    d="M24 15c-6 6-9 11-8 20m0-2c5-2 9-6 15-5 4 0 2 8 6 9 5 0 10-2 14 1 4 3 0 10 5 12"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 4,
                    }}
                  />
                  <path
                    d="M35 19c7-3 15-4 22-1m5 9c5 0 10 1 13 5m-34 19c9 2 17 1 24-3"
                    style={{
                      fill: "none",
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 3.2,
                    }}
                    opacity="0.72"
                  />
                </svg>
              </span>
            </a>
            <a href="#story">
              <span className="el">Το μαγαζί</span>
              <span className="en">The shop</span>
              <span className="navIcon navIconShop" aria-hidden="true">
                <svg viewBox="0 0 64 48" focusable="false">
                  <path d="M20 6h24v7H20z" />
                  <path d="M13 15h38l6 9c-1 5-5 8-9 8-4 0-7-2-8-6-2 4-5 6-8 6s-6-2-8-6c-1 4-4 6-8 6s-8-3-9-8l6-9z" />
                  <path d="M15 33h6v10h22V33h6v15H15z" />
                </svg>
              </span>
            </a>

            <a href="#contact">
              <span className="el">Επικοινωνία</span>
              <span className="en">Contact</span>
              <span className="navIcon navIconContact" aria-hidden="true">
                <svg viewBox="0 0 64 48" focusable="false">
                  <path d="M18 6c-4 2-7 6-7 11 0 15 21 25 35 25 5 0 9-3 11-7l-10-8c-2 2-4 4-7 4-6 0-17-8-17-14 0-3 2-5 4-7L18 6z" />
                  <path
                    d="M43 8c7 2 11 6 13 13l-5 1c-1-5-5-8-9-10l1-4z"
                    opacity="0.72"
                  />
                </svg>
              </span>
            </a>
          </div>
          <LanguageToggle />
        </nav>
      </header>

      <section className="hero bougatsaHero">
        <div className="heroLayout">
          <div className="heroIntro">
            <p className="heroBrandTitle">
              <span className="el">ΜΠΟΥΓΑΤΣΟΠΩΛΕΙΟ ΡΙΖΟΣ</span>
              <span className="en">RIZOS BOUGATSA SHOP</span>
            </p>
            <h1>
              <span className="el">
                Ο Μάστορας της
                <br />
                Μπουγάτσας.
              </span>
              <span className="en">
                The Master of
                <br />
                Bougatsa.
              </span>
            </h1>
            <p className="heroSupport">
              <span className="el">Μπουγάτσα και καφές στον Αγ. Στέφανο.</span>
              <span className="en">Bougatsa and coffee in Agios Stefanos.</span>
            </p>
            <div className="heroActions" role="group" aria-label="Hero actions">
              <a
                className="heroAction heroActionPrimary"
                href={mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span className="el">Οδηγίες</span>
                <span className="en">Directions</span>
              </a>
              <a className="heroAction heroActionSecondary" href="tel:+302108141388">
                <span className="el">Κλήση</span>
                <span className="en">Call</span>
              </a>
              <a className="heroAction heroActionTertiary" href="#products">
                <span className="el">Δες τα προϊόντα</span>
                <span className="en">See products</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <section className="section productShowcase" id="products">
        <div className="productTicker productTickerTop" aria-hidden="true">
          <div className="productTickerTrack">
            {[0, 1, 2, 3].map((item) => (
              <span className="productTickerItem" key={item}>
                <span className="el">{productTicker.greek}</span>
                <span className="en">{productTicker.english}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="sectionHeader showcaseHeader">
          <h2 className="handmadeTitle">
            <span className="el">ΧΕΙΡΟΠΟΙΗΤΑ ΚΑΘΗΜΕΡΙΝΑ</span>
            <span className="en">HANDMADE DAILY</span>
          </h2>
        </div>

        <aside className="bakerLoop" aria-label="Animated baker kneading dough">
          <svg viewBox="0 0 340 260" role="img" aria-hidden="true">
            <path
              className="doughShape"
              d="M104 164 C122 128, 169 113, 229 121 C290 129, 326 153, 319 187 C311 224, 249 240, 177 230 C119 222, 90 195, 104 164 Z"
            />
            <g className="stickBody">
              <g className="apronGroup">
                <path
                  className="stickApron"
                  d="M82 126 C69 144, 59 170, 52 205 L46 237 L75 241 C91 214, 98 182, 96 150 C92 139, 88 131, 82 126 Z"
                />
                <path
                  className="apronStrap"
                  d="M82 126 C74 135, 67 147, 61 162"
                />
                <path
                  className="apronStrap"
                  d="M84 128 C91 138, 95 149, 97 163"
                />
                <path
                  className="apronPocket"
                  d="M55 196 L78 200 L72 219 L52 216 Z"
                />
                <g className="apronLogoBadge" transform="rotate(-40 69 196)">
                  <text className="apronLogo" x="69" y="196">
                    ΡΙΖΟΣ
                  </text>
                </g>
              </g>
              <g className="chefHat">
                <path d="M91 40 C97 30, 109 25, 124 24 C133 17, 146 20, 151 30 C164 34, 166 45, 154 51 C145 55, 134 58, 124 64 C115 68, 104 66, 99 58 C91 58, 86 51, 91 40 Z" />
              </g>
              <circle className="stickHead" cx="126" cy="68" r="37" />
              <path className="stickNeck" d="M112 102 L83 128" />
              <path className="stickBack" d="M83 128 C60 153, 43 185, 28 240" />
            </g>
            <g className="stickRollingAction">
              <path className="stickArm" d="M83 128 C98 151, 123 175, 146 181">
                <animate
                  attributeName="d"
                  dur="1.8s"
                  repeatCount="indefinite"
                  keyTimes="0;0.5;0.78;1"
                  values="M83 128 C98 151, 123 175, 146 181; M83 128 C105 164, 132 189, 154 190; M83 128 C103 149, 126 166, 149 170; M83 128 C98 151, 123 175, 146 181"
                />
              </path>
              <path
                className="stickArmSupport"
                d="M86 134 C108 151, 140 163, 166 158"
              >
                <animate
                  attributeName="d"
                  dur="1.8s"
                  repeatCount="indefinite"
                  keyTimes="0;0.5;0.78;1"
                  values="M86 134 C108 151, 140 163, 166 158; M86 134 C130 164, 177 180, 216 177; M86 134 C119 149, 159 160, 190 158; M86 134 C108 151, 140 163, 166 158"
                />
              </path>
              <path
                className="rollingPin"
                d="M123 194 C148 180, 177 162, 207 143"
              >
                <animate
                  attributeName="d"
                  dur="1.8s"
                  repeatCount="indefinite"
                  keyTimes="0;0.5;0.78;1"
                  values="M123 194 C148 180, 177 162, 207 143; M118 207 C159 195, 229 181, 292 174; M131 177 C164 169, 207 160, 246 157; M123 194 C148 180, 177 162, 207 143"
                />
              </path>
              <circle className="rollingHandle" cx="123" cy="194" r="8">
                <animate
                  attributeName="cx"
                  dur="1.8s"
                  repeatCount="indefinite"
                  keyTimes="0;0.5;0.78;1"
                  values="123;118;131;123"
                />
                <animate
                  attributeName="cy"
                  dur="1.8s"
                  repeatCount="indefinite"
                  keyTimes="0;0.5;0.78;1"
                  values="194;207;177;194"
                />
              </circle>
              <circle className="rollingHandle" cx="207" cy="143" r="8">
                <animate
                  attributeName="cx"
                  dur="1.8s"
                  repeatCount="indefinite"
                  keyTimes="0;0.5;0.78;1"
                  values="207;292;246;207"
                />
                <animate
                  attributeName="cy"
                  dur="1.8s"
                  repeatCount="indefinite"
                  keyTimes="0;0.5;0.78;1"
                  values="143;174;157;143"
                />
              </circle>
            </g>
          </svg>
        </aside>

        <div className="productMosaic" aria-label="Product showcase">
          {productShowcase.map((item) => (
            <article
              className={`mosaicCard${item.featured ? " featuredProduct" : ""}`}
              key={item.greek}
            >
              <img src={item.image} alt={item.alt} />
              <div>
                <h3>
                  <span className="el">{item.greek}</span>
                  <span className="en">{item.english}</span>
                </h3>
                <p>
                  <span className="el">{item.textGreek}</span>
                  <span className="en">{item.textEnglish}</span>
                </p>
                {item.greek === "Σφολιατοειδή" && <SfoliatoidiPopup />}
              </div>
            </article>
          ))}
        </div>

        <div className="productPairGrid" aria-label="Coffee and brioche">
          {productPair.map((item) => (
            <article
              className="mosaicCard pairedProduct coffeeProduct"
              key={item.greek}
            >
              <img src={item.image} alt={item.alt} />
              <div>
                <h3>
                  <span className="el">{item.greek}</span>
                  <span className="en">{item.english}</span>
                </h3>
                <p>
                  <span className="el">{item.textGreek}</span>
                  <span className="en">{item.textEnglish}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="productTicker productTickerBottom" aria-hidden="true">
          <div className="productTickerTrack">
            {[0, 1, 2, 3].map((item) => (
              <span className="productTickerItem" key={item}>
                <span className="el">{productTicker.greek}</span>
                <span className="en">{productTicker.english}</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section toppingsSection" id="options">
        <div className="sectionHeader showcaseHeader">
          <h2>
            <span className="el">ΕΠΙΛΟΓΕΣ ΜΠΟΥΓΑΤΣΑΣ</span>
            <span className="en">BOUGATSA OPTIONS</span>
          </h2>
        </div>

        <div className="toppingsBoard">
          <figure className="toppingsPhoto">
            <img src="/rizos/sweet-bougatsa.jpg" alt="Μπουγάτσα με γλυκιά γέμιση" />
          </figure>

          <div className="bougatsaMenu compactToppings">
            {bougatsaOptions.map((item) => (
              <article className="bougatsaOption" key={item.greek}>
                <div>
                  <h3>
                    <span className="el">{item.title}</span>
                    <span className="en">{item.englishTitle}</span>
                  </h3>
                  <p>
                    <span className="el">{item.textGreek}</span>
                    <span className="en">{item.textEnglish}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="storyBand" id="story">
        <p>
          <span className="el">Προϊόντα ημέρας, κάθε μέρα</span>
          <span className="en">Fresh daily products, Every Day</span>
        </p>
      </section>

      <section className="visit" id="visit">
        <div className="visitInner">
          <div className="visitContent">
            <p className="eyebrow visitLabel">
              <span className="el">Βρες το κατάστημα</span>
              <span className="en">Find the shop</span>
            </p>

            <div className="visitCopy">
              <h2>
                <span className="el">
                  Λεωφ. Κρυονερίου 17, Άγιος Στέφανος.
                </span>
                <span className="en">
                  17 Kryoneriou Avenue, Agios Stefanos.
                </span>
              </h2>
            </div>

            <div className="hours visitHoursOverlay">
              <h3>
                <span className="el">Ωράριο</span>
                <span className="en">Hours</span>
              </h3>

              <p>
                <span className="el">Δευτέρα - Παρασκευή</span>
                <span className="en">Monday - Friday</span>
                <strong>05:00 - 20:00</strong>
              </p>

              <p>
                <span className="el">Σάββατο - Κυριακή</span>
                <span className="en">Saturday - Sunday</span>
                <strong>05:00 - 15:00</strong>
              </p>

              <p>
                <span className="el">Τηλέφωνο</span>
                <span className="en">Phone</span>
                <strong>21 0814 1388</strong>
              </p>
            </div>

            <div className="visitActions" role="group" aria-label="Useful links">
              <a
                className="visitMapButton"
                href={mapUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span className="el">Οδηγίες στο Maps</span>
                <span className="en">Directions to Maps</span>
              </a>

              <a
                className="visitFacebookButton"
                href={facebookUrl}
                rel="noreferrer"
                target="_blank"
              >
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <figure className="visitShopPhoto">
            <img
              src="/rizos/shop-front.jpg"
              alt="Το κατάστημα ΡΙΖΟΣ στον Άγιο Στέφανο"
            />
          </figure>
        </div>
      </section>

      <section className="awardSection">
        <div className="awardCard">
          <a
            className="awardMainImage"
            href={listingUrl}
            rel="noreferrer"
            target="_blank"
            aria-label="Δες το βραβείο Χρυσή Εταιρεία"
          >
            <img src="/rizos/Award.png" alt="Βραβείο Χρυσή Εταιρεία" />
          </a>

          <div className="awardCopy">
            <p className="awardEyebrow">
              <span className="el">Χρυσή Εταιρεία 2026</span>
              <span className="en">Gold Company 2026</span>
            </p>
            <h2>
              <span className="el">Νικητής του βραβείου Χρυσή Εταιρεία</span>
              <span className="en">Gold Company Award Winner</span>
            </h2>
            <p className="awardBusiness">ΡΙΖΟΣ ΒΑΣΙΛΕΙΟΣ ΕΛΕΥΘΕΡΙΟΣ · Αγ. Στέφανος</p>
          </div>

          <div className="awardRating">
            <strong>4.5</strong>
            <span className="awardStars" aria-label="4.5 στα 5">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="awardStarHalf">★</span>
            </span>
            <span>
              <span className="el">215 αξιολογήσεις</span>
              <span className="en">215 reviews</span>
            </span>
          </div>

          <a
            className="awardMore"
            href={listingUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span className="el">Δες περισσότερα</span>
            <span className="en">View more</span>
          </a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactIntro">
          <p className="eyebrow">
            <span className="el">Επικοινωνία</span>
            <span className="en">Contact</span>
          </p>
          <h2>
            <span className="el">
              Καθημερινά από τις 5 το πρωί.
            </span>
            <span className="en">
              Daily from 5 in the morning.
            </span>
          </h2>
          <a className="contactCallButton" href="tel:+302108141388">
            <span className="el">Κάλεσέ μας · 21 0814 1388</span>
            <span className="en">Call us · 21 0814 1388</span>
          </a>
        </div>

        <div className="contactMeta">
          <span className="contactBrand">ΡΙΖΟΣ</span>
          <span>
            <span className="el">Λεωφ. Κρυονερίου 17, Άγιος Στέφανος 145 65</span>
            <span className="en">17 Kryoneriou Avenue, Agios Stefanos 145 65</span>
          </span>
          <span>
            <span className="el">Δευ-Παρ 05:00-20:00 · Σαβ-Κυρ 05:00-15:00</span>
            <span className="en">Mon-Fri 05:00-20:00 · Sat-Sun 05:00-15:00</span>
          </span>
        </div>
      </section>
    </main>
  );
}
