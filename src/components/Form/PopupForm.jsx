"use client";
import React, { useContext } from "react";
import Popup from "../popup/Popup";
import Form from "./Form";
import { ShowFormContext } from "@/providers/ShowFormProvider";
import Button from "../UI/Buttons/Button";

const PopupForm = ({ text, smallFont, type }) => {
  const { isFormShown, setIsFormShown } = useContext(ShowFormContext);
  return (
    <>
      {isFormShown && (
        <Popup close={() => setIsFormShown(false)}>
          <Form
            popup={true}
            buttonText={text}
            closePopup={() => setIsFormShown(false)}
            type={type}
          />
        </Popup>
      )}
      <Button
        text={text}
        smallFont={smallFont}
        action={() => setIsFormShown(true)}
      />
    </>
  );
};

export default PopupForm;
