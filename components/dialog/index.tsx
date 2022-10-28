import { useState } from "react";
import { useContextHook } from "../../context/Context";
import { Modal } from "../modal";

export const Dialog = ({ image, point, id }: any) => {
  const {
    completed,
    setCompleted,
    completedItem,
    setCompletedItem,
    setActions,
    currentPoint,
    setCurrentPoint,
  } = useContextHook();

  const handlePoint = () => {
    const newPoint = point + currentPoint;
    setCurrentPoint(newPoint);
    setCompleted(true);

    completedItem.push(id);
    setCompletedItem(completedItem);
  };
  const handleClose = () => {
    setActions(false);
    setCompleted(false);
  };
  return (
    <>
      <div className="dialog-container">
        {!completed ? (
          <Modal
            title="Phasellus et sem eget"
            subTitle="Lorem ipsum dolor sit amet consectetur"
            button="Earn points"
            image={image}
            point={point}
            onClick={handlePoint}
          />
        ) : (
          <Modal
            title="Congratulations!"
            subTitle="You've earned points for your participation! 
            Keep Up the great work!"
            button="Close"
            image="/Vector.svg"
            onClick={handleClose}
          />
        )}
      </div>
    </>
  );
};
