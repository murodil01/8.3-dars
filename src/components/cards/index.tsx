import { ArrowRight } from "lucide-react";
import card1 from "../../assets/images/card1.png";
import card2 from "../../assets/images/card2.png";
import card3 from "../../assets/images/card3.png";
import card4 from "../../assets/images/card4.png";

const Cards = () => {
  return (
    <div className="max-w-[90%] m-auto py-[80px] text-center">
      <h1 className="text-[#3D3D3D] font-bold text-[30px] leading-[16px] mt-[15px]">
        Our Blog Posts
      </h1>
      <p className="font-normal text-[14px] leading-[24px] text-[#727272] mt-2 mb-10">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {[card1, card2, card3, card4].map((img, index) => (
          <div
            key={index}
            className="w-full sm:w-[47%] lg:w-[23%] h-auto bg-white shadow-sm"
          >
            <div>
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-full h-[180px] object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-2 text-left px-[15px] py-[8px] bg-[#FBFBFB]">
              <span className="font-medium text-[14px] leading-[16px] text-[#46A358]">
                September {12 + index} I Read in {index + 2} minutes
              </span>
              <h3 className="text-[#3D3D3D] font-bold text-[20px] leading-[26px]">
                {
                  [
                    "Cactus & Succulent Care Tips",
                    "Top 10 Succulents for Your Home",
                    "Cactus & Succulent Care Tips",
                    "Best Houseplants Room by Room",
                  ][index]
                }
              </h3>
              <p className="font-normal text-[14px] leading-[22px] text-[#3D3D3D]">
                {
                  [
                    "Cacti are succulents are easy care plants for any home or patio.",
                    "Best in hanging baskets. Prefers medium to high light.",
                    "Cacti and succulents thrive in containers and because most are..",
                    "The benefits of houseplants are endless. In addition to..",
                  ][index]
                }
              </p>
              <p className="flex gap-2 items-center text-[#3D3D3D] font-medium text-[14px] leading-[16px] cursor-pointer hover:text-[#46A358] transition-colors">
                Read More <ArrowRight size={16} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
