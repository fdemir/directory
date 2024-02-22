import Image from "next/image";
import Link from "next/link";

export default function Item() {
  return (
    <Link className="py-4 flex gap-4 w-full items-center" href="/">
      <Image
        src="/example-link-icon.jpg"
        width={72}
        height={72}
        alt="Snapchat"
        className="rounded-md"
      />
      <div className="h-full flex flex-col text-xl">
        <span className="font-semibold">Snapchat</span>
        <span className="text-muted-foreground">
          Lorem ipsum dolor sit amet
        </span>
      </div>
    </Link>
  );
}
