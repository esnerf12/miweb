import { AddToCartIcon } from './Icons.jsx'
import './Products.css'

export function Products ({ products }) {
    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    <><li key={product.id}>
                        <img
                            src={product.thumbnail}
                            alt={product.title} />
                    </li><div>
                            <strong>{product.title}</strong>
                        </div><div>
                            <button>
                                <AddToCartIcon></AddToCartIcon>
                            </button>
                        </div></>
                })
                }
            </ul>
        </main>
    )
}
