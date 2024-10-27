import section1Image from "../assets/section1.png";
import logo from "../assets/news-report.png";

function MainSection() {
  return (
    <>
      <section className=" w-full pb-14">
        <header className="bg-gradient-to-r from-red-100 to-indigo-200 h-[600px] w-full absolute -z-20">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex space-x-1">
              <img src={logo} alt="loading" width={"30px"} />
              <div className="text-2xl font-bold font-serif max-sm:hidden">
                uiAid
              </div>
            </div>
            <nav className="">
              <ul className="flex space-x-5 max-sm:flex-col max-sm:space-x-0">
                <li>
                  <a href="#" className="hover:text-blue-900 cursor-pointer">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500">
                    Research
                  </a>
                </li>
              </ul>
            </nav>

            <button className=" bg-transparent text-violet-600 border border-violet-600 py-2 px-4 rounded-3xl">
              Login
            </button>
          </div>
        </header>
        <div className="container mx-auto px-6 text-center pt-32 pb-20">
          <h1 className="text-4xl font-bold text-gray-800 max-sm:text-2xl">
            Effortlessly Create High-Quality Articles with Our AI Article
            Generator
          </h1>
          <p className="mt-4 text-lg">
            AI has the potential to revolutionize the way we live and work, from
            improving healthcare and transportation to enhancing the way.
          </p>
          <div className="mt-8">
            <button className=" bg-violet-600 text-white px-4 py-2 rounded-3xl mr-4">
              Get Started
            </button>
            <button className="bg-white text-violet-600 border border-violet-600 px-4 py-2 rounded-3xl">
              Explore
            </button>
          </div>
        </div>

        <div className="w-full flex justify-around px-4">
          <img src={section1Image} alt="loading" />
        </div>
      </section>
    </>
  );
}

export default MainSection;
