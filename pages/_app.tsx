import "@styles/styles.scss";

import { useState } from "react";

import { CursorProvider } from "@components/Cursor/CursorProvider";
import { SmallNavbarContext } from "@lib/context";

export default function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SmallNavbarContext.Provider value={{ isOpen, setIsOpen }}>
      <CursorProvider>
        <Component {...pageProps} />
      </CursorProvider>
    </SmallNavbarContext.Provider>
  );
}
