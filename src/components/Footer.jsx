

const Footer = () => {
  return (
   
        <footer className="bg-gray-100 text-white  px-5 w-full relative z-20 border-t-2 border-[#B0B0B0]">
            <div className="max-w-4xl mx-40 text-end font-semibold flex flex-col">
            <p className="mt-6 text-lg sm:text-lg text-[#003366]">
          &copy; {new Date().getFullYear()} Developed by <span className="text-[#006242]">mucyo.web</span>
        </p>
            </div>
    </footer>
  )
}

export default Footer
