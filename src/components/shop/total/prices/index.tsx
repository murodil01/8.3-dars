import { useReduxSelector } from "../../../../hooks/useRedux";

const Prices = () => {
  const cupon_title_style = "text-[#3D3D3D] text-[18px] font-normal";
  const { data } = useReduxSelector((state) => state.shopSlice);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 0);
  return (
    <div>
      <div className="mt-[20px]">
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Subtotal</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">
            ${totalPrice?.toFixed(2)}
          </h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Coupon Discount</h3>
          <h2 className="text-[#3D3D3D] text-[15px] font-medium">
            {" "}
            {/*{totalCoupon?.toFixed(2) || 0} $*/} 0
          </h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Shipping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>

      <div className="flex justify-between items-center mt-[20px]">
        <h2 className="text-[#3D3D3D] text-[16px] font-bold">Total:</h2>
        <div>
          <h1
            className={`text-[#46A358] text-[18px] font-bold  ${
              Boolean(false) && "linethrough"
            }`}
          >
            {/*$ {totalPrice?.toFixed(2)}*/} 0
          </h1>
          {Boolean(false) && (
            <h1 className="text-[#46A358] text-[18px] font-bold">
              {/*$ {(totalPrice - totalCoupon)?.toFixed(2)}*/} 0
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prices;
