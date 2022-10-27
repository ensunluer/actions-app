import Image from "next/image";

export const Intro = () => {
  return (
    <div className="intro-container">
      <Image src="/logo.svg" alt="logo" width={233} height={56} />
      <Image src="/cover.svg" alt="cover" width={300} height={272} />
    </div>
  );
};
