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
      <main className="grid grid-cols-2 w-full ml-[300px]">
        <div className="p-5">{children}</div>
        <div>{modal}</div>
      </main>
    </main>
  );
}
