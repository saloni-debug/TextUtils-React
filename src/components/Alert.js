import React from 'react'

export default function Alert(props) {
    const capitalize = (word) => {
        let lowerCase = word.toLowerCase();
        return lowerCase.charAt(0).toUpperCase()+lowerCase.slice(1);
    }
    return (
        props.alert && <div className="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
    )
}
