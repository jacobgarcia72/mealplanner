import Link from "next/link";

export default function MealsPage() {
  return (
    <div>
      <h1>My Meals</h1>
      <p>Welcome to my meals page!</p>
      {['breakfast', 'lunch', 'dinner'].map((meal) => (
        <div key={meal}>
          <Link href={`/meals/${meal}`}>{meal}</Link>
        </div>
      ))}
      <Link href="/meals/share">Share</Link>
    </div>
  );
}
