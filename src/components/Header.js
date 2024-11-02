import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <img src={require('../media/logo.png')} alt="Logo" />
                <div className="wrapper">
                    <div className="herotext">
                        <h2>
                            С помощью нас <br /> вы можете создать то, о чём <br />
                            <h1>мечтаете!</h1>
                        </h2>
                        <h3>
                            Наши возможности + опыт позволяют вам достичь огромного успеха. Мы верим в вас! И знаем это на все 100%.
                            Вас не остановить!
                        </h3>
                        <button className="more_btn">Узнать больше...</button>
                    </div>
                    <img src={require('../media/header-img.png')} alt="Header" style={{ paddingLeft: '10rem' }} />
                </div>
            </div>
        </header>
    );
};

export default Header;
