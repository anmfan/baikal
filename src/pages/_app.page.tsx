import type { AppProps } from "next/app";
import { UIProvider } from "@itcase/ui/context/UIContext";
import BasePageWrapper from '@itcase/next/providers/BasePageWrapper'

import "src/styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <BasePageWrapper>
        <Component {...pageProps} />
      </BasePageWrapper>
    </UIProvider>
  );
}
