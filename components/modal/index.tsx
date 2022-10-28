import Image from "next/image";

interface IModal {
  image?: string;
  title: string;
  subTitle: string;
  button: string;
  point?: number;
  onClick: () => void;
}

export const Modal = ({
  image,
  title,
  subTitle,
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
      {point && <div className="modal--point">{`+${point}`}</div>}
      <div className="modal--content">
        <div className="modal--title">{title}</div>
        <div className="modal--subTitle">{subTitle}</div>
      </div>
      <button onClick={onClick} className="modal--button">
        {button}
      </button>
    </div>
  );
};
