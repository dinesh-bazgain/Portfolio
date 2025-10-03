import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4">I'm a web developer with a passion for creating beautiful and functional websites.</p>
      <Image src="/profile.jpg" alt="Profile Picture" width={150} height={150} className="rounded-full mt-4" />
    </div>
  );
}
