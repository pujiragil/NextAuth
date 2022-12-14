import Head from "next/head";

export default function Home() {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <Head>
        <title>Home</title>
      </Head>
      <h1 className="text-3xl font-semibold">Welcome to Home Page</h1>
    </div>
  )
}
