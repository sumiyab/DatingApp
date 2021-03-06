import Head from "next/head";

import Link from "next/link";
import { fetchEntries } from "../lib/contentfulApi";
import Article from "../component/article";
import SuggestCard from "../component/card";

import "tailwindcss/tailwind.css";
import "antd/dist/antd.css";
import CardList from "../component/CardList";
import Toolbar from "../component/Toolbar";
import AutoCarousel from "../component/AutoCarousel";
import Card from "../component/Card";

export default function Home({ posts }) {
  const dataForArticle = posts.filter((post) => post.category == "article");
  const dataForCard = posts.filter((post) => post.category == "card");
  const dataForBanner = posts.filter((post) => post.category == "banner");
  return (
    <div>
      <Toolbar tagsData={["Bars", "Pubs", "Clubs", "Restaurants", "Gift"]} />
      <AutoCarousel bannerData={dataForBanner} />
      <div class="min-h-screen flex justify-center items-center py-20">
        <div class="container mx-auto p-12 bg-gray-100 rounded-xl">
          <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
            {dataForArticle?.map((p) => {
              return <Article data={p} />;
            })}
          </div>
        </div>
      </div>
      <CardList
        listData={dataForCard}
        // listData={[
        //   { img: "", title: "0", rate: 3 },
        //   { img: "", title: "1", rate: 3 },
        //   { img: "", title: "2", rate: 3 },
        //   { img: "", title: "3", rate: 3 },
        //   { img: "", title: "4", rate: 3 },
        //   { img: "", title: "5", rate: 3 },
        //   { img: "", title: "6", rate: 3 },
        //   { img: "", title: "7", rate: 3 },
        //   { img: "", title: "8", rate: 3 },
        //   { img: "", title: "9", rate: 3 },
        //   { img: "", title: "10", rate: 3 },
        // ]}
      />
    </div>
  );
}
// export default function Home({ posts }) {
//   return (
//     <div className="container">
//       <div>{posts.map((p)=>{
//         return(
//           <p key=''>{p.title}</p>
//         )
//       })}</div>
//       <Article></Article>
//       <Article></Article>
//       <Card/>

//       <style jsx>{`
//         .container {
//           min-height: 100vh;
//           padding: 0 0.5rem;
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//         }

//         main {
//           padding: 5rem 0;
//           flex: 1;
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//         }

//         footer {
//           width: 100%;
//           height: 100px;
//           border-top: 1px solid #eaeaea;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         footer img {
//           margin-left: 0.5rem;
//         }

//         footer a {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         a {
//           color: inherit;
//           text-decoration: none;
//         }

//         .title a {
//           color: #0070f3;
//           text-decoration: none;
//         }

//         .title a:hover,
//         .title a:focus,
//         .title a:active {
//           text-decoration: underline;
//         }

//         .title {
//           margin: 0;
//           line-height: 1.15;
//           font-size: 4rem;
//         }

//         .title,
//         .description {
//           text-align: center;
//         }

//         .description {
//           line-height: 1.5;
//           font-size: 1.5rem;
//         }

//         code {
//           background: #fafafa;
//           border-radius: 5px;
//           padding: 0.75rem;
//           font-size: 1.1rem;
//           font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//             DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//         }

//         .grid {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           flex-wrap: wrap;

//           max-width: 800px;
//           margin-top: 3rem;
//         }

//         .card {
//           margin: 1rem;
//           flex-basis: 45%;
//           padding: 1.5rem;
//           text-align: left;
//           color: inherit;
//           text-decoration: none;
//           border: 1px solid #eaeaea;
//           border-radius: 10px;
//           transition: color 0.15s ease, border-color 0.15s ease;
//         }

//         .card:hover,
//         .card:focus,
//         .card:active {
//           color: #0070f3;
//           border-color: #0070f3;
//         }

//         .card h3 {
//           margin: 0 0 1rem 0;
//           font-size: 1.5rem;
//         }

//         .card p {
//           margin: 0;
//           font-size: 1.25rem;
//           line-height: 1.5;
//         }

//         .logo {
//           height: 1em;
//         }

//         @media (max-width: 600px) {
//           .grid {
//             width: 100%;
//             flex-direction: column;
//           }
//         }
//       `}</style>

//       <style jsx global>{`
//         html,
//         body {
//           padding: 0;
//           margin: 0;
//           font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//             sans-serif;
//         }

//         * {
//           box-sizing: border-box;
//         }
//       `}</style>
//     </div>
//   );
// }
// export default function Home({ posts }) {
//   return (
//     //   <div className="container">
//     //     <div>
//     //       {posts.map((p) => {
//     //         return <p key="">{p.title}</p>;
//     //       })}
//     //     </div>

//     //     <h1 className="title">
//     //       Read{" "}
//     //       <Link href="/posts/first-post">
//     //         <a>this page!</a>
//     //       </Link>
//     //     </h1>
//     //     <Head>
//     //       <title>Create Next App</title>
//     //       <link rel="icon" href="/favicon.ico" />
//     //     </Head>

//     //     <footer>
//     //       <a
//     //         href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //       >
//     //         Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
//     //       </a>
//     //     </footer>

//     //     <style jsx>{`
//     //       .container {
//     //         min-height: 100vh;
//     //         padding: 0 0.5rem;
//     //         display: flex;
//     //         flex-direction: column;
//     //         justify-content: center;
//     //         align-items: center;
//     //       }

//     //       main {
//     //         padding: 5rem 0;
//     //         flex: 1;
//     //         display: flex;
//     //         flex-direction: column;
//     //         justify-content: center;
//     //         align-items: center;
//     //       }

//     //       footer {
//     //         width: 100%;
//     //         height: 100px;
//     //         border-top: 1px solid #eaeaea;
//     //         display: flex;
//     //         justify-content: center;
//     //         align-items: center;
//     //       }

//     //       footer img {
//     //         margin-left: 0.5rem;
//     //       }

//     //       footer a {
//     //         display: flex;
//     //         justify-content: center;
//     //         align-items: center;
//     //       }

//     //       a {
//     //         color: inherit;
//     //         text-decoration: none;
//     //       }

//     //       .title a {
//     //         color: #0070f3;
//     //         text-decoration: none;
//     //       }

//     //       .title a:hover,
//     //       .title a:focus,
//     //       .title a:active {
//     //         text-decoration: underline;
//     //       }

//     //       .title {
//     //         margin: 0;
//     //         line-height: 1.15;
//     //         font-size: 4rem;
//     //       }

//     //       .title,
//     //       .description {
//     //         text-align: center;
//     //       }

//     //       .description {
//     //         line-height: 1.5;
//     //         font-size: 1.5rem;
//     //       }

//     //       code {
//     //         background: #fafafa;
//     //         border-radius: 5px;
//     //         padding: 0.75rem;
//     //         font-size: 1.1rem;
//     //         font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
//     //           DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
//     //       }

//     //       .grid {
//     //         display: flex;
//     //         align-items: center;
//     //         justify-content: center;
//     //         flex-wrap: wrap;

//     //         max-width: 800px;
//     //         margin-top: 3rem;
//     //       }

//     //       .card {
//     //         margin: 1rem;
//     //         flex-basis: 45%;
//     //         padding: 1.5rem;
//     //         text-align: left;
//     //         color: inherit;
//     //         text-decoration: none;
//     //         border: 1px solid #eaeaea;
//     //         border-radius: 10px;
//     //         transition: color 0.15s ease, border-color 0.15s ease;
//     //       }

//     //       .card:hover,
//     //       .card:focus,
//     //       .card:active {
//     //         color: #0070f3;
//     //         border-color: #0070f3;
//     //       }

//     //       .card h3 {
//     //         margin: 0 0 1rem 0;
//     //         font-size: 1.5rem;
//     //       }

//     //       .card p {
//     //         margin: 0;
//     //         font-size: 1.25rem;
//     //         line-height: 1.5;
//     //       }

//     //       .logo {
//     //         height: 1em;
//     //       }

//     //       @media (max-width: 600px) {
//     //         .grid {
//     //           width: 100%;
//     //           flex-direction: column;
//     //         }
//     //       }
//     //     `}</style>

//     //     <style jsx global>{`
//     //       html,
//     //       body {
//     //         padding: 0;
//     //         margin: 0;
//     //         font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
//     //           Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
//     //           sans-serif;
//     //       }

//     //       * {
//     //         box-sizing: border-box;
//     //       }
//     //     `}</style>
//     //   </div>
//   );
// }
//this function will create quer
export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
