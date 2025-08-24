import "../styles/globals.css";
import Footer from "../Components/Footer.jsx";
import Navbar from "../Components/Navbar.jsx";
import { CrowdFundingProvider } from "../Context/CrowdFunding";
// console.log("CrowdFundingProvider:", CrowdFundingProvider);


export default function App({ Component, pageProps }){
  return (
    <CrowdFundingProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </CrowdFundingProvider>
  );
}
