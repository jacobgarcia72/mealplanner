import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: 'white', textAlign: 'center' }}>
        Time to get started!
      </h1>
      <Link href="/meals">Go to Meals</Link>
      <Link href="/community">Go to Community</Link>
    </main>
  );
}
