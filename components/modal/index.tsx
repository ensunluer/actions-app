import Image from "next/image";

export interface IModal {
  image?: string;
  title: string;
  description?: string;
  button: string;
  point?: number | string | undefined;
  onClick: () => void;
}

export const Modal = ({
  image,
  title,
  description,
  button,
  point,
  onClick,
}: IModal) => {
  return (
    <div className="modal-container">
      {image && (
        <Image
          className="modal--image"
          src={image}
          alt={title}
          width={72}
          height={72}
        />
      )}
      {point && <div className="modal--point">{`+${point} Points`}</div>}
      <div className="modal--content">
        <div className="modal--title">{title}</div>
        <div className="modal--subTitle">{description}</div>
      </div>
      <button onClick={onClick} className="modal--button">
        {button}
      </button>
    </div>
  );
};
