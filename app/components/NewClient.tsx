"use client";
import React, { useState } from "react";
import ModalNewClient from "./ModalNewClient";


const NewClient = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="font-bold rounded-lg text-base w-48 h-10 bg-[#0f6e75] hover:bg-[#279097] text-[#ffffff] justify-center "
      >
        Nuevo Cliente
      </button>

      {showModal && (
        <ModalNewClient setShowModal={setShowModal} />
      )}
    </>
  );
};

export default NewClient;
