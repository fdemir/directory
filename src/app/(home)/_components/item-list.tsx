import React from "react";

export default async function ItemList({
  children,
}: {
  children: React.ReactElement[];
}) {
  return <div className="flex flex-col">{children}</div>;
}
