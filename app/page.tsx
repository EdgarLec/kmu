import Component from "../components/test";

export default function Page() {
  return <>
  <head>
    <link rel="manifest" href="/manifest.json"/>
    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <link rel="apple-touch-icon" href="/icons/icon-192.png"/>
  </head>
  <Component />
  </>
}
