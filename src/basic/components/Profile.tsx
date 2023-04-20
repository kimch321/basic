import React from 'react';
import Avatar from "./Avartar";

type Profile = {
    image:string;
    name:string;
    title:string;
    isNew?: boolean;
}

export default function Profile({image, name, title, isNew}: Profile) {
    return (
        <div className={"profile"}>
            <Avatar image={image} isNew={isNew} />
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
    );
}