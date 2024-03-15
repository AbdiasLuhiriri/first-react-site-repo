import React from "react";

const Fruits = ({img, title, caption}) => {
    return (
        <div className="fruits">
            <img className="fruits_img" src={img} alt={title} />
            <h3 className="fruits_title">{title}</h3>
            <p className="fruits_caption">{caption}</p>
        </div>
    );
};

export default Fruits;