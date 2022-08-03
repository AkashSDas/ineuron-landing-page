import "@styles/styles.scss";

import { useState } from "react";

import { CursorProvider } from "@components/Cursor/CursorProvider";
import { SearchModalContext, SmallNavbarContext } from "@lib/context";

export default function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchModalIsOpen, setSearchModalIsOpen] = useState(false);

  return (
    <SmallNavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <SearchModalContext.Provider
        value={{ searchModalIsOpen, setSearchModalIsOpen }}
      >
        <CursorProvider>
          <Component {...pageProps} />
        </CursorProvider>
      </SearchModalContext.Provider>
    </SmallNavbarContext.Provider>
  );
}
