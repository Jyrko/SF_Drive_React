import React from 'react';

import '~/styles/authed_user/car_search.scss';
import '../../../node_modules/react-date-range/dist/styles.scss';
import '../../../node_modules/react-date-range/dist/theme/default.scss';

export default function CarSearch(props) {
  return (
    <section className="rent_car_search">
      <h2>Арендуйте Автомобиль</h2>
      <form className="rent_car_search_form">
        <input type="text" placeholder="Местоположение"/>
        <input type="date" placeholder="Период аренды"/>
        <input type="text" placeholder="Категория"/>
        <button type="submit">Найти</button>
      </form>
    </section>
  )
}
