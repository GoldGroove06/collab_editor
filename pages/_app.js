import "../styles/globals.css";
import "@radui/ui/themes/default.css";
import { Toaster } from "react-hot-toast";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Theme>
      <div>
        <Toaster position="top-center" />
      </div>
      <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
