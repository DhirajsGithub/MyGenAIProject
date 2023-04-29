import React, { useState } from "react";
import ModalComp from "../components/ModalComp";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };
  return (
    <div className="body">
      <h1>Welcome to Our Website</h1>
      <p>Learn more about our company and services</p>

      <ModalComp />
    </div>
  );
};

export default HomePage;
