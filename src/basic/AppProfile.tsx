import React, {MouseEventHandler} from 'react';
import './App.css';
import Profile from "./components/Profile";
import Avatar from "./components/Avartar";

export default function AppProfile() {
    const handleClick = (e:any): void => {
        console.log(e);
        alert("버튼 클릭됨")
    }
    return (
        <>
            <button onClick={handleClick}>버튼</button>
            <Avatar image={"https://images.unsplash.com/photo-1681844931449-e0992a27d157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"} isNew={true}/>
            <Profile
            image="https://images.unsplash.com/photo-1681844931449-e0992a27d157?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
            name="James Kim"
            title="FE 개발자"
            isNew={true}
            />
            <Profile
                image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
                name="James Kim"
                title="FE 개발자"
            />
            <Profile
                image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                name="James Kim"
                title="FE 개발자"
            />

        </>
    );
}