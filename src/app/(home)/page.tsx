import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page",
};

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Today</h1>
    </div>
  );
}
