import "../styles/globals.css";
import Layout from "./Layout/Layout";
import delve from "dlv";
MyApp.getInitialProps = async () => {
  const res1 = await fetch(delve({data: `http://localhost:1337/api/footers?populate=*&authorization=Barear ${process.env.token}`}, "data"));
  const headerLinks = await res1.json();
  const res2 = await fetch(delve({data: `http://localhost:1337/api/headers?populate=*&authorization=Barear ${process.env.token}`}, "data"));
  const footerLinks = await res2.json();
  return { headerLinks,footerLinks };
};
function MyApp({ Component, pageProps, headerLinks,footerLinks }) {
  return (
    <Layout
      bgColor="bg-white"
      bgColor1="bg-lightGrey"
      bgColor2="bg-lightGrey"
      headerLinks={headerLinks}
      footerLinks={footerLinks}
    >
    
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
