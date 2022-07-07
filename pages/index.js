import Results from "../components/Results";
import Head from 'next/head'
import Header from "../components/Header";
import Nav from "../components/Nav";
import requests from '../utils/requests';

export default function Home({ results }){
  console.log(results)
  return (
    <div className="">
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" src="https://links.papareact.com/ua6" />
      </Head>

      {/* Header */}
      <Header />

      {/* Nav */}
      <Nav   />

      <Results results={results}/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}
