import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
type products = {
    id?:number,
    name:string,
    price:string
};

type error = undefined | string

export default function Products() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<error>();
    const [products, setProducts] = useState<products[]>([]);
    const [checked, setChecked] = useState<boolean>(false);
    const handleChange = () => setChecked(prev => !prev);

        useEffect(() => {
            setLoading(true);
            setError(undefined);
            fetch(`data/${checked ? 'sale_': ''}products.json`)
                .then(res => res.json())
                .then(data => {
                    console.log("데이터를 잘 받아옴!")
                    setProducts(data);
                })
                .catch(e => setError('에러가 발생했음'))
                .finally(()=> setLoading(false))
            return () => {
                console.log('깨끗하게 청소하는 일을 합니다.')
            }
        }, [checked]);

        if(loading) return <p>Loading...</p>
        if(error) return <p>{error.toString()}</p>
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