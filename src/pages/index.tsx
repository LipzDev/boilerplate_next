import React, { useState } from "react";
import { initializeApollo } from "../graphql/client";
import { QUERY_GET_CONTENT } from "../graphql/queries/content";
import Layout from "../components/Layout";
import Link from "next/link";

const Home = (props: any) => {
  return <Layout>// CONTEUDO //</Layout>;
};

export default Home;

// USE WHEN YOU HAVE ANY API TO CONSUME WITH GRAPHQL

// export const getStaticProps = async () => {
//   const apolloClient = initializeApollo()

//   const { data: contentData } = await apolloClient.query({
//     query: QUERY_GET_CONTENT,
//   })

//   return {
//     props: {
//       content: contentData,
//     },
//     revalidate: 60,
//   }
// }
