import React, { useEffect} from "react";
import Header from '~/components/App/Header';
import Footer from '~/components/App/Footer';
function App(props) {

  return (
    <>
      <div>
        <Header/>
        <main role="main">
        {props.children}
        </main>
        <Footer/>
    </div>
    </>
  );
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://.../posts')
    const posts = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }

export default App;
