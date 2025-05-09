import React from "react";
import styles from "./Icons.module.css";


export default function LinkedIn({ width = 24, height = 24 }) {
    return (
        <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://www.linkedin.com/in/taylor-steele-a79152163/"
        target="_blank"
        aria-label="LinkedIn"
        title="LinkedIn"
        rel="noopener noreferrer"
      >
        <svg
          width={width}
          height={height}
          viewBox="0 0 40 41"
          className={styles.icon}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32.1695 0H8.83614C4.23447 0 0.502808 3.73167 0.502808 8.33333V31.6667C0.502808 36.2683 4.23447 40 8.83614 40H32.1695C36.7728 40 40.5028 36.2683 40.5028 31.6667V8.33333C40.5028 3.73167 36.7728 0 32.1695 0ZM13.8361 31.6667H8.83614V13.3333H13.8361V31.6667ZM11.3361 11.22C9.72614 11.22 8.41947 9.90333 8.41947 8.28C8.41947 6.65667 9.72614 5.34 11.3361 5.34C12.9461 5.34 14.2528 6.65667 14.2528 8.28C14.2528 9.90333 12.9478 11.22 11.3361 11.22ZM33.8361 31.6667H28.8361V22.3267C28.8361 16.7133 22.1695 17.1383 22.1695 22.3267V31.6667H17.1695V13.3333H22.1695V16.275C24.4961 11.965 33.8361 11.6467 33.8361 20.4017V31.6667Z"
          />
        </svg>
      </a>
    );
}