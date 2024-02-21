import Nav from "./_components/nav";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex">
      <aside>
        <Nav />
      </aside>
      <main className="p-5 ml-[300px]">{children}</main>
    </main>
  );
}
