import { useParams } from "react-router-dom";
import { useGetProductById } from "../hooks/useProducts";

export const ItemDetailContainer = () => {
  const { productId } = useParams();
  const {product} = useGetProductById(productId);

  return (
    <div key={product.id} className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/4 mb-10">
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.thumbnail}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </div>
                  <div className="mt-4 flex justify-between">
                    <div>
                      <h3 className="text-sm text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0">
                          </span>
                          {product.title}
                        </a>
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">{product.description}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            </div>
  );
};
