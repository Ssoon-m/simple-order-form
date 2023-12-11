import { OrderFormSchemaType } from "./OrderForm";
import TextField from "./common/TextField";
import { useFormContext } from "react-hook-form";

const BuyerInfoForm = () => {
  const { register } = useFormContext<OrderFormSchemaType>();
  return (
    <section className="bg-white px-4 pt-7 pb-8">
      <div className="pb-5">
        <h2 className="text-xl font-bold">구매자 정보</h2>
      </div>
      <div className="flex flex-col gap-6">
        <TextField
          label="이름"
          placeholder="이름을 입력해주세요."
          {...register("buyerName")}
        />
        <TextField
          label="휴대폰 번호"
          placeholder="휴대폰 번호를 입력해주세요."
          {...register("buyerPhone")}
        />
      </div>
    </section>
  );
};

export default BuyerInfoForm;
