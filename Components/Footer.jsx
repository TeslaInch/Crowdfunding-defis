const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = ["support@cryptoKing.com", "info@example.com", "Contact Us"];
  const UsefulLink = ["Home", "About us", "Company Bio"];

  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-16 lg:ml-24 py-10 text-center md:text-left">
        <div className="lg:ml-12 grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h6 className="mb-6 flex justify-center items-center font-semibold uppercase md:justify-start">
              CryptoKing
            </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus neque at ducimus quasi autem veritatis odit 
              eius dolore error asperiores. Alias natus similique eaque 
              non saepe dolores architecto eligendi! Et.
            </p>
          </div>

          <div>
            <h6 className="mb-6 flex justify-center items-center font-semibold uppercase md:justify-start">
              Product
            </h6>
            {productList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>

          <div>
            <h1 className="mb-6 flex justify-center items-center font-semibold uppercase md:justify-start">
              Useful Link
            </h1>
            {UsefulLink.map((el, i) => (
              <p key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>

          <div>
            <h1 className="mb-6 flex justify-center items-center font-semibold uppercase md:justify-start">
              Contact
            </h1>
            {contactList.map((el, i) => (
              <p key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="backgroundMain p-6 text-center">
        <span>
          <span className="px-2">{new Date().getFullYear()}</span>
          Copyright:
        </span>
        <a className="font-semibold px-1" href="https://tailwind-elements.com/">
          Comrade Dev
        </a>
      </div>
    </footer>
  );
};

export default Footer;
