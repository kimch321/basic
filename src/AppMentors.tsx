import React, { useState } from 'react';

type mentor = {
    name: string | null;
    title: string;
}
type person = {
    name: string;
    title: string;
    mentors: mentor[];
}

export default function AppMentor() {
  const [person, setPerson] = useState<person>({
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
  });

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
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`)! as string | null;
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`)! as string | null;
        setPerson((person) => ({...person,mentors: person.mentors.map((mentor) => {
            if(mentor.name === prev) return {...mentor, name: current};
            return mentor;
            })}))
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button>멘토 추가하기</button>
      <button>멘토 삭제하기</button>
    </div>
  );
}
