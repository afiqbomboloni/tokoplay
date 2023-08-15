import { Link } from "react-router-dom";
const PageNotFound = () => {
    return (
        <div>
        <section class="bg-white">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
              <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-green-600">
                404
              </h1>
              <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">
                Ada yang salah
              </p>
              <p class="mb-4 text-lg font-light text-gray-500">
                Maaf kamu tidak bisa ngapa-ngapain disini, coba balik lagi{" "}
              </p>
              <Link
                to="/"
                class="inline-flex text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
              >
                Kembali ke Homepage
              </Link>
            </div>
          </div>
        </section>
      </div>
    )
}

export default PageNotFound;