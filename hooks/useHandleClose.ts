import { useEffect } from "react";

export const useHandleClose = (
  ref: React.RefObject<HTMLInputElement>,
  handleClose?: () => void
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && handleClose) {
        if (!ref.current.contains(event.target)) {
          handleClose();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, handleClose]);
};
