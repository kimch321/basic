type Mentor = {
    name?: string | null;
    title?: string | null;
}
type Person = {
    name: string;
    title: string;
    mentors: Mentor[];
}

type Action = {
    type: 'updated' | 'added' | 'deleted';
    prev?: string | null;
    curr?: string | null;
    name?: string | null;
    title?: string | null;
}

export default function personReducer(person: Person, action: Action): Person {
    switch(action.type) {
        case 'updated': {
            const { prev, curr } = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor) => {
                    if(mentor.name === prev) return {...mentor, name: curr};
                    return mentor;
                }),
            };
        }
        case 'added': {
            const { name, title } = action;
            return {...person,
                mentors: [...person.mentors, { name, title }],
            }
        }
        case 'deleted': {
            const { name } = action;
            return {
                ...person,
                mentors:person.mentors.filter((mentor) => mentor.name !== name)
            }
        }
        default: {
            throw Error(`알수없는 액션 타입입니다: ${action.type}`);
        }
    }
}