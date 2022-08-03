import "@styles/styles.scss";

import { CursorProvider } from "@components/Cursor/CursorProvider";

export default function MyApp({ Component, pageProps }) {
  return (
    <CursorProvider>
      <Component {...pageProps} />
    </CursorProvider>
  );
}
