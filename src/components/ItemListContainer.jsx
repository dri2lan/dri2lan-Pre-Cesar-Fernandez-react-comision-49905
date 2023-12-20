import { Link } from "react-router-dom";


function ItemListContainer({ greeting, products }) {
  return (
    <div>
      {/* Mostrar el saludo dentro del componente */}
      <div className="bg-white flex flex-wrap"> {/* Add the flex and flex-wrap classes here */}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {greeting}
          </h2>
            <div className="mt-6 flex justify-between flex-wrap">
            {products.map((data) =>{

            return(
            <div key={data.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 mb-10">
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <Link to={`/item/:${data.id}`}><img
                    src={data.thumbnail}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"/></Link>
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0">
                          </span>
                          {data.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{data.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{data.price}</p>
                </div>
              </div>
            </div>
        );
        })}
        </div>
      </div>
    </div>
    </div>
  );
}

export default ItemListContainer;
