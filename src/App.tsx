import OrderForm from "./components/OrderForm";

function App() {
  return (
    <div className="w-full h-full flex justify-center bg-gray-300">
      <div className="w-full h-full flex flex-col max-w-lg">
        <OrderForm />
      </div>
    </div>
  );
}

export default App;
