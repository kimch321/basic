import React, {memo, useCallback, useMemo, useReducer} from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    // 컴포넌트가 호출될때 props라는 객체는 새로 만들어진다. 따라서 현재 버튼의 이벤트로 등록된 함수들은 props 형태로
    // 컴포넌트에 전달되고 있다. 따라서 새롭게 만들어지는 객체에 매번 등록되는 것을 피할 수 없다.
    // useCallback을 사용하면, 아무리 많이 호출되더라도 의존배열의 원소의 값이 변경되지 않는다면, 새로운 객체에 등록되지 않는다.
    // useCallback은 함수 자체를 캐시하여 반환한다. 즉 함수를 캐싱해서 필요할 때마다, 그 함수를 그대로 사용한다.

    const handleUpdate = useCallback(() => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const curr = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({type: 'updated', prev, curr});
    }, [])

    const handleAdd = useCallback(() => {
        const name = prompt(`멘토의 이름은?`);
        const title = prompt(`멘토의 직함은?`);
        dispatch({type: 'added', name, title});
    }, []);

    const handleDelete = useCallback(() => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        dispatch({type: 'deleted', name});
    }, []);

    return (
        <div>
            <h1>
                {person.name}는 {person.title}
            </h1>
            <p>{person.name}의 멘토는:</p>
            <ul>
                {person.mentors.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>
            <Button text="멘토의 이름을 바꾸기" onClick={handleUpdate}></Button>
            <Button text="멘토 추가하기" onClick={handleAdd}></Button>
            <Button text="멘토 삭제하기" onClick={handleDelete}></Button>
        </div>
    );
}

// 이거 기억했다가 아무리 프롭 객체가 새로 만들어지더라도, 객체의 값 자체가 동일하다면
// 다시 렌더링 하지 말고 기억해줘.
const Button = memo(({text, onClick}: { text: string, onClick: () => void }) => {
    console.log('Button', text, 're-rendering 😜');
    // useMemo: 렌더링 될때 처음에 한번, 그리고 의존배열의 값이 변경될때 만 계산된다. 즉, 의존배열의 값이 변경되지 않는다면, 그 반환값을 재사용한다.
    // 따라서 만약 void를 반환하고 함수의 실행과정에서 원하는 작업을 하는 경우. 당연히 그 작업은 의존배열이 변경되지 않는 이상 다시 실행되지 않는다.
    // 만약 복잡한 ui를 반환하는 컴포넌트라면, 비록 컴포넌트가 다시 렌더링 될 때 가상의 돔의 내용이 변하지 않아서 리얼 돔에
    // 변경사항이 반영되지 않는다고 하더라도, 복잡한 ui를 다시 가상의 돔으로 만들어서 비교하는 것 조차 낭비라고 생각한다면...
    const result: number = useMemo(() => calculateSomething(), []);
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px',
                margin: '0.4rem',
            }}
        >
            {text}
        </button>
    );
})

function calculateSomething(): number {
    for (let i = 0; i < 10000; i++) {
        console.log("계산중 !!")
    }
    return 10;
}

const initialPerson = {
    name: '엘리',
    title: '개발자',
    mentors: [
        {
            name: '밥',
            title: '시니어개발자',
        },
        {
            name: '제임스',
            title: '시니어개발자',
        },
    ],
};

