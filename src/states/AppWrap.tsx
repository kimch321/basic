import {ReactNode} from "react";

export default function AppWrap() {
    return (
        <div>
            <Navbar>
                <Avatar
                    image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
                    name="Bob"
                    size={500}
                />
                <p>안녕하세요!</p>
            </Navbar>
        </div>
    )
}

function Navbar ({children}: {children: ReactNode}) {
    return (
        <header style={{ backgroundColor: 'yellow'}}>
            {children}
        </header>
    )
}

type Prop = {
    image: string
    name: string
    size: number
}
function Avatar({ image, name, size }: Prop) {
    return (
        <div>
            <img
                src={image}
                alt={`${name}`}
                width={size}
                height={size}
                style={{ borderRadius: "50%" }}
            />
        </div>
    )
}