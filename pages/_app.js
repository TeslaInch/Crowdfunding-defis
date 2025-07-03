import "../styles/globals.css";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

// ✅ Make sure this import path is correct!
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
