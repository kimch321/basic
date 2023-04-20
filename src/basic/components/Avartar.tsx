import React from "react";

type Avatar = {
    image:string;
    isNew?:boolean;
}

export default function Avatar({image, isNew}: Avatar) {
    return(
        <div className={"avatar"}>
            <img
                className={"photo"}
                src={image}
                alt="avatar"/>
 { isNew && <span className={"new"}>NEW</span> }
        </div>
    );
}