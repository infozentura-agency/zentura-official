"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/zentura/Button";
import { reportLovableError } from "@/lib/lovable-error-reporting";

export default function ErrorComponent({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    reportLovableError(error, { boundary: "next_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-h2 text-ink">
          This page didn't load
        </h1>
        <p className="mt-4 text-body text-ink-secondary">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button
            onClick={() => {
              reset();
            }}
          >
            Try again
          </Button>
          <Link href="/" className="inline-flex min-h-7 items-center justify-center rounded-control bg-inverse px-3 py-1 font-mono text-[10px] text-ink-inverse">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
