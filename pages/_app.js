import "../styles/globals.css";
import Footer from "../Components/Footer"
import Navbar from "../Components/Navbar";
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
