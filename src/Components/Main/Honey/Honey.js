import React from "react";
import { useState } from "react";
import Modal from "../../UI/Modal";
const Honey = ({ src, price, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const ChangeModalHandler = (e) => {
    // setIsModalOpen(!isModalOpen);
    // console.log(e.target.classList);
    if (
      e.target.classList.value === "modal-backdrop" ||
      e.target.classList.value === "modal-closing-tag"
    ) {
      setIsModalOpen(false);
      return;
    } else {
      setIsModalOpen(true);
    }
  };
  const ModalContext = (
    <div  className="honey-one-modal">
      <div className="modal-closing-tag" onClick={ChangeModalHandler}>
        &times;
      </div>
      <div className="modal-flex">
        <div className="honey-one-img-modal">
          <img src={src}></img>
        </div>
        <div className="modal-header">
          <div className="modal-title">{title} </div>
          <div className="modal-price">{price}$</div>
        </div>
      </div>

      <div className="honey-one-info-modal">
        <div>{description}</div>
      </div>
      <div className="modal-footer">
        <p>Contact us to order</p>
      </div>
    </div>
  );

  console.log(isModalOpen);
  return (
    <React.Fragment>
      <div className="honey-one" onClick={ChangeModalHandler}>
        <div className="honey-one-img">
          <img src={src}></img>
        </div>
        <div className="honey-one-info">
          <div>
            {title} {price}
          </div>
        </div>
        {isModalOpen ? (
          <Modal onClose={ChangeModalHandler}>{ModalContext}</Modal>
        ) : (
          ""
        )}
        
      </div>
    </React.Fragment>
  );
};

export default Honey;
