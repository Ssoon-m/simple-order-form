import TextField from "./common/TextField";
import { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  buyerName: UseFormRegisterReturn<"buyerName">;
  buyerPhone: UseFormRegisterReturn<"buyerPhone">;
}
const BuyerInfoForm = ({ buyerName, buyerPhone }: Props) => {
  return (
    <section className="bg-white px-4 pt-7 pb-8">
      <div className="pb-5">
        <h2 className="text-xl font-bold">구매자 정보</h2>
      </div>
      <div className="flex flex-col gap-6">
        <TextField
          label="이름"
          placeholder="이름을 입력해주세요."
          {...buyerName}
        />
        <TextField
          label="휴대폰 번호"
          placeholder="휴대폰 번호를 입력해주세요."
          {...buyerPhone}
        />
      </div>
    </section>
  );
};

export default BuyerInfoForm;
