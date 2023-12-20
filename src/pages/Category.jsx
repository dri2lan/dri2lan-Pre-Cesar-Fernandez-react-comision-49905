import { useParams } from 'react-router-dom'
import ItemLisContainer from '../components/ItemListContainer'

export const Category = () => {
    const {id} = useParams();
    const { products } = useGetProductByCategory(id)

return (
  
    <ItemListContainer products = {products} />
  )
}   
