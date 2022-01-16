import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";
import Button from "Components/core/Button";
import { textColors } from "Components/core/Typos";
import React, { FC, Fragment, useRef } from "react";

interface Props {
  isOpen: boolean;
  title: string;
  description: string;

  onClose: () => void;
  labelPrimary: string;
  onPrimary: () => void;
  labelSecondary: string;
  onSecondary: () => void;
}

const Modal: FC<Props> = ({
  isOpen,
  title,
  description,
  children,
  onClose,
  onPrimary,
  onSecondary,
  labelPrimary,
  labelSecondary,
}) => {
  const buttonRef = useRef(null);

  return (
    <Transition show={isOpen}>
      <Dialog
        initialFocus={buttonRef}
        onClose={onClose}
        className="fixed z-50 inset-0 flex items-center justify-center overflow-y-auto"
      >
        <Dialog.Overlay className="fixed inset-0 bg-black  opacity-30" />
        <Transition.Child
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
          as={Fragment}
        >
          <div className="relative flex items-center flex-col  bg-slate-50 m-4 p-6 dark:bg-slate-800 rounded-xl  ">
            <Dialog.Title
              as="h5"
              className={classNames(textColors.dark, "text-center")}
            >
              {title}
            </Dialog.Title>
            {children}
            <Dialog.Description
              as="p"
              className={classNames(textColors.dark, "text-center ")}
            >
              {description}
            </Dialog.Description>
            <div className="flex flex-col md:flex-row  mt-4">
              <Button
                onClick={onSecondary}
                className="m-2 px-2"
                type="secondary"
              >
                {labelSecondary}
              </Button>
              <Button
                onClick={onPrimary}
                ref={buttonRef}
                className="m-2  px-2"
                type="primary"
              >
                {labelPrimary}
              </Button>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Modal;
