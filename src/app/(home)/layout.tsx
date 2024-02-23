import React, { Suspense } from "react";
import Nav from "./_components/nav";

export default function HomeLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <main className="flex w-screen">
      <aside>
        <Suspense fallback={<div>Loading...</div>}>
          <Nav />
        </Suspense>
      </aside>
      <main className="grid p-5 gap-5 grid-cols-2 ml-[300px] max-w-[2400px]">
        <div>{children}</div>
        <div>{modal}</div>
      </main>
    </main>
  );
}
