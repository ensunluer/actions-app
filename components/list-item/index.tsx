import Image from "next/image";

export interface IListItem {
  id?: number;
  title: string;
  description?: string;
  point?: number | string;
  image: string;
  onClick?: () => void;
}

export const ListItem = (items: IListItem) => {
  const { title, description, point, image, onClick } = items;

  return (
    <div className="list-item-container" onClick={onClick}>
      <div className="list-item--image">
        {image && <Image src={image} alt={title} width={36} height={36} />}
      </div>
      <div className="list-item-text">
        <div className="list-item--title">{title}</div>
        <div className="list-item--description">{description}</div>
      </div>
      <div className="list-item--point">
        {point && <span>{`${point}`}</span>}
      </div>
    </div>
  );
};
