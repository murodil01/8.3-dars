const Feature = () => {
  return (
    <div className="max-w-[90%] m-auto mt-[50px] flex flex-col lg:flex-row justify-between items-start gap-6 pb-5 pt-7 px-4">
      <div className="w-full lg:w-[23%] px-5 border-b-2 lg:border-b-0 lg:border-r-2 border-[#46A3581A]">
        <div>
          <img src="https://greenshop-react-ts.vercel.app/images/f11.svg" alt="Garden Care" />
        </div>
        <div>
          <h3 className="font-bold text-lg mt-4 mb-1">Garden Care</h3>
          <p className="text-sm text-gray-400">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[23%] px-5 border-b-2 lg:border-b-0 lg:border-r-2 border-[#46A3581A]">
        <div>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_1.svg?alt=media&token=407c8917-880e-4c1d-a8a8-b377ff7cc61c"
            alt="Plant Renovation"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg mt-4 mb-1">Plant Renovation</h3>
          <p className="text-sm text-gray-400">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[23%] px-5">
        <div>
          <img src="https://firebasestorage.googleapis.com/v0/b/aema-image-upload.appspot.com/o/greenshop%2Ficons%2Ffooter_flower_2.svg?alt=media&token=cc49dd7d-b040-4311-a0a3-310c0aba964a" alt="Watering Garden" />
        </div>
        <div>
          <h3 className="font-bold text-lg mt-4 mb-1">Watering Garden</h3>
          <p className="text-sm text-gray-400">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-[31%]">
        <h3 className="font-bold text-lg">
          Would you like to join newsletters?
        </h3>
        <div className="flex flex-col sm:flex-row items-stretch mt-3 mb-7">
          <input
            type="text"
            className="bg-white py-2 px-4 w-full sm:rounded-l rounded-t sm:rounded-tr-none shadow border border-gray-300"
            placeholder="Enter your email address..."
          />
          <button className="py-2 px-5 text-white font-semibold bg-[#46A358] sm:rounded-r rounded-b sm:rounded-bl-none">
            <a className="text-white" href="/">
              Join
            </a>
          </button>
        </div>
        <p className="text-sm text-gray-400">
          We usually post offers and challenges in newsletter. We're your online
          houseplant destination. We offer a wide range of houseplants and
          accessories shipped directly from our (green)house to yours!
        </p>
      </div>
    </div>
  );
};

export default Feature;
