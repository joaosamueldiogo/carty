import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-4 md:px-8 gap-4 md:gap-8 py-4 border-t border-b border-gray-500/30 bg-background text-foreground">
        <div className="flex flex-col flex-2 gap-2 md:gap-4 items-start justify-start md:justify-center">
          <Link href={"/"}>
            <h1 className="font-bold">Carty</h1>
          </Link>
          <p className="text-sm">
            We are dedicated to providing the best service possible. Our team is
            committed to ensuring your satisfaction with every interaction. If
            you have any questions or concerns, please don&apos;t hesitate to
            reach out to us. We are here to help and will do our best to address
            any issues you may have. Thank you for choosing us, and we look
            forward to serving you again in the future.
          </p>
        </div>

        <div className="flex flex-1 flex-col gap-2 md:gap-4 items-start justify-start md:justify-center">
          <h2 className="font-medium text-primary">Company</h2>
          <ul className="text-sm space-y-1">
            <li>
              <Link className="hover:underline transition" href="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="hover:underline transition" href="/about">
                About us
              </Link>
            </li>

            <li>
              <Link className="hover:underline transition" href="/contact">
                Contact us
              </Link>
            </li>

            <li>
              <Link className="hover:underline transition" href="/privacy">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-1 flex-col items-start gap-2 md:gap-4 justify-start md:justify-center">
          <h2 className="font-medium text-primary">Get in touch</h2>
          <div className="text-sm space-y-1">
            <p>+2348138502791</p>
            <p>contact@Eldics.dev </p>
          </div>
        </div>
      </div>
      <p className="py-2 text-center text-xs md:text-sm">
        Copyright 2026 © No Meio de Nós
      </p>
    </footer>
  );
}
