//hook
import { useState } from "react";
import { useContextHook } from "../../context/Context";
//component
import { Dialog } from "../dialog";
//types
import { IListItem, ListItem } from "../list-item";

export interface IItems {
  items: IListItem[];
}

export const List = ({ items }: IItems) => {
  const [singleId, setSingleId] = useState<number>();
  const { actions, setActions, completedItem } = useContextHook();

  const handleClick = (ids: number | undefined) => {
    setSingleId(ids);
    setActions(true);
  };

  return (
    <>
      {actions ? (
        <>
          {items
            .filter((id) => id.id === singleId)
            .map(({ image, point, id, title, description }: IListItem) => (
              <div key={id}>
                <Dialog
                  image={image}
                  point={point}
                  id={id}
                  title={title}
                  description={description}
                />
              </div>
            ))}
        </>
      ) : (
        <div className="list-container">
          <div className="list--title">Actions to be completed</div>
          {items?.map(({ id, title, description, point, image }: IListItem) => (
            <div key={id} className="list--item">
              {completedItem.includes(id) ? (
                <ListItem
                  key={id}
                  title={title}
                  description={description}
                  point={"Completed"}
                  image={image}
                />
              ) : (
                <ListItem
                  key={id}
                  title={title}
                  description={description}
                  point={`+${point}`}
                  image={image}
                  onClick={() => handleClick(id)}
                />
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
