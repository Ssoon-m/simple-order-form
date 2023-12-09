const PaymentMethod = () => {
  return (
    <section className="bg-white px-4 pt-7 pb-8">
      <div className="pb-5">
        <h2 className="text-xl font-bold">결제 수단</h2>
      </div>
      <ul className="w-full grid grid-cols-2 gap-2">
        <li className="w-full">
          <input
            type="radio"
            id="btn-pay-card"
            name="payment-method"
            className="sr-only"
          ></input>
          <label
            htmlFor="btn-pay-card"
            className="text-center p-3 rounded-md block w-full border text-gray-500 border-gray-200 checked:bg-gray-500 hover:cursor-pointer"
          >
            신용카드
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="btn-pay-naver"
            name="payment-method"
            className="sr-only"
          ></input>
          <label
            htmlFor="btn-pay-naver"
            className="text-center p-3 rounded-md block w-full border text-gray-500 border-gray-200 checked:bg-gray-500 hover:cursor-pointer"
          >
            네이버페이
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="btn-pay-kakao"
            name="payment-method"
            className="sr-only"
          ></input>
          <label
            htmlFor="btn-pay-kakao"
            className="text-center p-3 rounded-md block w-full border text-gray-500 border-gray-200 checked:bg-gray-500 hover:cursor-pointer"
          >
            카카오페이
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="btn-pay-samsung"
            name="payment-method"
            className="sr-only"
          ></input>
          <label
            htmlFor="btn-pay-samsung"
            className="text-center p-3 rounded-md block w-full border text-gray-500 border-gray-200 checked:bg-gray-500 hover:cursor-pointer"
          >
            삼성페이
          </label>
        </li>
      </ul>
    </section>
  );
};

export default PaymentMethod;
