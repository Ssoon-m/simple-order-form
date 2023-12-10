import { useState } from "react";
import ShippingAddressSearchModal from "./ShippingAddressSearchModal";
import TextField from "./common/TextField";
import { FaSearch } from "react-icons/fa";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  receiverName: UseFormRegisterReturn<"receiverName">;
  receiverPhone: UseFormRegisterReturn<"receiverPhone">;
  address: UseFormRegisterReturn<"address">;
  addressDetail: UseFormRegisterReturn<"addressDetail">;
  setAddress: (value: string) => void;
}

const ShippingAddressForm = ({
  receiverName,
  receiverPhone,
  address,
  addressDetail,
  setAddress,
}: Props) => {
  const [isOpenShippingModal, setIsOpenShippingModal] = useState(false);
  const handleOpenShippingModal = () => {
    setIsOpenShippingModal(true);
  };
  const handleCloseShippingModal = () => {
    setIsOpenShippingModal(false);
  };

  return (
    <>
      <section className="bg-white px-4 pt-7 pb-8">
        <div className="pb-5">
          <h2 className="text-xl font-bold">배송지 정보</h2>
        </div>
        <div className="flex flex-col gap-6">
          <TextField
            label="받는사람"
            placeholder="이름을 입력해주세요."
            {...receiverName}
          />
          <TextField
            label="받는사람 연락처"
            placeholder="받는사람 연락처를 입력해주세요."
            {...receiverPhone}
          />
          <div>
            <div className="text-sm font-bold pb-1">배송지 입력</div>
            <div className="flex flex-col gap-2">
              <TextField
                icon={<FaSearch />}
                {...address}
                readOnly
                placeholder="배송지를 검색해주세요."
                onClick={handleOpenShippingModal}
              />
              <TextField
                placeholder="상세주소를 입력해주세요."
                {...addressDetail}
              />
            </div>
          </div>
        </div>
      </section>
      <ShippingAddressSearchModal
        isOpen={isOpenShippingModal}
        onClose={handleCloseShippingModal}
        setAddress={setAddress}
      />
    </>
  );
};

export default ShippingAddressForm;
