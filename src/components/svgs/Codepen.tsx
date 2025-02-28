import React from "react";
import styles from "./Icons.module.css";

export default function CodePen({ width = 24, height = 24 }) {
  return (
    <a
      className="flex items-center gap-2 hover:underline hover:underline-offset-4"
      href="https://codepen.io/MashedTaytors"
      target="_blank"
      aria-label="Codepen"
      title="Codepen"
      rel="noopener noreferrer"
    >
      <svg
        width={width}
        height={height}
        viewBox="0 0 40 44"
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M36.1905 24.2404L32.381 21.61L36.1905 18.7075V24.2404ZM29.2064 19.2517L21.9501 14.0816V5.64626L34.9206 14.8073L29.2064 19.2517ZM19.9547 26.2358L13.9683 21.61L19.9547 17.3469L25.941 21.61L19.9547 26.2358ZM18.0499 14.0816L10.7937 19.2517L5.07937 14.898L18.0499 5.73696V14.0816ZM3.80952 18.7075L7.61905 21.61L3.80952 24.2404V18.7075ZM10.7029 23.9683L18.0499 29.5918V37.8458L5.07937 27.9592L10.7029 23.9683ZM21.8594 29.5918L29.2064 23.9683L34.8299 27.9592L21.8594 37.8458V29.5918ZM18.5034 0.47619L1.08844 13.0839C0.453515 13.5374 0 14.3537 0 15.1701V27.8685C0 28.6848 0.362812 29.4104 0.997732 29.9546L18.4127 43.288C19.3197 44.0136 20.5896 44.0136 21.5873 43.288L39.0023 29.9546C39.6372 29.5011 40 28.6848 40 27.8685V15.1701C40 14.3537 39.6372 13.5374 38.9116 13.0839L21.4966 0.47619C20.5896 -0.15873 19.4104 -0.15873 18.5034 0.47619Z" />
      </svg>
    </a>
  );
}