import logo2 from "../../assets/images/logo2.svg";

const Footer = () => {
  return (
    <div className="max-w-[90%] m-auto">
      <div className=" bg-[#46A3581A] flex flex-col lg:flex-row justify-between items-start lg:items-center p-5 pl-8 gap-4">
        <div>
          <img src={logo2} alt="logo" />
        </div>

        <div className="max-w-[250px] flex gap-2 items-center text-sm text-[#3D3D3D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin text-[#46A358]"
            viewBox="0 0 24 24"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          70 West Buckingham Ave. Farmingdale, NY 11735
        </div>

        <div className="max-w-[200px] flex gap-2 items-center text-sm text-[#3D3D3D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-mail text-[#46A358]"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          contact@greenshop.com
        </div>

        <div className="max-w-[400px] w-full flex gap-2 items-center text-sm text-[#3D3D3D]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-phone-call text-[#46A358]"
            viewBox="0 0 24 24"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            <path d="M14.05 2a9 9 0 0 1 8 7.94" />
            <path d="M14.05 6A5 5 0 0 1 18 10" />
          </svg>
          +88 01911 717 490
        </div>
      </div>

      <div className="flex justify-between p-[23px] max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-1 flex-col gap-2.5">
          <h3 className="font-bold text-[18px] leading-[16px] text-[#3D3D3D]">
            My Account
          </h3>
          <p className="font-normal text-[14px] leading-[30px] text-[#3D3D3D] cursor-pointer">
            My Account
          </p>
          <p className="font-normal text-[14px] leading-[30px] text-[#3D3D3D] cursor-pointer">
            Address
          </p>
          <p className="font-normal text-[14px] leading-[30px] text-[#3D3D3D] cursor-pointer">
            Wishlist
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-2.5">
          <h3 className="font-bold text-[18px] leading-[16px] text-[#3D3D3D]">
            Categories
          </h3>
          <p className="font-normal text-[14px] leading-[30px] text-[#3D3D3D] cursor-pointer">
            House Plants
          </p>
          <p className="font-normal text-[14px] leading-[30px] text-[#3D3D3D] cursor-pointer">
            Potter Plants
          </p>
          <p className="font-normal text-[14px] leading-[30px] text-[#3D3D3D] cursor-pointer">
            Seeds
          </p>
          <p className="font-normal text-[14px] leading-[30px] text-[#3D3D3D] cursor-pointer">
            Small Plants
          </p>
          <p className="font-normal text-[14px] leading-[30px] text-[#3D3D3D] cursor-pointer">
            Accessories
          </p>
        </div>

        <div className="flex-1">
          <h3 className="font-bold text-[18px] leading-[16px] text-[#3D3D3D]">
            Social Media
          </h3>
          <div className="flex gap-3 mt-[20px] mb-[33px]">
            {[
              {
                alt: "facebook_green",
                src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffacebook.svg?alt=media&token=3db32f6e-a8c2-4dd2-829a-840b16fede49",
              },
              {
                alt: "instagram_green",
                src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Finstagram.svg?alt=media&token=dff411c8-b4c4-451d-820e-3f6752290ff5",
              },
              {
                alt: "twitter_green",
                src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ftwitter.svg?alt=media&token=9ab7ee69-e867-48b2-8d1c-978fd8d43835",
              },
              {
                alt: "linkedin_green",
                src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Flinkedin.svg?alt=media&token=1ad547d5-0f83-4421-994e-6989dba5d0d7",
              },
              {
                alt: "union_green",
                src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Funion.svg?alt=media&token=2ab668d7-f49d-4c46-ae87-d8d49ae0849f",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-[#46A35833] w-[30px] h-[30px] flex justify-center items-center cursor-pointer"
              >
                <img src={item.src} alt={item.alt} />
              </div>
            ))}
          </div>

          <h3 className="font-bold text-[18px] leading-[16px] text-[#3D3D3D] ">
            We accept
          </h3>
          <div className="flex gap-3 mt-[20px]">
            {[
              {
                alt: "paypal",
                src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fpaypal.svg?alt=media&token=51f12650-aff4-485a-bbcb-0ee3f4e64cca",
              },
              {
                alt: "master_card",
                src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fmastercard.svg?alt=media&token=cb5cc08d-e2a0-4625-8fc7-86448ce7628a",
              },
              {
                alt: "visa",
                src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Fvisa.svg?alt=media&token=4fffddbd-bd42-4523-a201-06650a09e8a2",
              },
              {
                alt: "amex",
                src: "https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Famex.svg?alt=media&token=89c19c4a-9c33-4e7a-b802-a7f0ba10ef04",
              },
            ].map((item, index) => (
              <img
                key={index}
                className="w-[30px] h-[30px] cursor-pointer"
                src={item.src}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
