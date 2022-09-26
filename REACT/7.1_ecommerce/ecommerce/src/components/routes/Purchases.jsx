import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PurchasesCard from './purchases/PurchasesCard'

const Purchases = () => {
  
  const [purchases, setPurchases] = useState()
  useEffect(() => {
      const URL = 'https://ecommerce-api-react.herokuapp.com/api/v1/purchases'
      axios.get(URL, getConfig())
          .then(res => setPurchases(res.data))
          .catch(err => console.log(err))
      }, [])
      console.log(purchases);


  return (
    <div>
      {
            purchases?.map(purchase => (
                <PurchasesCard key={purchase.id} purchase= {purchase} />
            ))
        }
    </div>
  )
}

export default Purchases