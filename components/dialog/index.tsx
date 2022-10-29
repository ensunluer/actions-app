//hook
import { useContextHook } from "../../context/Context";
import { IListItem } from "../list-item";
//component
import { Modal } from "../modal";

export const Dialog = ({ title, image, point, id, description }: IListItem) => {
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
            title={title}
            description={description}
            button="Earn points"
            image={image}
            point={point}
            onClick={handlePoint}
          />
        ) : (
          <Modal
            title="Congratulations!"
            description="You've earned points for your participation! 
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
