
import ProductCard from '../../components/ui/ProductCard'
import Title from '../../components/ui/Title'
import { productsData } from '../../data/productsData'

const LatestProducts = () => {
  return (
    <div  className='lp-container'>
    <Title
    title="Productos Destacados"
    description= "Se muestran 4 de 7 disponibles"
    href="/shop"
    />

  <div className="lp-grid">
        {productsData.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
  </div>

    </div>
  )
}

export default LatestProducts
