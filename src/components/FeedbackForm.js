import React from 'react';

const FeedbackForm = () => {
    return (
        <div className="feedback">
            <h1 className="qst2">Форма заказа обратного звонка</h1>
            <form className="feedback_form" action="#">
                <input type="text" name="name" id="name" placeholder="Имя" className="input" required />
                <input type="email" placeholder="Введите свой E-mail" name="email" className="input" required />
                <input type="tel" name="tel" id="tel" placeholder="Телефон" className="input" required />
                <input type="text" name="place" id="place" placeholder="Какая тема Вас интересует?" className="input" />
                <button type="submit" className="qst_btn">Отправить вопрос!</button>
            </form>
        </div>
    );
};

export default FeedbackForm;
