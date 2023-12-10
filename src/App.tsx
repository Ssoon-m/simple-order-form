import BuyerInfoForm from "./components/BuyerInfoForm";
import OrderItemsInfo from "./components/OrderItemsInfo";
import PaymentMethod from "./components/PaymentMethod";
import PaymentPriceInfo from "./components/PaymentPriceInfo";
import ShippingAddressForm from "./components/ShippingAddressForm";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { PAYMENT_METHOD } from "./constants/payment";

const OrderFormSchema = z.object({
  // buyer
  buyerName: z.string().min(1, { message: "구매자 이름을 입력해주세요." }),
  buyerPhone: z
    .string()
    .min(1, { message: "구매자 휴대폰 번호를 입력해주세요." }),

  // shippingAddress
  receiverName: z
    .string()
    .min(1, { message: "받는 사람 이름을 입력해주세요." }),
  receiverPhone: z
    .string()
    .min(1, { message: "받는 사람 연락처를 입력해주세요." }),
  address: z.string().min(1, { message: "배송지를 입력해주세요." }),
  addressDetail: z
    .string()
    .max(100, { message: "상세주소가 너무 깁니다." })
    .optional(),
  paymentMethod: z
    .string()
    .refine((val) =>
      PAYMENT_METHOD.map((method) => method.value).includes(val)
    ),
});

type OrderFormSchemaType = z.infer<typeof OrderFormSchema>;

function App() {
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<OrderFormSchemaType>({
    resolver: zodResolver(OrderFormSchema),
  });

  const setAddress = (value: string) => {
    setValue("address", value);
  };

  const setPaymentMethod = (value: string) => {
    setValue("paymentMethod", value);
  };

  const checkKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const onSubmitForm: SubmitHandler<OrderFormSchemaType> = (values) => {
    console.log("data", values);
  };

  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full h-full flex flex-col max-w-lg">
        <div className="bg-gray-200">
          <header className="z-50 sticky top-0 bg-white w-full border-b border-b-gray-200 py-3">
            <h1 className="text-xl font-bold text-center">결제하기</h1>
          </header>
          <form
            onSubmit={handleSubmit(onSubmitForm)}
            onKeyDown={(e) => checkKeyDown(e)}
          >
            <div className="flex flex-col gap-3">
              <OrderItemsInfo />
              <BuyerInfoForm
                buyerName={register("buyerName")}
                buyerPhone={register("buyerPhone")}
              />
              <ShippingAddressForm
                receiverName={register("receiverName")}
                receiverPhone={register("receiverPhone")}
                address={getValues("address")}
                addressDetail={register("addressDetail")}
                setAddress={setAddress}
              />
              <PaymentPriceInfo />
              <PaymentMethod setPaymentMethod={setPaymentMethod} />
            </div>
            <footer className="p-5 bg-white border border-t border-gray-200">
              <button
                className="w-full bg-blue-500 text-white rounded-lg py-3 px-6 hover:bg-blue-400"
                type="submit"
              >
                18,000원 결제하기
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
