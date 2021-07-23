import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../nav/Header';
import Footer from '../Footer';

import '~/styles/base_about.scss';
import validateUser from "~/functions/validateUser";

import aboutUs from '~/assets/svg/about-us.svg';
import ellipse9 from '~/assets/img/team/ellipse9.jpg';
import ellipse10 from '~/assets/img/team/ellipse10.jpg';
import ellipse11 from '~/assets/img/team/ellipse11.jpg';
import ellipse12 from '~/assets/img/team/ellipse12.jpg';
import ellipse13 from '~/assets/img/team/ellipse13.jpg';
import ellipse14 from '~/assets/img/team/ellipse14.jpg';

const About = (props) => {
  const [isLogined, setIsLogined] = useState(false);

  useEffect(async () => {
    const isValid = await validateUser();
    setIsLogined(isValid);
    console.log("Home logined - " + isValid);
  }, [])

  return (
    <>
      { isLogined ?
        <Redirect to="/authed" />
        :
        <>
          <div className="About">
            <Header />
              <section id="about_us">
              <img src={aboutUs} className="about-us-img" alt="About us" />
              <h1>О нас</h1>
              <p>Это учебный проект, созданный с целью получения боевого опыта в разработке<br /> настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга,<br /> в котором можно не только арендовать автомобили, но и сдавать их в аренду.</p>
            </section>
          <section id="contacts">
            <h2>Контакты</h2>
            <div className="wrapper_contacts">
              <div>
                <p>Электронная почта</p>
                <p>drive@skillfactory.com</p>
              </div>
              <div>
                <hr className="solid" />
              </div>
              <div>
                <p>Телефон</p>
                <p>+7 912 123-45-67</p>
              </div>
            </div>
          </section>
          <section id="team">
            <h2>Команда</h2>
            <div className="wrapper_team_row">
                <div>
                  <img className="teamworker_photo" src={ellipse9} alt="Иван Иванов" />
                  <h3>Иван Иванов</h3>
                  <div>CEO</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse10} alt="Алексей Смирнов" />
                  <h3>Алексей Смирнов</h3>
                  <div>Frontend-разработчик</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse11} alt="Алексей Смирнов" />
                  <h3>Денис Ярцев</h3>
                  <div>Backend-разработчик</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse12} alt="Николай Морозов" />
                  <h3>Николай Морозов</h3>
                  <div>Дизайнер</div>
                </div>
             </div>

             <div className="wrapper_team_row">
                <div>
                  <img className="teamworker_photo" src={ellipse13} alt="Ирина Деева" />
                  <h3>Ирина Деева</h3>
                  <div>Копирайтер</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse14} alt="Мария Стрелкова" />
                  <h3>Мария Стрелкова</h3>
                  <div>SMM</div>
                </div>
              </div>
          </section>
          <section id="team_mobile">
            <h2>Команда</h2>
            <div className="wrapper_team_row">
                <div>
                  <img className="teamworker_photo" src={ellipse9} alt="Иван Иванов" />
                  <h3>Иван Иванов</h3>
                  <div>CEO</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse10} alt="Алексей Смирнов" />
                  <h3>Алексей Смирнов</h3>
                  <div>Frontend-разработчик</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse11} alt="Алексей Смирнов" />
                  <h3>Денис Ярцев</h3>
                  <div>Backend-разработчик</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse12} alt="Николай Морозов"/>
                  <h3>Николай Морозов</h3>
                  <div>Дизайнер</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse13} alt="Ирина Деева" />
                  <h3>Ирина Деева</h3>
                  <div>Копирайтер</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse14} alt="Мария Стрелкова" />
                  <h3>Мария Стрелкова</h3>
                  <div>SMM</div>
                </div>
              </div>
          </section>
            <Footer />
          </div>
      </>
    }
    </>
  );
}

export default About;
