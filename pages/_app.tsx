import "@styles/styles.scss";

import Head from "next/head";
import { useState } from "react";

import { CursorProvider } from "@components/Cursor/CursorProvider";
import { SearchModalContext, SmallNavbarContext } from "@lib/context";

export default function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false);

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📺</text></svg>"
        />

        <title>iNeuron</title>
      </Head>

      <SmallNavbarContext.Provider value={{ isOpen, setIsOpen }}>
        <SearchModalContext.Provider
          value={{ searchModalIsOpen, setSearchModalIsOpen }}
        >
          <CursorProvider>
            <Component {...pageProps} />
          </CursorProvider>
        </SearchModalContext.Provider>
      </SmallNavbarContext.Provider>
    </>
  );
}
