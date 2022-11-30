import Head from "next/head";
import Layout from "../layout/layout";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <h1 className="text-3xl font-semibold">Login Page</h1>
    </Layout>
  );
}
