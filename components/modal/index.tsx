interface IModal {
  image?: string;
  title: string;
  subTitle: string;
  button: string;
  point?: string;
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
      {image && <div className="modal--image">{image}</div>}
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
