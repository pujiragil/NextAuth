import { poppins } from "../fonts";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
