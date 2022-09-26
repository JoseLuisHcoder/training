import ProductPurchase from './ProductPurchase';


const PurchasesCard = ({purchase}) => {
    console.log(purchase);
  return (
    <article>
        <h3>{purchase.createdAt}</h3>
        <div>{
            purchase.cart.products.map(product =>(
                <ProductPurchase key={product.id} 
                product={product} />
            ))
            }
        </div>
    </article>
    
  )
}

export default PurchasesCard