import React from 'react';
import Card from './Card';
import f3Image from '../media/f3.png';
import f4Image from '../media/f4.png';
import f5Image from '../media/f5.png';

const Cards = () => {
    return (
        <div className="container">
            <div className="cards">
                <h1 className="qst">Что вам необходимо?</h1>
                <div className="wrapper">
                    <Card
                        image={f3Image}
                        title="Первый блок"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <Card
                        image={f4Image}
                        title="Второй блок"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                    <Card
                        image={f5Image}
                        title="Третий блок"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                    />
                </div>
            </div>
        </div>
    );
};

export default Cards;
