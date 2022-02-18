import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-slate-900">
      <ul className="flex flex-row justify-center space-x-12 pt-4 pb-10">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/todos">
            <a>Todos</a>
          </Link>
        </li>
        <li>
          <Link href="/products">
            <a>Produtos</a>
          </Link>
        </li>
        <li>
          <Link href="/company">
            <a>Empresa</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>Sobre</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
