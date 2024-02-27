import React from "react";

export default async function ItemList({
  children,
}: {
  children: React.ReactElement[];
}) {
  if (children.length === 0) {
    return (
      <span className="text-muted-foreground">
        There is no item in here. Submit one and it will show up here.
      </span>
    );
  }
  return <div className="flex flex-col">{children}</div>;
}
