import LiquidEther from "@/components/LiquidEther";

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
        <span className="cinnamonWord">κανέλα</span>
      </>
    ),
    textGreek: "Η κλασική επιλογή που μυρίζει πρωινό.",
    textEnglish: "The classic breakfast-style finish.",
  },
  {
    greek: "Πραλίνα σοκολάτα",
    english: "Chocolate praline",
    title: (
      <>
        <span className="pralineWord">Πραλίνα</span>{" "}
        <span className="chocolateWord">σοκολάτα</span>
      </>
    ),
    textGreek: "Για όσους θέλουν τη μπουγάτσα πιο πλούσια και γλυκιά.",
    textEnglish: "For a richer, sweeter bougatsa.",
  },
  {
    greek: "Μπουγάτσα με τυρί",
    english: "Cheese bougatsa",
    title: (
      <>
        <span className="creamWord">Μπουγάτσα με</span>{" "}
        <span className="cheeseWord">τυρί</span>
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
    textGreek: "Κρεμώδης topping επιλογή για πιο μοντέρνα γεύση.",
    textEnglish: "A creamy topping for a more modern sweet bite.",
  },
];

const productShowcase = [
  {
    greek: "Μπουγάτσα σοκολάτα",
    english: "Chocolate bougatsa",
    textGreek: "Η σπεσιαλιτέ μας.",
    textEnglish: "Our specialty.",
    image: "/rizos/sweet-bougatsa.jpg",
    alt: "Μπουγάτσα σοκολάτα",
    featured: true,
  },
  {
    greek: "Κλασική μπουγάτσα",
    english: "Classic bougatsa",
    textGreek: "Τραγανό φύλλο, ζεστή βιτρίνα, καθημερινή επιλογή.",
    textEnglish: "Crisp pastry, warm counter, everyday choice.",
    image: "/rizos/bougatsa-tray.jpg",
    alt: "Κλασικές μπουγάτσες στη βιτρίνα",
  },
  {
    greek: "Τυροπιτοειδή & σφολιάτες",
    english: "Cheese pies & pastries",
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
    greek: "Πίτσα ατομική",
    english: "Individual pizza",
    textGreek: "Αφράτη πίτσα με τυρί, αλλαντικά και πιπεριές.",
    textEnglish: "Soft individual pizza with cheese, cold cuts, and peppers.",
    image: "/rizos/pizza-warm-background.png",
    alt: "Ατομική πίτσα σε ζεστό φόντο αρτοποιείου",
  },
  {
    greek: "Καφές",
    english: "Coffee",
    textGreek: "Freddo espresso, freddo cappuccino, cappuccino και άλλα.",
    textEnglish: "Freddo espresso, freddo cappuccino, cappuccino, and more.",
    image: "/rizos/coffee-clean.png",
    alt: "Καφές ΡΙΖΟΣ",
    wide: true,
  },
];

export default function Home() {
  return (
    <main className="pageShell">
      <input
        className="languageInput"
        id="lang-el"
        name="language"
        type="radio"
        defaultChecked
      />
      <input
        className="languageInput"
        id="lang-en"
        name="language"
        type="radio"
      />

      <header className="siteHeader" id="top">
        <a className="brand" href="#top" aria-label="ΜΠΟΥΓΑΤΣΟΠΩΛΕΙΟ ΡΙΖΟΣ">
          <span className="brandMark">Ρ</span>
          <span className="brandName">ΜΠΟΥΓΑΤΣΟΠΩΛΕΙΟ ΡΙΖΟΣ</span>
        </a>

        <nav className="nav" aria-label="Main navigation">
          <div className="navLinks">
            <a href="#products">
              <span className="el">Προϊόντα</span>
              <span className="en">Products</span>
            </a>
            <a href="#story">
              <span className="el">Το μαγαζί</span>
              <span className="en">The shop</span>
            </a>
            <a href="#visit">
              <span className="el">Τοποθεσία</span>
              <span className="en">Location</span>
            </a>
            <a href="#contact">
              <span className="el">Επικοινωνία</span>
              <span className="en">Contact</span>
            </a>
          </div>
          <div className="languageToggle" aria-label="Language">
            <label htmlFor="lang-el">EL</label>
            <label htmlFor="lang-en">EN</label>
          </div>
        </nav>
      </header>

      <section className="hero bougatsaHero">
        <p className="eyebrow heroKicker">
          <span className="el">Άγιος Στέφανος · ανοιχτώ όλο το 24ωρο</span>
          <span className="en">Agios Stefanos · open 24 hours</span>
        </p>
        <div className="heroLayout">
          <div className="heroIntro">
            <h1>
              <span className="el">Ο μάστορας της μπουγάτσας.</span>
              <span className="en">The master of bougatsa.</span>
            </h1>
          </div>

          <figure className="shopHeroPhoto">
            <div className="shopPhotoCarousel">
              <img
                className="shopPhotoSlide"
                src="/rizos/shop-front.jpg"
                alt="Το κατάστημα ΡΙΖΟΣ στον Άγιο Στέφανο"
              />
              <img
                className="shopPhotoSlide"
                src="/rizos/shop-front-night.jpg"
                alt="Το κατάστημα ΡΙΖΟΣ φωτισμένο το βράδυ"
              />
            </div>
            <figcaption>
              <span className="el">Το κατάστημα</span>
              <span className="en">The shop</span>
            </figcaption>
          </figure>
        </div>

        <div className="actions centered">
          <a className="button primary" href="#products">
            <span className="el">Δες τα προϊόντα</span>
            <span className="en">See products</span>
          </a>
        </div>
      </section>

      <section className="section productShowcase" id="products">
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
              className={`mosaicCard${item.featured ? " featuredProduct" : ""}${item.wide ? " coffeeProduct" : ""}`}
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
      </section>

      <section className="section toppingsSection">
        <div className="sectionHeader showcaseHeader">
          <h2>
            <span className="el">ΕΠΙΛΟΓΕΣ ΜΠΟΥΓΑΤΣΑΣ</span>
            <span className="en">BOUGATSA OPTIONS</span>
          </h2>
        </div>
        <div className="toppingChocolateCutout" aria-hidden="true">
          <LiquidEther
            mouseForce={20}
            cursorSize={24}
            isViscous
            viscous={40}
            iterationsViscous={32}
            iterationsPoisson={32}
            dt={0.014}
            BFECC
            resolution={1}
            isBounce={false}
            colors={["#240803", "#54180A", "#91401F"]}
            autoDemo
            autoSpeed={0.3}
            autoIntensity={1.5}
          />
        </div>
        <figure
          className="toppingBuenoCutout toppingBuenoTopLeft"
          aria-hidden="true"
        >
          <img src="/rizos/bueno-chocolate-hard.png" alt="" />
        </figure>
        <figure
          className="toppingBuenoCutout toppingBuenoBottomRight"
          aria-hidden="true"
        >
          <img src="/rizos/bueno-chocolate-hard.png" alt="" />
        </figure>
        <div className="bougatsaMenu compactToppings">
          {bougatsaOptions.map((item) => (
            <article className="bougatsaOption" key={item.greek}>
              <span className="optionDot" aria-hidden="true" />
              <div>
                <h3>
                  <span className="el">{item.title}</span>
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
      </section>

      <section className="storyBand" id="story">
        <p>
          <span className="el">
            Ζεστή μπουγάτσα στον Άγιο Στέφανο, με λειτουργία όλο το 24ωρο.
          </span>
          <span className="en">
            Warm bougatsa in Agios Stefanos, open around the clock.
          </span>
        </p>
      </section>

      <section className="visit" id="visit">
        <div>
          <p className="eyebrow">
            <span className="el">Βρες το κατάστημα</span>
            <span className="en">Find the shop</span>
          </p>
          <h2>
            <span className="el">Λεωφ. Κρυονερίου 17, Άγιος Στέφανος.</span>
            <span className="en">17 Kryoneriou Avenue, Agios Stefanos.</span>
          </h2>
        </div>
        <div className="hours visitHoursOverlay">
          <h3>
            <span className="el">Ωράριο</span>
            <span className="en">Hours</span>
          </h3>

          <p>
            <span className="el">Κάθε μέρα</span>
            <span className="en">Every day</span>
            <strong>24 ώρες / 24 hours</strong>
          </p>

          <p>
            <span className="el">Τηλέφωνο</span>
            <span className="en">Phone</span>
            <strong>21 0814 1388</strong>
          </p>
        </div>
      </section>

      <section className="linksBand" aria-label="Useful links">
        <a href={mapUrl} rel="noreferrer" target="_blank">
          <span className="el">Οδηγίες στο Google Maps</span>
          <span className="en">Directions on Google Maps</span>
        </a>

        <a href={facebookUrl} rel="noreferrer" target="_blank">
          <span className="el">Σελίδα στο Facebook</span>
          <span className="en">Facebook page</span>
        </a>
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
            <div className="awardDetailsCard">
              <h2>
                <span className="el">Νικητής του βραβείου Χρυσή Εταιρεία</span>
                <span className="en">Gold Company Award Winner</span>
              </h2>
              <h3>ΡΙΖΟΣ ΒΑΣΙΛΕΙΟΣ ΕΛΕΥΘΕΡΙΟΣ</h3>

              <div className="awardTopStats">
                <div className="awardTopStat">
                  <div className="awardTopIcon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2.5l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.3l-5.8 3.1 1.1-6.5-4.7-4.6 6.5-.9L12 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <strong>4.5 / 215</strong>
                    <span>
                      <span className="el">Αξιολογήσεις</span>
                      <span className="en">Reviews</span>
                    </span>
                  </div>
                </div>

                <div className="awardTopStat">
                  <div className="awardTopIcon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        d="M12 21s7-6.1 7-12a7 7 0 1 0-14 0c0 5.9 7 12 7 12z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.4"
                      />
                      <circle cx="12" cy="9" r="2.4" />
                    </svg>
                  </div>
                  <div>
                    <strong>
                      <span className="el">Αγ. Στέφανος</span>
                      <span className="en">Agios Stefanos</span>
                    </strong>

                    <span>
                      <span className="el">Λεωφ. Κρυονερίου 17</span>
                      <span className="en">17 Kryoneriou Avenue</span>
                    </span>
                  </div>
                </div>

                <div className="awardTopStat">
                  <div className="awardTopIcon awardShieldIcon">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2L4 5v6c0 5.1 3.4 9.7 8 11 4.6-1.3 8-5.9 8-11V5l-8-3z" />

                      <path
                        d="M8.5 11.8l2.2 2.2 4.8-5"
                        fill="none"
                        stroke="#202e39"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div>
                    <strong>
                      <span className="el">Ημερομηνία Σάρωσης:</span>
                      <span className="en">Scan Date:</span>
                    </strong>

                    <span>May 23, 2026</span>
                  </div>
                </div>
              </div>

              <div className="awardScorePanel">
                <div className="awardScoreLeft">
                  <p className="awardScoreLabel">
                    <span className="el">Τελική Βαθμολογία</span>
                    <span className="en">Final Rating</span>
                  </p>
                  <div className="awardScoreValue">4.5</div>

                  <div className="awardStars" aria-label="4.5 στα 5">
                    <span className="filled">★</span>
                    <span className="filled">★</span>
                    <span className="filled">★</span>
                    <span className="filled">★</span>
                    <span className="empty">★</span>
                  </div>

                  <p className="awardScoreTotal">
                    <span className="el">Συνολικός αριθμός βαθμολογιών:</span>
                    <span className="en">Total number of ratings:</span>
                    <strong>215</strong>
                  </p>
                </div>

                <div className="awardScoreRight">
                  <p className="awardScoreLabel">
                    <span className="el">
                      Με βάση 215 αξιολογήσεις από πλατφόρμες:
                    </span>
                    <span className="en">
                      Based on 215 reviews from platforms:
                    </span>
                  </p>

                  <div className="awardPlatform">
                    <div className="awardPlatformMeta">
                      <span className="awardPlatformCount">209</span>
                      <span className="awardPlatformStar">★</span>
                      <span className="awardPlatformName">GoogleMaps</span>
                    </div>
                    <div className="awardBar">
                      <div className="awardBarFill" style={{ width: "97%" }} />
                    </div>
                  </div>

                  <div className="awardPlatform">
                    <div className="awardPlatformMeta">
                      <span className="awardPlatformCount">6</span>
                      <span className="awardPlatformStar">★</span>
                      <span className="awardPlatformName">
                        restaurantguru.com
                      </span>
                    </div>
                    <div className="awardBar">
                      <div className="awardBarFill" style={{ width: "12%" }} />
                    </div>
                  </div>
                </div>
              </div>
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
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">
          <span className="el">Επικοινωνία</span>
          <span className="en">Contact</span>
        </p>
        <h2>
          <span className="el">Θες να ρωτήσεις τι μπουγάτσα υπάρχει τώρα;</span>
          <span className="en">
            Want to ask which bougatsa is available now?
          </span>
        </h2>
        <div className="actions centered">
          <a className="button primary" href="tel:+302108141388">
            21 0814 1388
          </a>
          <a
            className="button secondary"
            href={mapUrl}
            rel="noreferrer"
            target="_blank"
          >
            <span className="el">Τοποθεσία</span>
            <span className="en">Location</span>
          </a>
        </div>
      </section>
    </main>
  );
}
