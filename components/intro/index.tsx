import Image from "next/image";
import { useContextHook } from "../../context/Context";
import { Modal } from "../modal";

export const Intro = () => {
  const ctx = useContextHook();
  //@ts-ignore
  const isStart = ctx?.setIsStarted;
  return (
    <div className="intro-container">
      <Image src="/logo.svg" alt="logo" width={233} height={56} />
      <Image src="/cover.svg" alt="cover" width={300} height={272} />
      <Modal
        title={"Welcome to the TestCase APP!"}
        subTitle={
          "We created this exercise to gain insights about your development skills."
        }
        button={"Start"}
        onClick={() => isStart(true)}
      />
    </div>
  );
};
