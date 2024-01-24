import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

function ItemListContainer({ greeting, products }) {
  return (
    <div>
      {/* Mostrar el saludo dentro del componente */}
      <div className="bg-white flex flex-wrap"> {/* Add the flex and flex-wrap classes here */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {greeting}
          </h2>
          <div className="mt-6 flex justify-between flex-wrap gap-x-4 gap-y-4">
            {products.map((item) => (
              <div key={item.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 mb-10">
                <div className="group relative">
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <Link to={`/item/:${item.id}`}>
                      <img
                        src={item.thumbnail}
                        alt="Front of men&#039;s Basic Tee in black."
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </Link>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span aria-hidden="true" className="absolute inset-0"></span>
                          {item.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                    </div>
                    <p className="text-sm font-medium text-gray-900">{item.price}</p>
                  </div>
                </div>
                <div className="buttons items-center my-6 w-[100px] h-[40px]">
                  <ItemCount products={item} />
                  {/*<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Comprar</button>*/}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default ItemListContainer;
