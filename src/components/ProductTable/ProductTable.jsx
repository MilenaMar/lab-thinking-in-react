import React, {Component} from 'react';
import ProductRow from '../ProductRow/ProductRow'


export default class ProductTable extends Component {
render (){
    const product = this.props.data.data
    return (
        <div>
          <table>
         <tr>
            <th>Name</th>
            <th>Price</th>
         </tr>
         <tbody>
         {product.map((el) => 
        ( <ProductRow  key={el.id}{...el} />  ))}
         </tbody>
      </table>

        
      </div>
    )
}
}