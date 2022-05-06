import React, {useState, useEffect} from 'react';
import { Route, Navigate } from 'react-router-dom';

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
        <Navigate replace to="/authed" />
        :
        <>
          <div className="About">
            <Header />
              <section id="about_us">
              <img src={aboutUs} className="about-us-img" alt="About us" />
              <h1>About us</h1>
              <p>This is a tutorial project designed to get hands-on experience in developing a<br />real live web application. This service imitates the work of carsharing</p>
            </section>
          <section id="contacts">
            <h2>Contacts</h2>
            <div className="wrapper_contacts">
              <div>
                <p>Email</p>
                <p>info@skilldrive.com</p>
              </div>
              <div>
                <hr className="solid" />
              </div>
              <div>
                <p>Phone</p>
                <p>+380(99)-999-09-90</p>
              </div>
            </div>
          </section>
{/*          <section id="team">
            <h2>Команда</h2>
            <div className="wrapper_team_row">
                <div>
                  <img className="teamworker_photo" src={ellipse9} alt="Иван Иванов" />
                  <h3>Ivan Ivanov</h3>
                  <div>CEO</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse10} alt="Алексей Смирнов" />
                  <h3>Alex Smirnechenko</h3>
                  <div>Frontend-developer</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse11} alt="Алексей Смирнов" />
                  <h3>Den Yarchev</h3>
                  <div>Backend-developer</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse12} alt="Николай Морозов" />
                  <h3>Nikolay Moroz</h3>
                  <div>Designer</div>
                </div>
             </div>

             <div className="wrapper_team_row">
                <div>
                  <img className="teamworker_photo" src={ellipse13} alt="Ирина Деева" />
                  <h3>Irina Avdeeva</h3>
                  <div>Copyrighter</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse14} alt="Мария Стрелкова" />
                  <h3>Maria Strekovko</h3>
                  <div>SMM</div>
                </div>
              </div>
          </section>
          <section id="team_mobile">
            <h2>Team</h2>
            <div className="wrapper_team_row">
                <div>
                  <img className="teamworker_photo" src={ellipse9} alt="Иван Иванов" />
                  <h3>Ivan Ivanov</h3>
                  <div>CEO</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse10} alt="Алексей Смирнов" />
                  <h3>Alex Smirnechenko</h3>
                  <div>Frontend-developer</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse11} alt="Алексей Смирнов" />
                  <h3>Den Yarchev</h3>
                  <div>Backend-developer</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse12} alt="Николай Морозов"/>
                  <h3>Nikolay Moroz</h3>
                  <div>Designer</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse13} alt="Ирина Деева" />
                  <h3>Irina Avdeeva</h3>
                  <div>Copyrighter</div>
                </div>
                <div>
                  <img className="teamworker_photo" src={ellipse14} alt="Мария Стрелкова" />
                  <h3>Maria Strekovko</h3>
                  <div>SMM</div>
                </div>
              </div>
          </section>*/}
            <Footer />
          </div>
      </>
    }
    </>
  );
}

export default About;
