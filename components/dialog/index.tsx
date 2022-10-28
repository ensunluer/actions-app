import { Modal } from "../modal";

export const Dialog = ({image}: any) => {
  const completed = false;

  return (
    <>
      <div className="dialog-container">
        {completed ? (
          <Modal
            title="Phasellus et sem eget"
            subTitle="Lorem ipsum dolor sit amet consectetur"
            button="Earn points"
            image={image}
            point={5000}
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        ) : (
          <Modal
            title="Congratulations!"
            subTitle="You've earned points for your participation! 
            Keep Up the great work!"
            button="Close"
            image="/Vector.svg"
            onClick={function (): void {
              throw new Error("Function not implemented.");
            }}
          />
        )}
      </div>
    </>
  );
};
