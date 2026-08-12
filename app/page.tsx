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
    textEnglish: "Cheese pies, pastries, and savory choices for something quick.",
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
      <input className="languageInput" id="lang-en" name="language" type="radio" />

      <header className="siteHeader" id="top">
        <a className="brand" href="#top" aria-label="ΜΠΟΥΓΑΤΣΟΠΩΛΕΙΟ ΡΙΖΟΣ">
          <span className="brandMark">Ρ</span>
          <span>ΜΠΟΥΓΑΤΣΟΠΩΛΕΙΟ ΡΙΖΟΣ</span>
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
            <img src="/rizos/shop-front.jpg" alt="Το κατάστημα ΡΙΖΟΣ στον Άγιο Στέφανο" />
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
            <span className="el">ΧΕΙΡΟΠΟΙΗΤΑ ΠΡΟΪΟΝΤΑ</span>
            <span className="en">HANDMADE PRODUCTS</span>
          </h2>
        </div>

        <div className="productMosaic" aria-label="Product showcase">
          {productShowcase.map((item) => (
            <article className={item.featured ? "mosaicCard featuredProduct" : "mosaicCard"} key={item.greek}>
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
          <p>
            <span className="el">
              Πέρασε για ζεστή μπουγάτσα και καφέ οποιαδήποτε στιγμή της ημέρας.
            </span>
            <span className="en">
              Stop by for warm bougatsa and coffee at any time of day.
            </span>
          </p>
          <a className="textLink" href={mapUrl} rel="noreferrer" target="_blank">
            <span className="el">Άνοιγμα οδηγιών στο Google Maps</span>
            <span className="en">Open directions in Google Maps</span>
          </a>
        </div>
        <div className="hours">
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
        <a href={listingUrl} rel="noreferrer" target="_blank">
          <span className="el">Καταχώριση επιχείρησης</span>
          <span className="en">Business listing</span>
        </a>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">
          <span className="el">Επικοινωνία</span>
          <span className="en">Contact</span>
        </p>
        <h2>
          <span className="el">Θες να ρωτήσεις τι μπουγάτσα υπάρχει τώρα;</span>
          <span className="en">Want to ask which bougatsa is available now?</span>
        </h2>
        <div className="actions centered">
          <a className="button primary" href="tel:+302108141388">
            21 0814 1388
          </a>
          <a className="button secondary" href={mapUrl} rel="noreferrer" target="_blank">
            <span className="el">Τοποθεσία</span>
            <span className="en">Location</span>
          </a>
        </div>
      </section>
    </main>
  );
}
