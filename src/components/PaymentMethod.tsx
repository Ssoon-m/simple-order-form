import { PAYMENT_METHOD } from "../constants/payment";

interface Props {
  setPaymentMethod: (value: string) => void;
}

const PaymentMethod = ({ setPaymentMethod }: Props) => {
  return (
    <section className="bg-white px-4 pt-7 pb-8">
      <div className="pb-5">
        <h2 className="text-xl font-bold">결제 수단</h2>
      </div>
      <ul className="w-full grid grid-cols-2 gap-2">
        {PAYMENT_METHOD.map((method) => (
          <li className="w-full" key={method.id}>
            <input
              type="radio"
              id={method.id}
              onChange={(e) => setPaymentMethod(e.target.value)}
              value={method.value}
              className="sr-only peer"
              name={method.name}
            ></input>
            <label
              htmlFor={method.id}
              className="text-center p-3 rounded-md block w-full border text-gray-500 border-gray-200 peer-checked:text-blue-500 peer-checked:border-blue-500 hover:cursor-pointer"
            >
              {method.text}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PaymentMethod;
