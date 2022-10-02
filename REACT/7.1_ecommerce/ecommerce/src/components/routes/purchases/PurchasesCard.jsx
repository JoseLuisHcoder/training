import ProductPurchase from './ProductPurchase';


const PurchasesCard = ({purchase}) => {
    // console.log(purchase);
  return (
    <article>
        <h3>{purchase.createdAt}</h3>
        <ul>{
            purchase.cart.products.map(product =>(
                <ProductPurchase key={product.id} 
                product={product} />
            ))
            }
        </ul>
    </article>
    
  )
}

export default PurchasesCard