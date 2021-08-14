import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from 'styles/base';
import 'styles/modules/grid.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
