import Image from "next/image";

export interface IListItem {
  id?: number;
  title: string;
  description: string;
  point: number;
  image: string;
}

export const ListItem = (items: IListItem, onClick: any) => {
  const { title, description, point, image } = items;
  return (
    <div className="list-item-container">
      <div className="list-item--image">
        {image && <Image src={image} alt={title} width={36} height={36} />}
      </div>
      <div>
        {title && <p className="list-item--title">{title}</p>}
        {description && <p className="list-item--description">{description}</p>}
      </div>
      <div>
        {point && <span className="list-item--point">{`+${point}`}</span>}
      </div>
    </div>
  );
};
