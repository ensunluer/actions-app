//next
import Link from "next/link";
import Image from "next/image";
//hook
import { useContextHook } from "../../context/Context";

export const Header = () => {
  const { currentPoint } = useContextHook();

  return (
    <header className="header-container">
      <Link href="/" className="header--logo">
        <Image
          src="/LogoText.svg"
          alt="test-case-app-logo"
          width={146}
          height={24}
        />
      </Link>
      <div className="header--point">
        <Link href="/points">
          Points: <span>{currentPoint}</span>
        </Link>
      </div>
    </header>
  );
};
