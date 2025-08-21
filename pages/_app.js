import "../styles/globals.css";
import NavBar from "../Components/navbar";
import { Footer } from "../Components";
import { CrowdFundingProvider } from "../Context/CrowdFunding";
console.log("CrowdFundingProvider:", CrowdFundingProvider);


export default function App({ Component, pageProps }){
  return (
    <CrowdFundingProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </CrowdFundingProvider>
  );
}
