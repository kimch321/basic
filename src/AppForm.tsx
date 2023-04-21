import {useState} from "react";

export default function AppForm() {
    // 리액트의 철학은, ui의 업데이트는 상태와 prop의 변경으로 부터 일어나야 한다.
    // 입력폼은 내부적으로 상태가 업데이트 되지 않아도, 사용자의 입력을 통해 UI상에서
    // 변경된 내용이 보이게 된다.
    // 이런 컴포넌트를 UNCONTROLLED COMPONENT라고 한다.

    // 이 경우 state를 이용해서 controlled component로 바꿔줘야 한다.

    // **
    // 일부 컴포넌트는 사용자 입력에 반응하지 않으며, 오로지 UI를 표시하기만 합니다.
    // 이러한 컴포넌트는 controlled component나 uncontrolled component가 될 필요가 없습니다.
    // 또한, 일부 컴포넌트는 controlled component와 uncontrolled component의 중간에 위치할 수 있습니다.
    // 예를 들어, input 엘리먼트에 defaultValue 속성을 사용하면 초기값을 설정할 수 있지만, 이후 사용자의 입력에 따라 input 엘리먼트의 값이 업데이트됩니다.
    // 이러한 컴포넌트는 semi-controlled component라고도 부릅니다.
    const [form, setForm] = useState({name: "", email: ""});
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({...form, [name]: value});
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름:</label>
            <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}/>
            <label htmlFor="email">이메일:</label>
            <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}