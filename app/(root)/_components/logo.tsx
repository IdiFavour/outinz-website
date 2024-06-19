import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/logo.png"
        alt="Logo"
        height="100"
        width="120"
        className="dark:hidden"
      />
      <Image
        src="/logo-light.png"
        alt="Logo"
        height="100"
        width="120"
        className="hidden dark:block"
      />
    </div>
  );
};

export default Logo;
