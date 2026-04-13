import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <section className='pt-40 pb-32 px-12.5 mx-auto text-center'>
      <p className='font-serif text-[100px] md:text-[140px] text-foreground/5 leading-none'>
        404
      </p>
      <h1 className='font-serif text-3xl text-foreground mt-4'>
        Page not found
      </h1>
      <p className='text-[15px] text-muted-foreground mt-3 max-w-[360px] mx-auto'>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href='/'
        className='inline-block mt-8 text-[13px] font-medium bg-foreground text-primary-foreground px-7 py-3 rounded-full hover:bg-foreground/90 transition-colors'>
        Back to home
      </Link>
    </section>
  );
}
