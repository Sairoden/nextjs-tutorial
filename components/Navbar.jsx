// NEXT
import Link from "next/link";

export default function Navbar() {
  const links = [
    {
      href: "/client",
      label: "client",
    },
    {
      href: "/drinks",
      label: "drinks",
    },
    {
      href: "/query",
      label: "query",
    },
    {
      href: "/tasks",
      label: "tasks",
    },
  ];

  return (
    <nav className="bg-base-300 py-4">
      <div className="navbar px-8 max-w-2xl mx-auto flex-col sm:flex-row">
        <Link href="/" className="btn btn-primary">
          Home
        </Link>

        <ul className="menu menu-horizontal md:ml-8">
          {links.map(link => (
            <li key={link.href}>
              <Link className="capitalize" href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
