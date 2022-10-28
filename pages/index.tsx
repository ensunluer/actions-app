//@type-next
import { InferGetServerSidePropsType } from "next";
//next
import Head from "next/head";
//component
import { Dialog } from "../components/dialog";
import { Data, Home } from "../components/home";
import { Intro } from "../components/intro";
//hook
import { useContextHook } from "../context/Context";

export const getServerSideProps = async () => {
  const res = await fetch("https://cdn.mallconomy.com/testcase/actions.json");
  const data: Data[] = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default function HomePage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { isStarted } = useContextHook();
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>{isStarted ? <Home items={data} /> : <Intro />}</main>
    </div>
  );
}
