import React from 'react';
import './App.css';

// 컴포넌트는 하나의 태그를 반환해야 한다.
// class x className o
// 자바스크립트를 jsx문법 내에 작성하기 위해서는 {}로 감싸주어야 한다.
// style 속성에 속성값을 변경하기 위해 자바스크립트 객체 형태로 전달해야 한다. 따라서 중괄호가 두개 있는것 처럼 보일 수 있다.

// 기본적인 것들을 잘 알고 있는가?
// HTML로 돔요소를을 만들어 나가는 방법?
// CSS로 스타일을 결정할 수 있는지?
// JS를 이용해 브라우저에서 어떻게 돔요소를 만들고 사용자의 이벤트를 듣고 내가 원하는 걸 수행할 수 있는지?

// 컴포넌트라면 jsx 확장자를 사용하길 추천한다.

function AppJSX() {
  const text: string = "하이!";
  const list: string[] = ['우유','딸기','바나나']
  return (
    <>
      <h1 style={{color:"orange"}}>{`Hello! ${text}`}</h1>
      <h2>{text}</h2>
      <ul>
        {list.map(function(item){
          return <li>{item}</li>
        })}
      </ul>
    </>
  );
}

export default AppJSX;
