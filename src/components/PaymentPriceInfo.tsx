const PaymentPriceInfo = () => {
  return (
    <section className="bg-white px-4 pt-7 pb-8">
      <div className="pb-5">
        <h2 className="text-xl font-bold">결제 금액</h2>
      </div>
      <div className="w-full grid grid-cols-2 gap-y-2">
        <span className="text-gray-400">상품금액</span>
        <span className="text-right">14,500원</span>
        <span className="text-gray-400">상품 할인 금액</span>
        <span className="text-right">0원</span>
        <span className="text-gray-400">쿠폰 할인 금액</span>
        <span className="text-right">0원</span>
        <span className="text-gray-400">포인트 할인 금액</span>
        <span className="text-right">0원</span>
        <span className="text-gray-400">총 배송비</span>
        <span className="text-right">3,500원</span>
      </div>
      <div className="h-[1px] mt-3 mb-3 border-t-gray-200 border-t" />
      <div className="w-full flex justify-between">
        <span className="font-bold text-l">최종 결제 금액</span>
        <span className="text-red-600 font-bold text-l">18,000원</span>
      </div>
    </section>
  );
};

export default PaymentPriceInfo;
