import TextField from "./common/TextField";

const BuyerInfo = () => {
  return (
    <div className="bg-white p-3">
      <div className="py-3">
        <h2 className="text-xl font-bold">구매자 정보</h2>
      </div>
      <div>
        <TextField label="구매자 이름" />
      </div>
    </div>
  );
};

export default BuyerInfo;
