import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../layout/layout";
import styles from "../styles/Form.module.css";
import { HiAtSymbol, HiFingerPrint } from "react-icons/hi";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        {/* title */}
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="email"
              name="email"
              placeholder="Email"
            />
            <span className="icon flex items-center px-4">
              <HiAtSymbol size={25} />
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              className={styles.input_text}
              type="password"
              name="password"
              placeholder="Password"
            />
            <span className="icon flex items-center px-4">
              <HiFingerPrint size={25} />
            </span>
          </div>
          {/* Login Button  */}
          <div className="input-button">
            <button className={styles.button} type="submit">
              Login
            </button>
          </div>
          <div className="input-button">
            <button className={styles.button_custom} type="button">
              Sign in with Google
              <Image
                src={"/assets/google.svg"}
                width="20"
                height="20"
                alt="icon"
              />
            </button>
          </div>
          <div className="input-button">
            <button className={styles.button_custom} type="button">
              Sign in with Github
              <Image
                src={"/assets/github.svg"}
                width="25"
                height="25"
                alt="icon"
              />
            </button>
          </div>
        </form>

        {/* bottom */}
        <p className="text-center text-gray-400">
          don't have account yet?{" "}
          <Link href={"/register"} legacyBehavior>
            <a className="text-blue-700">Sign Up</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
}
