//next
import Image from "next/image";
//hook
import { useContextHook } from "../../context/Context";
//component
import { Modal } from "../modal";

export const Intro = () => {
  const { setIsStarted } = useContextHook();
  return (
    <div className="intro-container">
      <Image src="/Logo.svg" alt="logo" width={233} height={56} />
      <Image src="/cover.svg" alt="cover" width={300} height={272} />
      <Modal
        title={"Welcome to the TestCase APP!"}
        subTitle={
          "We created this exercise to gain insights about your development skills."
        }
        button={"Start"}
        onClick={() => setIsStarted(true)}
      />
    </div>
  );
};
