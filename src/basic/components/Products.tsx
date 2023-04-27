import React, {useState} from 'react';
import useProducts from "../../hooks/use-products";

export default function Products() {
    const [checked, setChecked] = useState<boolean>(false);
    const [loading, error, products] = useProducts({salesOnly: checked});
    const handleChange = () => setChecked(prev => !prev);

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

// 커스텀훅을 사용하면 호출컴포넌트 마다 별개의 샌드박스가 만들어 진다??
// 커스텀 훅을 사용하는 이유: 각각의 컴포넌트에서 해당 훅의 인스턴스가 만들어진다는 것.
// 커스텀 훅은 내부에서 리액트의 훅 API를 사용하는 함수입니다. 가독성을 위해 접두사 use를 사용하는 것이 권장됩니다.
// 훅 규칙: React의 훅 API를 안전하게 사용하기 위한 규칙
// eslint-plugin-react-hooks: 1. 2. 규칙을 강제해주는 플러그인(creae react-app에 포함되어 있다.)
// 1. 훅은 함수 컴포넌트 내에서만 호출할 수 있다.
// 2. 훅은 컴포넌트의 최상위 레벨에서만 호출되어야 한다.
// 2번 규칙을 따르면 렌더링시에 동일한 순서로 Hook이 호출되는 것이 보장됩니다.
