import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const point = 5000;

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
        <a href="/points">Points: </a>
        <span>{point}</span>
      </div>
    </header>
  );
};
