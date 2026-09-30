import Link from "next/link";

export default function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="text-label text-ink-muted">404</p>
        <h1 className="mt-4 text-display text-ink">Page not found</h1>
        <p className="mt-4 text-body text-ink-secondary">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link href="/" className="font-mono text-label text-ink underline underline-offset-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-strong">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
