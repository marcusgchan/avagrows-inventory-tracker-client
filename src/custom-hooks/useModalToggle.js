import { useState } from "react";

function useModalToggle() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal((cur) => !cur);

  return [showModal, toggleModal];
}

export default useModalToggle;
