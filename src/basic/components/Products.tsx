import React, {useEffect, useState} from 'react';
type products = {
    id?:number,
    name:string,
    price:string
};

export default function Products() {
    const [products, setProducts] = useState<products[]>([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked(prev => !prev);

    useEffect(() => {
        fetch(`data/${checked ? 'sale_': ''}products.json`)
            .then(res => res.json())
            .then(data => {
                console.log("데이터를 잘 받아옴!")
                setProducts(data);
            });
        return () => {
            console.log('깨끗하게 청소하는 일을 합니다.')
        }
    }, [checked]);

  return (
    <>
        <input id="checkbox" type="checkbox" checked={checked} onChange={handleChange}/>
        <label htmlFor="checkbox">Show Only Sale</label>
        <ul>
            {products.map((product) => (
                <li key={product.id}>
                    <article>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                    </article>
                </li>
                )
            )}
        </ul>
    </>
  );
}