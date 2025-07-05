/*import { useReduxSelector } from "../../../../hooks/useRedux";

const Prices = () => {
  const cupon_title_style = "text-[#3D3D3D] text-[18px] font-normal";
  
  const { data, coupon } = useReduxSelector((state) => state.shopSlice);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 0);
  const discountPrice = (totalPrice * coupon) / 100;
  const shippingTotal = totalPrice + 16;
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
            {discountPrice?.toFixed(2) || 0} $
          </h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Shiping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>

      <div className="flex justify-between items-center mt-[20px]">
        <h2 className="text-[#3D3D3D] text-[16px] font-bold mb-2">Total:</h2>
        <div>
          <h1
            className={`text-[#46A358] text-[18px] font-bold  ${
              Boolean(coupon) && "line-through"
            }`}
          >
            $ {shippingTotal?.toFixed(2)}
          </h1>
          {Boolean(coupon) && (
            <h1 className={`text-[#46A358] text-[18px] font-bold`}>
              {Boolean(coupon)
                ? (shippingTotal - discountPrice).toFixed(2)
                : totalPrice}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prices;*/
import { useReduxSelector } from "../../../../hooks/useRedux";

const Prices = () => {
  const cupon_title_style = "text-[#3D3D3D] text-[18px] font-normal";
  
  const { data, coupon } = useReduxSelector((state) => state.shopSlice);
  const totalPrice = data.reduce((acc, value) => (acc += value.userPrice), 0);
  const discountPrice = (totalPrice * coupon) / 100;
  const shippingTotal = totalPrice + 16;
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
            {discountPrice?.toFixed(2) || 0} $
          </h2>
        </div>
        <div className="flex justify-between items-center pt-3">
          <h3 className={`${cupon_title_style}`}>Shiping</h3>
          <h2 className="text-[#3D3D3D] text-[18px] font-medium">$16.00</h2>
        </div>
      </div>

      <div className="flex justify-between items-center mt-[20px]">
        <h2 className="text-[#3D3D3D] text-[16px] font-bold mb-2">Total:</h2>
        <div>
          <h1
            className={`text-[#46A358] text-[18px] font-bold  ${
              Boolean(coupon) && "line-through"
            }`}
          >
            $ {shippingTotal?.toFixed(2)}
          </h1>
          {Boolean(coupon) && (
            <h1 className={`text-[#46A358] text-[18px] font-bold`}>
              {coupon
                ? (shippingTotal - discountPrice).toFixed(2)
                : totalPrice}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Prices;
