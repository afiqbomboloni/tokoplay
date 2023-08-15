
import { useSearch } from "../../../Contexts/SearchContext";

const Navbar = () => {
  const { searchKeyword, setSearchKeyword } = useSearch();
  
    return (
        <nav className="bg-white border-gray-200 sticky top-0 pt-2 z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://tokopedia.com/" className="flex items-center">
            <img
              src="https://www.cdnlogo.com/logos/t/96/tokopedia.svg"
              className="h-8 mr-3"
              alt="Tokopedia Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap"></span>
          </a>
          <div className="flex md:order-2 md:-mr-8">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              class="md:hidden text-green-500 hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-200 focus:ring-green-700 rounded-lg text-sm p-2.5 mr-1"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>
            <div className="flex md:order-2 items-center" data-collapse-toggle="navbar-search">
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-green-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 pl-10 text-sm text-green-900 border border-green-300 rounded-lg bg-white focus:ring-green-500 focus:border-green-500"
                  placeholder="Cari Berdasarkan Judul"
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                />
              </div>
            </div>
            <div
              class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-search"
            >
              <div class="relative mt-3 md:hidden">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Fitur ini Akan Hadir"
                />
              </div>
            </div>
              <div class="md:ml-4 order-last flex items-center">
              
              <img
                class="w-8 h-8 rounded-full"
                src="https://www.wellpower.org/wp-content/uploads/2017/12/placeholder-man.png"
                alt=""
              />
              <span class="ml-2 text-sm font-light hidden md:inline">
                myusername
              </span>
            </div>
            
          </div>
        </div>
        <div className="flex items-center justify-center py-4 md:py-2 flex-wrap">
          <button
            type="button"
            className="text-white hover:text-white border border-green-600 bg-green-700 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-sm md:text-base font-medium px-3 py-2 md:px-5 md:py-2.5 text-center mr-3 mb-3"
          >
            Live
          </button>
          <button
            type="button"
            className="text-green-700 hover:text-white border border-gray-200 hover:border-green-200 hover:bg-green-700 bg-white focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-sm md:text-base font-medium px-3 py-2 md:px-5 md:py-2.5 text-center mr-3 mb-3"
          >
            Official Store
          </button>
          <button
            type="button"
            className="text-green-700 hover:text-white border border-gray-200 hover:border-green-200 hover:bg-green-700 bg-white focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-sm md:text-base font-medium px-3 py-2 md:px-5 md:py-2.5 text-center mr-3 mb-3"
          >
            Tips & Rekomendasi
          </button>
          <button
            type="button"
            className="text-green-700 hover:text-white border border-gray-200 hover:border-green-200 hover:bg-green-700 bg-white focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-sm md:text-base font-medium px-3 py-2 md:px-5 md:py-2.5 text-center mr-3 mb-3"
          >
            Promo
          </button>
          <button
            type="button"
            className="text-green-700 hover:text-white border border-gray-200 hover:border-green-200 hover:bg-green-700 bg-white focus:ring-4 focus:outline-none focus:ring-green-300 rounded-full text-sm md:text-base font-medium px-3 py-2 md:px-5 md:py-2.5 text-center mr-3 mb-3"
          >
            Terbaru
          </button>
        </div>
      </nav>
    )
}

export default Navbar;