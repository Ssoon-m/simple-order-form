const OrderItemsInfo = () => {
  return (
    <div className="w-full bg-white p-4">
      <div className="w-full h-32 flex gap-3">
        <div className=" shrink-0">
          <img
            src="https://image.msscdn.net/images/goods_img/20231115/3711171/3711171_17000925762188_500.jpg"
            width={130}
            height={130}
            className="object-cover rounded-md"
          />
        </div>
        <div className="py-3 w-full h-full flex flex-col">
          <div className="text-gray-500"> 웨이크 업 생기 립밤 2P 세트</div>
          <div className="text-gray-800">총 구매수량 1개</div>
          <div className="justify-self-end mt-auto flex gap-2">
            <div className="px-1 rounded-sm border border-gray-200 text-gray-400 text-sm w-fit">
              옵션
            </div>
            <span className="text-sm text-gray-400">옵션 01호</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItemsInfo;
