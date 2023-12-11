import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormProvider,
  SubmitErrorHandler,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import { PAYMENT_METHOD } from "../constants/payment";

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
    .string({ invalid_type_error: "결제수단을 선택해주세요." })
    .refine((val) =>
      PAYMENT_METHOD.map((method) => method.value).includes(val)
    ),
});

export type OrderFormSchemaType = z.infer<typeof OrderFormSchema>;

interface Props {
  children: React.ReactNode;
}

const OrderForm = ({ children }: Props) => {
  const methods = useForm<OrderFormSchemaType>({
    resolver: zodResolver(OrderFormSchema),
  });

  const checkKeyDown = (e: React.KeyboardEvent<HTMLFormElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };

  const onSubmitForm: SubmitHandler<OrderFormSchemaType> = (values) => {
    alert(JSON.stringify(values));
  };

  const onInvalid: SubmitErrorHandler<OrderFormSchemaType> = (forms) => {
    for (const form of Object.values(forms)) {
      if (form.message) {
        alert(form.message);
        return;
      }
    }
  };
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmitForm, onInvalid)}
        onKeyDown={(e) => checkKeyDown(e)}
      >
        {children}
      </form>
    </FormProvider>
  );
};

export default OrderForm;
