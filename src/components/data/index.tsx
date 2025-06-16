import { useEffect, useState } from "react";
import flw2 from "../../assets/images/flw2.png"; 

const headerTexts = [
  "LET'S LIVE IN A BETTER",
  "LET'S OBSERVE A BETTER",
  "LET'S MAKE A BETTER",
];

const headerImages = [
  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-1.png?alt=media&token=74ea8d3d-06b5-41e7-bb12-7caaf3035a6d",
  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fhero-flower-2.png?alt=media&token=5b5addec-d344-4897-a983-95c9b10a1662",
  "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Fimages%2Fflower1.png?alt=media&token=0b53d608-7264-4c54-b497-a9bf054fcd9d",
];

const headerButtons = ["Let's start", "Get credits", "Shop now"];

const Data = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div
        className="max-w-[90%] m-auto mt-3 px-[40px] py-8 flex flex-col-reverse lg:flex-row items-center justify-between gap-8"
        style={{
          background:
            "linear-gradient(97.77deg, rgba(245, 245, 245, 0.5) -23.46%, rgba(245, 245, 245, 0.5) 107.51%)",
        }}
      >
        <div className="w-full lg:max-w-[600px] text-center lg:text-left">
          <p className="text-[#3D3D3D] font-medium text-sm tracking-[0.1em] uppercase">
            Welcome to GreenShop
          </p>
          <h1 className="text-[#3D3D3D] font-extrabold text-[32px] sm:text-[40px] lg:text-[70px] leading-tight uppercase mt-2 transition duration-700 ease-in-out">
            {headerTexts[index]} <span className="text-[#46A358]">Planet</span>
          </h1>
          <p className="text-[#727272] font-normal text-sm sm:text-base leading-[24px] mt-4">
            We are an online plant shop offering a wide range of cheap and
            trendy plants. Use our plants to create a unique Urban Jungle. Order
            your favorite plants!
          </p>
          <button className="mt-6 w-[140px] h-[40px] rounded-md text-white bg-[#46A358] font-bold text-sm sm:text-base uppercase">
            <a className="text-white" href=""> {headerButtons[index]}</a>{" "}
          </button>
        </div>

        <div className="relative w-full max-w-[518px] h-[518px] flex-shrink-0">
          <img
            src={headerImages[index]}
            alt="Main flower"
            className="w-full h-full object-contain transition duration-700 ease-in-out"
          />
          <img
            src={flw2}
            alt="flw2"
            className="absolute w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] lg:w-[135px] lg:h-[135px] top-[65%] left-[12%]"
          />
        </div>
      </div>

      <div className="w-full flex justify-center mt-6 mb-8 gap-4">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-8 h-2 rounded-full cursor-pointer transition duration-300 ${
              i === index ? "bg-[#46A358]" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Data;
