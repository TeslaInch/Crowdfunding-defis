import "../styles/globals.css";
import Navbar from "../Components/navbar";
import { Footer } from "../Components";
import { CrowdFundingProvider } from "../Context/CrowdFunding";
console.log("CrowdFundingProvider:", CrowdFundingProvider);


export default function App({ Component, pageProps }){
  return (
    <CrowdFundingProvider>
      <Navbar/>
      <Component {...pageProps} />
      <Footer />
    </CrowdFundingProvider>
  );
}
