import React from "react";
import PropTypes from "prop-types";
import { useSession } from "next-auth/react";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import NextNProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import createEmotionCache from "../utility/createEmotionCache";
import lightTheme from "../styles/theme/lighttheme";
import Layout from "../components/common/Layout";
import { AppWrapper } from "../context/AppContext";
import "../styles/globals.css";
const clientSideEmotionCache = createEmotionCache();
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../utility/apollo";

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps: { session, ...pageProps },
}) {
  return (
    <CacheProvider value={emotionCache}>
      <NextNProgress />
      <AppWrapper>
        <ThemeProvider theme={lightTheme}>
          <ApolloProvider client={apolloClient}>
            <SessionProvider session={session}>
              <Head>
                <title>WayTern</title>
              </Head>
              <DefaultSeo
                openGraph={{
                  type: "website",
                  locale: "en_IE",
                  url: "https://www.whizit.co.in/",
                  site_name: "Whiz IT services",
                }}
                twitter={{
                  handle: "@vivek",
                  site: "@vivek",
                  cardType: "App is developed by Whiz IT",
                }}
              />
              <CssBaseline />
              {Component.auth ? (
                <Auth>
                  <div>
                    This is Auth
                    <Component {...pageProps} />
                  </div>
                </Auth>
              ) : (
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              )}
            </SessionProvider>
          </ApolloProvider>
        </ThemeProvider>
      </AppWrapper>
    </CacheProvider>
  );
}

export default MyApp;

function Auth({ children }) {
  const { data: session, status } = useSession({ required: true });
  const isUser = !!session?.user;

  // console.log("Testing >>>>>>>>> ")
  if (isUser) {
    // console.log("Testing....")
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
