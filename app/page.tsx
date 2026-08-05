const featuredItems = [
  {
    name: "Everyday Essentials",
    description: "Handy staples, gifts, and household favorites picked for daily life.",
  },
  {
    name: "Fresh Finds",
    description: "Seasonal items, small treats, and new arrivals rotating through the week.",
  },
  {
    name: "Friendly Service",
    description: "Quick help, simple recommendations, and a shop that remembers regulars.",
  },
];

const highlights = ["Local picks", "Gift-ready items", "Easy parking", "Open 7 days"];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Maple Market home">
            <span className="brandMark">M</span>
            Maple Market
          </a>
          <div className="navLinks">
            <a href="#featured">Featured</a>
            <a href="#visit">Visit</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="heroGrid" id="top">
          <div className="heroCopy">
            <p className="eyebrow">Neighborhood shop</p>
            <h1>Simple goods, warm service, right around the corner.</h1>
            <p className="intro">
              Maple Market is a friendly local shop for daily essentials,
              thoughtful gifts, snacks, home goods, and the little things that
              make errands feel easier.
            </p>
            <div className="actions">
              <a className="button primary" href="#visit">
                Plan a Visit
              </a>
              <a className="button secondary" href="tel:+15550141000">
                Call the Shop
              </a>
            </div>
          </div>

          <div className="shopCard" aria-label="Shop highlights">
            <div className="awning" />
            <div className="window">
              <span>Fresh</span>
              <span>Local</span>
              <span>Gifts</span>
              <span>Goods</span>
            </div>
            <div className="counter">
              <p>Today&apos;s picks</p>
              <strong>Fresh coffee, candles, pantry staples, greeting cards</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="strip" aria-label="Shop highlights">
        {highlights.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="section" id="featured">
        <div className="sectionHeader">
          <p className="eyebrow">What we carry</p>
          <h2>A little bit of everything useful.</h2>
        </div>
        <div className="featureGrid">
          {featuredItems.map((item) => (
            <article className="featureCard" key={item.name}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="visit" id="visit">
        <div>
          <p className="eyebrow">Stop by</p>
          <h2>Open daily for quick trips and relaxed browsing.</h2>
          <p>
            Visit us at 124 Maple Street. We&apos;re easy to find, easy to park
            near, and always happy to help you find what you need.
          </p>
        </div>
        <div className="hours">
          <h3>Hours</h3>
          <p>
            Monday - Friday <strong>8:00 AM - 7:00 PM</strong>
          </p>
          <p>
            Saturday - Sunday <strong>9:00 AM - 6:00 PM</strong>
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Questions?</p>
        <h2>Call ahead or come say hello.</h2>
        <p>
          Need to check if something is in stock? Give us a quick call and we
          will be glad to help.
        </p>
        <a className="button primary" href="tel:+15550141000">
          (555) 014-1000
        </a>
      </section>
    </main>
  );
}
