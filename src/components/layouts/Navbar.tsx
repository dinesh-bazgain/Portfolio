import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full bg-blue-600 text-white py-4 shadow sticky top-0 z-50">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <Image src="/file.svg" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl">Dinesh Bajgain</span>
        </div>
        <div className="flex gap-6 text-md">
          <a href="#home" className="hover:underline">HomePage</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#WorkWithMe" className="hover:underline">Work With Me</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
