import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "./components/Feature";
import Grid from "./components/Grid";
import Page from "./components/Page";
import Teaser from "./components/Teaser";
import Layout from "./components/Layout";

export const links = () => [{ rel: "stylesheet", href: "./tailwind.css" }];

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
};

const apiOptions = {
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  region: "us",
};

storyblokInit({
  apiOptions,
  use: [apiPlugin],
  components,
});

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
};

export default App;
