import { IListItem, ListItem } from "../list-item";

export interface IItems {
  items: IListItem[];
}

export const List = ({ items }: IItems) => {
  return (
    <>
      <div className="list-container">
        <div className="list--title">
          Actions to be completed
        </div>
        {items?.map(({ id, title, description, point, image }: IListItem) => (
          <div key={id} className="list--item">
            <ListItem
              title={title}
              description={description}
              point={point}
              image={image}
            />
          </div>
        ))}
      </div>
    </>
  );
};
