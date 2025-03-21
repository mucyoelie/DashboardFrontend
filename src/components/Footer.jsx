
const Footer = () => {
  return (
    <footer className="bg-gray-100 text-white px-5 w-full relative z-20 border-t-2 border-gray-200 dark:border-gray-900 dark:bg-black mt-[4rem] ">
      <div className="max-w-4xl mx-30 text-center sm:text-end font-semibold flex flex-col w-full">
        <p className="mt-6 text-lg text-gray-900 dark:text-white">
          Copyright &copy; {new Date().getFullYear()} MISTA LLC - 
          <span className="text-[#006242]"> All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
