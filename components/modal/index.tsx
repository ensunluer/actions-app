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
      {point && <div className="modal--point">{point}</div>}
      <div className="modal--content">
        <h3>{title}</h3>
        <h4>{subTitle}</h4>
      </div>
      <button onClick={onClick} className="modal--button">
        {button}
      </button>
    </div>
  );
};
