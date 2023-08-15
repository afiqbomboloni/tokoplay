const ProductList= ({products}) =>{
  // console.log(products)
    return (
<aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-6 overflow-y-auto bg-green-50">
        

          <ul className="space-y-2 font-medium">
            {products.map((product) => (
            <li key={product.productId}>
            <div className="relative">
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-green-300 group"
              >
                <img
                  className="max-w-40 h-60 object-cover rounded-lg"
                  src={product.linkProduct}
                  alt=""
                />
                <div>
                <span className="absolute text-sm text-gray-900 bottom-7 left-5 bg-gray-400 rounded p-0.5">
                  {product.title}
                </span>
                <span className="absolute text-xs text-red-900 bottom-3 left-5 bg-orange-200 p-[1px]">
                  Rp. {product.price}
                </span>
                </div>
               
              </a>
            </div>
          </li>
            ))}


          </ul>
        </div>
      </aside>
    )
}

export default ProductList