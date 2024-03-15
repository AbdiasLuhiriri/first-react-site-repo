import React from "react";
import Fruits from "./Fruits";

const Collection = () => {
    return (
        <div>
            <Fruits img={"https://neuralia.life/wp-content/uploads/2022/06/fruits-bons-pour-la-sante--1536x864.png.webp"} title={"Cocktail fruits"} caption={"A Nice fresh cocktail of fruits."}/>
            <Fruits img={"https://www.fortiffsere.fr/wp-content/uploads/2023/04/Fruits-pour-reduire-le-diabete.jpg"} title={"Passion fruits"} caption={"A garbage of passion fruits."}/>
            <Fruits img={"https://i.notretemps.com/1400x787/smart/2023/09/01/illustration-de-fruits.jpeg"} title={"Fresh fruits"} caption={"A Nice fresh garbage of fruits."}/>
        </div>
    );
};

export default Collection;