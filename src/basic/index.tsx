import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppProducts from "./AppProducts";
    // 렌더 순서
    // 1. id가 root인 div태그를 가진 html파일을 서버로부터 다운받게 됩니다.
    // 2. 그 후 소스코드가 모두 다운되게 되면 브라우저상에서 아이디가 root인 요소를 찾아 root라는 가상의 요소를 만듭니다.
    // 3. 여기에 App이라는 컴포넌트를 연결해준다.
    // 4. 리액트가 내부적으로 App이라는 컴포넌트에 들어가서 리턴되는 JSX문법을 확인합니다.
    // 5. 그 후 JSX문법에 따라서 브라우저에서 제공하는 createElement메서드를 이용해 순서대로 html태그를 만들어줍니다.


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    // StrictMode는 보다 엄격한 개발 환경에서 작업할 수 있도록 해준다.
    // 배포 단계가 되면 저절로 기능을 멈추게 된다.
  <React.StrictMode>
    <AppProducts />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
