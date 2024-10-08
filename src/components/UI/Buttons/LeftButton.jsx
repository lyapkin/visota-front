import React from "react";

import styles from "./buttons.module.css";

const LeftButton = ({ action, disabled, className }) => {
  return (
    <button
      className={`${styles["slider-left-button"]} ${className}`}
      data-type="left-button"
      onClick={action}
      disabled={disabled}
    >
      <svg
        width="24"
        height="12"
        viewBox="0 0 24 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.536076 6.53033C0.243183 6.23744 0.243183 5.76257 0.536076 5.46967L5.30905 0.696701C5.60194 0.403807 6.07681 0.403807 6.36971 0.696701C6.6626 0.989594 6.6626 1.46447 6.36971 1.75736L2.12707 6L6.36971 10.2426C6.6626 10.5355 6.6626 11.0104 6.36971 11.3033C6.07682 11.5962 5.60194 11.5962 5.30905 11.3033L0.536076 6.53033ZM23.0664 6.75L1.06641 6.75L1.06641 5.25L23.0664 5.25L23.0664 6.75Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
};

export default LeftButton;
