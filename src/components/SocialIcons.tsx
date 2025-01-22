import React from "react";
import ThemeToggle from "./ThemeToggle/ThemeToggle";
import GitHub from "./svgs/GitHub";
import CodePen from "./svgs/Codepen";
import LinkedIn from "./svgs/LinkedIn";

export default function SocialIcons({ width = 24, height = 24, fontSize = 30}) {
  return (
    <div className="flex gap-4 flex-wrap items-center justify-start">
      <GitHub width={width} height={height} />
      <CodePen width={width} height={height} />
      <LinkedIn width={width} height={height} />
      <ThemeToggle fontSize={fontSize} />
    </div>
  );
}
