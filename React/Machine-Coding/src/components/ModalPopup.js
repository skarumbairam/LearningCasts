import { useState } from "react";
import ReactDOM from "react-dom/client";
import { createPortal } from "react-dom";

const Modal = () => {
  return createPortal(
    <div className="bg-cyan-400 w-100 p-10 position-absolute top-0">
      <p>This child is placed in the document body.</p>
    </div>,
    document.body
  );
};

const ModalPopup = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div>
        <h2 className="text-xl leading-10">9. Modal Popup</h2>
        <button onClick={(e) => setShowModal(!showModal)}>Toggle me</button>
      </div>

      {showModal && (
        <>
          <Modal />
        </>
      )}
    </div>
  );
};

export default ModalPopup;
