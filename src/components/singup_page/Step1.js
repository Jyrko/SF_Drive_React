import React from 'react';

import '~/styles/singup_page/step1.scss';
const Step1 = (props) => {
  return (
    <>
    <form id="step1">
      <h3>Информация о вас</h3>
      <div className="form_wrapper">
        <div>
          <label htmlFor="fullname">ФИО</label>
          <label htmlFor="birthday">Дата рождения</label>
          <label htmlFor="email">Электронная почта</label>
          <label htmlFor="phone">Телефон</label>
        </div>

        <div>
          <input type="text" id="fullname" name="fullname" placeholder="ФИО полностью" />
          <input type="date" id="birthday" name="birthday" value="1970-01-01" />
          <input type="email" id="email" name="email" placeholder="mail@example.com" />
          <input type="tel" id="phone" name="phone" placeholder="+7 900 000 00 00" />
        </div>
      </div>

      <h3>Паспорт</h3>
      <div className="form_wrapper">
        <div>
          <label htmlFor="serial-passport">Серия и номер</label>
          <label htmlFor="date-of-issue-passport">Дата выдачи</label>
          <label htmlFor="issuing-authority">Кем выдан</label>
        </div>

        <div>
          <input type="number" id="serial-passport" name="serial-passport" placeholder="000 000000" />
          <input type="date" id="date-of-issue-passport" name="date-of-issue-passport" value="1970-01-01" />
          <input type="text" id="issuing-authority" name="issuing-authority" placeholder="Название органа выдавшего паспорт" />
        </div>
      </div>

      <h3>Водительское удостовирение</h3>
      <div className="form_wrapper">
        <div>
          <label htmlFor="serial-license">Серия и номер</label>
          <label htmlFor="date-of-issue-license">Дата выдачи</label>
        </div>
        <div>
          <input type="number" id="serial-license" name="serial-license" placeholder="000 000000" />
          <input type="date" id="date-of-issue-license" name="date-of-issue-license" value="1988-01-01" />
        </div>
      </div>
    </form>

    <div className="continue_div">
      <hr />
      <div className="continue_div_wrapper">
        <button type="submit" form="step1">Продолжить</button>
      </div>
    </div>
    </>
  );
}

export default Step1;
