import React from "react";

export function AdminLayout(props){
    const {children} = props;

    return (
        <div>
            <h1>Se esta usando el Admin Layout</h1>
            {children}
        </div>
    );
}