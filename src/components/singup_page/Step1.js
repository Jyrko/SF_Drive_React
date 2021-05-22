import React, {useState, useEffect} from 'react';

import ContinueSingUp from './ContinueSingUp';

const Step1 = (props) => {
  const [fullname, setFullname] = useState("");
  const [birthday, setBirthday] = useState("1970-01-01");
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [serialPassport, setSerialPassport] = useState("")
  const [dateOfIssuePassport, setDateOfIssuePassport] = useState("1970-01-01")
  const [issuingAuthority, setIssuingAuthority] = useState("")
  const [serialLicense, setSerialLicense] = useState("")
  const [dateOfIssueLicense, setDateOfIssueLicense] = useState("1988-01-01")

  const [password, setPassword] = useState("");
  const [passwordReapeat, setPasswordRepeat] = useState("");

  const [isValidFullname, setIsValidFullname] = useState(false);
  const [isValidBirthday, setIsValidBirthday] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [isValidPhone, setIsValidPhone] = useState(false)
  const [isValidSerialPassport, setIsValidSerialPassport] = useState(false)
  const [isValidDateOfIssuePassport, setIsValidDateOfIssuePassport] = useState(false)
  const [isValidIssuingAuthority, setIsValidIssuingAuthority] = useState(false)
  const [isValidSerialLicense, setIsValidSerialLicense] = useState(false)
  const [isValidDateOfIssueLicense, setIsValidDateOfIssueLicense] = useState(false)

  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidPasswordReapeat, setIsValidPasswordRepeat] = useState(false);

  const [isValid, setIsValid] = useState(0);

  const [needToValidate, SetNeedToValidate] = useState(true)

  const FULLNAME_REGEX = /^[a-zA-Zа-яА-Я]{2,15} {1}[a-zA-Zа-яА-Я ]{1,}$/;
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const PHONE_REGEX = /^[+]{1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s0-9]{9,14}$/;

  const SERIAL_REGEX = /^[A-Z]{0,4}[0-9]{6,}$/;
  const ISSUING_AUTHORITY_REGEX = /^[а-яА-Яa-zA-Z0-9 ]{6,}$/;

  const PASSWORD_REGEX = /^[a-zA-Z0-9_-]{8,}$/;

  // 0 - Haven't been checked yet 1 - have been validated and declined 2 - have been validated and confirmed
  let validationStatusCode = 0;

  useEffect(() => {

  }, [])

  function callbackFunction(isValid) {
    SetNeedToValidate(isValid);
    if (needToValidate) {
      // Doing fetch request here //
      console.log("Sending data to the server")
    }

    props.parentCallback(needToValidate, 0);
    console.log("Validation - " + needToValidate);
  }

  function setInvalidStyleInput(target) {
    target.style.opacity = '1';
    target.style.border = '2px solid red';
  }

  function setValidStyleInput(target) {
    target.style.border = '2px solid green';
  }

  function validateData() {
    return isValidFullname && Boolean(birthday) && isValidEmail && isValidPhone && isValidSerialPassport
          && isValidIssuingAuthority && isValidSerialLicense && isValidPassword && isValidPasswordReapeat;
  }

  function onChangePattern(e, setFunc, REGEX, setValidFunc) {
    setFunc(e.target.value);
    if (REGEX.test(e.target.value)) {
      setValidStyleInput(e.target);
      setValidFunc(true);
    } else {
      setInvalidStyleInput(e.target);
      setValidFunc(false);
    }
  }

  function onBirthdayDateChange(e) {
    const targetValue = e.target.value;
    const currentDate = new Date();
    const dateArray = targetValue.split("-").map((current) => Number(current));
    console.log(dateArray);
    setBirthday(targetValue);
  }

  function onPasswordRepeatChange(e) {
    setPasswordRepeat(e.target.value);
    if (e.target.value !== password && isValidPassword === false) {
      setInvalidStyleInput(e.target);
      setIsValidPasswordRepeat(false);
    } else {
      setValidStyleInput(e.target);
      setIsValidPasswordRepeat(true);
    }
  }

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
          <input type="text" id="fullname" name="fullname" onChange={(e) => onChangePattern(e, setFullname, FULLNAME_REGEX, setIsValidFullname)} placeholder="ФИО полностью" />
          <input type="date" id="birthday" name="birthday" onChange={(e) => onBirthdayDateChange(e)} value={birthday} />
          <input type="email" id="email" name="email" onChange={(e) => onChangePattern(e, setEmail, EMAIL_REGEX, setIsValidEmail)} placeholder="mail@example.com" />
          <input type="tel" id="phone" name="phone" onChange={(e) => onChangePattern(e, setPhone, PHONE_REGEX, setIsValidPhone)} placeholder="+38 000 000 00 00" />
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
          <input type="text" id="serial-passport" name="serial-passport" onChange={(e) => onChangePattern(e, setSerialPassport, SERIAL_REGEX, setIsValidSerialPassport)} placeholder="000 000000" />
          <input type="date" id="date-of-issue-passport" name="date-of-issue-passport" onChange={(e) => setDateOfIssuePassport(e.target.value)} value={dateOfIssuePassport} />
          <input type="text" id="issuing-authority" name="issuing-authority" onChange={(e) => onChangePattern(e, setIssuingAuthority, ISSUING_AUTHORITY_REGEX, setIsValidIssuingAuthority)} placeholder="Название органа выдавшего паспорт" />
        </div>
      </div>

      <h3>Водительское удостоверение</h3>
      <div className="form_wrapper">
        <div>
          <label htmlFor="serial-license">Серия и номер</label>
          <label htmlFor="date-of-issue-license">Дата выдачи</label>
        </div>
        <div>
          <input type="text" id="serial-license" name="serial-license" onChange={(e) => onChangePattern(e, setSerialLicense, SERIAL_REGEX, setIsValidSerialLicense)} placeholder="000 000000" />
          <input type="date" id="date-of-issue-license" name="date-of-issue-license" onChange={(e) => setDateOfIssueLicense(e.target.value)} value={dateOfIssueLicense} />
        </div>
      </div>

      <h3>Пароль</h3>
      <div className="form_wrapper">
        <div>
          <label htmlFor="password">Придумайте пароль</label>
          <label htmlFor="password-reapeat">Повторить пароль</label>
        </div>
        <div className="form_wrapper_password">
          <input type="password" id="password" name="password" onChange={(e) => onChangePattern(e, setPassword, PASSWORD_REGEX, setIsValidPassword)} placeholder="••••••••••••••••••••••••" />
          <input type="password" id="password-reapeat" name="password-reapeat" onChange={(e) => onPasswordRepeatChange(e)} placeholder="••••••••••••••••••••••••" />
        </div>
      </div>
    </form>
    { validateData() ?
      <ContinueSingUp isValid="true" form="step1" callback={callbackFunction}/> : <ContinueSingUp isValid="false"/>}
    </>
  );
}

export default Step1;
