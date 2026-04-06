'use client';

export default function Error({ error }) {
    return (
        <main className="error">
            <h1>An error occurred!</h1>
            <p>Failed to share meal data. Try again later.</p>
        </main>
    )
}
