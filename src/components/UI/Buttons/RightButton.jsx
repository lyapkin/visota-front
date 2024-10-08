import React from "react";

import styles from "./buttons.module.css";

const RightButton = ({ action, disabled, className }) => {
  return (
    <button
      className={`${styles["slider-right-button"]} ${className}`}
      data-type="right-button"
      onClick={action}
      disabled={disabled}
    >
      <svg
        width="23"
        height="12"
        viewBox="0 0 23 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.5303 6.53033C22.8232 6.23744 22.8232 5.76257 22.5303 5.46967L17.7574 0.696701C17.4645 0.403807 16.9896 0.403807 16.6967 0.696701C16.4038 0.989594 16.4038 1.46447 16.6967 1.75736L20.9393 6L16.6967 10.2426C16.4038 10.5355 16.4038 11.0104 16.6967 11.3033C16.9896 11.5962 17.4645 11.5962 17.7574 11.3033L22.5303 6.53033ZM-6.55671e-08 6.75L22 6.75L22 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default RightButton;
