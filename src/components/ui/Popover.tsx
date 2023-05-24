import React from "react";

interface PopoverProps {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

const Popover: React.FC<PopoverProps> = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center ${
        isOpen ? "visible" : "invisible"
      }`}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-white p-4 rounded shadow">
        <div className="relative">
          <button className="absolute top-0 right-0 p-2" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 hover:text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="absolute w-3 h-3 bg-white transform rotate-45 -translate-x-1/2 translate-y-1/2 bottom-0 left-1/2"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Popover;
