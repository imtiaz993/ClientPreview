import "../styles/globals.css";
import Layout from "./Layout/Layout";

MyApp.getInitialProps = async () => {
  let headers = { Authorization: `Barear ${process.env.token}` };
  const res = await fetch("http://localhost:1337/api/headers", {
    headers: headers,
  });
  const headerLinks = await res.json();
  return { headerLinks };
};
function MyApp({ Component, pageProps, headerLinks }) {
  return (
    <Layout
      bgColor="bg-white"
      bgColor1="bg-lightGrey"
      bgColor2="bg-lightGrey"
      headerLinks={headerLinks}
    >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
