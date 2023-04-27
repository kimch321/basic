import {useEffect, useState} from "react";

type product = {
    id?:number,
    name:string,
    price:string
};
type error = string | undefined;
type useProductsReturn = [
    loading: boolean,
    error: error,
    products: product[],
]

export default function useProducts({salesOnly}: {salesOnly: boolean}): useProductsReturn {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<error>();
    const [products, setProducts] = useState<product[]>([]);
    useEffect(() => {
        setLoading(true);
        setError(undefined);
        fetch(`data/${salesOnly ? 'sale_': ''}products.json`)
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
    }, [salesOnly]);

    return [loading, error, products];
}