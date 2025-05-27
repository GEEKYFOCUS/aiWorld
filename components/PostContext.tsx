"use client";

import React, {
  cloneElement,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface ModalContextType {
  openName: string;
  close: () => void;
  open: (name: string) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProps {
  children: ReactNode;
  defaultOpenName?: string;
  onOpen?: () => void;
  onClose?: () => void;
}
interface OpenProps {
  children: React.ReactElement<{ onClick?: () => void }>;
  opens: string;
}
interface WindowProps {
  children: React.ReactElement<{ onCloseModal?: () => void }>;
  name: any;
}
const Modal: React.FC<ModalProps> & {
  Open: React.FC<OpenProps>;
  Window: React.FC<WindowProps>;
} = ({
  children,
  defaultOpenName = "",
  onOpen = () => {},
  onClose = () => {},
}) => {
  const [openName, setOpenName] = useState<string>(defaultOpenName);

  const lockScroll = () => {
    document.body.style.overflow = "hidden";
  };

  const unlockScroll = () => {
    document.body.style.overflow = "";
  };

  const close = () => {
    setOpenName("");
    unlockScroll();
    // onClose();
  };

  const open = (name: string) => {
    console.log(name);
    setOpenName(name);
    lockScroll();
    // onOpen();
  };

  useEffect(() => {
    return () => unlockScroll();
  }, []);
  let count = 1;
  useEffect(() => {
    count += 1;
    console.log("Updated openName:", count, openName);
  }, [openName]);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

const Open: React.FC<OpenProps> = ({ children, opens }) => {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error("Open must be used within a Modal.");
  }

  const { open } = context;
  console.log(opens);
  return cloneElement(children, {
    onClick: () => open(opens),
  });
};

const Window: React.FC<WindowProps> = ({ children, name }) => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Window must be used within a Modal.");
  }
  console.log(context);
  const { openName, close } = context;

  if (!openName) return null;
  console.log("open name and name of content", openName);
  console.log(`${name !== openName}`);
  if (openName) {
    console.log("name of content and post", name, openName);
  }
  console.log("name of content", openName);
  if (name !== openName) return null;

  return createPortal(
    <div
      onClick={() => close()}
      className="fixed  overflow-y-scroll  top-0 left-0 w-full h-screen flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-[20] transition-all duration-500"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" fixed  w-[90%] h-min  transform  bg-blue-100 rounded-lg shadow-lg sm:px-8 sm:py-4 py-4 transition-all duration-500"
      >
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
