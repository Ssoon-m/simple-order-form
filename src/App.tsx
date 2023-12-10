import BuyerInfoForm from "./components/BuyerInfoForm";
import OrderItemsInfo from "./components/OrderItemsInfo";
import PaymentMethod from "./components/PaymentMethod";
import PaymentPriceInfo from "./components/PaymentPriceInfo";
import ShippingAddressForm from "./components/ShippingAddressForm";

function App() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-full h-full flex flex-col max-w-lg">
        <div className="bg-gray-200">
          <header className="z-50 sticky top-0 bg-white w-full border-b border-b-gray-200 py-3">
            <h1 className="text-xl font-bold text-center">결제하기</h1>
          </header>
          <div className="flex flex-col gap-3">
            <OrderItemsInfo />
            <BuyerInfoForm />
            <ShippingAddressForm />
            <PaymentPriceInfo />
            <PaymentMethod />
          </div>
          <footer className="p-5 bg-white border border-t border-gray-200">
            <button className="w-full bg-blue-500 text-white rounded-lg py-3 px-6 hover:bg-blue-400">
              18,000원 결제하기
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
