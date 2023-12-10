import { useEffect } from "react";
import { cn } from "../utils";
import { FaX } from "react-icons/fa6";
import TextField from "./common/TextField";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ShippingAddressSearchModal = ({ isOpen, onClose }: Props) => {
  useEffect(() => {
    if (isOpen && typeof window !== "undefined") {
      document.body.classList.add("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleCloseModal = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };
  return (
    <>
      <div
        className={cn(
          "z-[9999]",
          "fixed top-0 left-0",
          "w-full h-full",
          "bg-black/50",
          "justify-center",
          "hidden",
          { block: isOpen }
        )}
        onClick={handleCloseModal}
      />
      <div
        className={cn(
          "z-[99999]",
          "fixed bottom-0 left-1/2 -translate-x-1/2",
          "block",
          "w-full max-w-lg h-full",
          "translate-y-full transition-transform duration-150 ease-out",
          {
            "translate-y-0": isOpen,
          }
        )}
      >
        <div className="w-full h-full bg-white p-4">
          <div className="relative w-full flex justify-center">
            <button className="absolute left-0 -top-1 p-2">
              <span className="sr-only">취소</span>
              <FaX size={20} onClick={handleCloseModal} />
            </button>
            <h1 className="text-xl font-bold">주소 검색</h1>
          </div>
          <div className="h-[24px]" />
          <div className="w-full flex gap-3">
            <TextField className="flex-1" placeholder="주소 입력" />
            <button className=" shrink-0 w-24 bg-blue-500 text-white rounded-lg py-2 px-6 hover:bg-blue-400">
              완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingAddressSearchModal;
