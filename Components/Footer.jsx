import Link from "next/link";

const Footer = () => {
  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    { text: "support@crowdfunding.com", href: "mailto:support@cryptoKing.com" },
    { text: "info@crowdfunding.com", href: "mailto:info@crowdfunding.com" },
    { text: "Contact Us", href: "/contact" },
  ];
  const usefulLinks = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Company Bio", href: "/company" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <h6 className="mb-4 text-lg font-bold uppercase tracking-wide">
              CrowFunding
            </h6>
            <p className="text-sm text-gray-400 leading-relaxed">
              Empowering decentralized funding with cutting-edge blockchain
              technology. Join us to support innovative projects worldwide.
            </p>
          </div>

          {/* Product Section */}
          <div>
            <h6 className="mb-4 text-lg font-bold uppercase tracking-wide">
              Product
            </h6>
            {productList.map((el, i) => (
              <p key={i} className="mb-2">
                <Link
                  href={`#${el.toLowerCase()}`}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {el}
                </Link>
              </p>
            ))}
          </div>

          {/* Useful Links Section */}
          <div>
            <h6 className="mb-4 text-lg font-bold uppercase tracking-wide">
              Useful Links
            </h6>
            {usefulLinks.map((el, i) => (
              <p key={i} className="mb-2">
                <Link
                  href={el.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {el.text}
                </Link>
              </p>
            ))}
          </div>

          {/* Contact Section */}
          <div>
            <h6 className="mb-4 text-lg font-bold uppercase tracking-wide">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p key={i} className="mb-2">
                <Link
                  href={el.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  {el.text}
                </Link>
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-black py-6 text-center text-gray-400">
        <span>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link
            href="https://tailwind-elements.com/"
            className="font-semibold text-blue-400 hover:text-blue-500 transition-colors duration-200"
          >
            Comrade Dev
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer