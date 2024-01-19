import React from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import Head from "next/head";

const fetchCharacter = async (characterId) => {
  await new Promise((r) => setTimeout(r, 2000));
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${characterId}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function Character({ character }) {
  const { query } = useRouter();
  const id = query.id;

  const { data, isLoading, error } = useQuery(
    ["character", id],
    () => fetchCharacter(id),
    {
      initialData: character,
    }
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error?.message}</div>;
  return (
    <main>
      <Head>
        <title>{data?.name} Profile </title>
      </Head>
      <div>
        <h1>{data?.name}</h1>
        <p>Status: {data?.status}</p>
        <p>Species: {data?.species}</p>
        <p>Gender: {data?.gender}</p>
        <p>Origin: {data?.origin.name}</p>
        <p>Location: {data?.location.name}</p>
        <img src={data?.image} alt={`${data?.name}`} />
      </div>
    </main>
  );
}

export const getServerSideProps = async (req) => {
  const id = req.query?.id;
  const data = await fetchCharacter(id);
  console.log("Server sided rendered: ");
  return { props: { character: { ...data, name: "Old Name" } } };
};
