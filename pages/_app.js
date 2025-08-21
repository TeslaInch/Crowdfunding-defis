import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/navbar";
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
