import Head from "next/head";
import Link from "next/link";

export default function Company() {
  return (
    <>
      <Head>
        <title>Hora de Codar(empresa)</title>
      </Head>
      <div>Empresa</div>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </>
  );
}
