// NEXT
import Link from "next/link";

export default function HomePage() {
  console.log("SERVER COMPONENT!");

  return (
    <div>
      <h1 className="text-5xl mb-8 font-bold">Home</h1>
      <Link href="/client" className="btn btn-accent">
        Get Started
      </Link>
    </div>
  );
}

// 28
