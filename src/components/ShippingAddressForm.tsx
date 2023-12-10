import { useState } from "react";
import ShippingAddressSearchModal from "./ShippingAddressSearchModal";
import TextField from "./common/TextField";
import { FaSearch } from "react-icons/fa";

const ShippingAddressForm = () => {
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
          <TextField label="받는사람" placeholder="이름을 입력해주세요." />
          <TextField
            label="받는사람 연락처"
            placeholder="받는사람 연락처를 입력해주세요."
          />
          <div>
            <div className="text-sm font-bold pb-1">배송지 입력</div>
            <div className="flex flex-col gap-2">
              <TextField
                icon={<FaSearch />}
                value={""}
                readOnly
                placeholder="배송지를 검색해주세요."
                onClick={handleOpenShippingModal}
              />
              <TextField placeholder="상세주소를 입력해주세요." />
            </div>
          </div>
        </div>
      </section>
      <ShippingAddressSearchModal
        isOpen={isOpenShippingModal}
        onClose={handleCloseShippingModal}
      />
    </>
  );
};

export default ShippingAddressForm;
