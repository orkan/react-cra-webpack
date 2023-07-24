// import { useState, useEffect } from "react";

export function usePointerPosition() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  React.useEffect(() => {
    function handleMove(e) {
      setPosition({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);
  return position;
}
