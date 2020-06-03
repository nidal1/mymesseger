import React from 'react'

const Contact = (props) => {
    let activeClass ;
    props.isActive ? activeClass = "activeContact" : activeClass = "";
    return (
        <li 
        className={`list-group-item d-flex align-items-center ${activeClass}`}
        onClick={props.clicked}>
            <img src={props.imgSrc} className="rounded-circle mr-2" alt="..." />
            <div className="d-flex justify-content-between align-items-center flex-grow-1">
                <p>{props.contactName}</p>
                <span className="badge badge-primary badge-pill">{props.totalUnreadMsg}</span>
            </div>
        </li>
    )
}

export default Contact;
