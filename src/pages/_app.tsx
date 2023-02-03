import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { theme } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
