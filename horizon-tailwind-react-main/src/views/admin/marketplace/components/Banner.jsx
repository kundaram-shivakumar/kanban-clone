
const Banner1 = () => {
  return (
        <div className="mt-[36px] flex items-center justify-between gap-4 sm:justify-start 2xl:gap-10">
          <button className="text-black linear rounded-md bg-white px-12 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70 border">
            Filter
          </button>
          <button className="text-black linear rounded-md bg-white px-12 py-2 text-center text-base font-medium transition duration-200 hover:!bg-white/80 active:!bg-white/70 border">
            Today
          </button>
        </div>
  );
};

export default Banner1;
