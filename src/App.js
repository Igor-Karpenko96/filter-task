import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Users from './components/Users';

function App() {
  const [user, setUser] = useState([]);
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [sexCheckM, setSexCheckM] = useState(false);
  const [sexCheckF, setSexCheckF] = useState(false);
  const [inputLastName, setInputLastName] = useState('');

  useEffect(() => {
    let baseUrl = 'https://venbest-test.herokuapp.com/';
    axios.get(baseUrl).then((resp) => {
      setUser(resp.data);
    });
  }, [setUser]);

  let allUsers = [...user];

  const handleChange = (input) => (e) => {
    e.preventDefault();
    input(e.target.value);
  };

  const handleCheckbox = (check, setCheck) => {
    setCheck(!check);
  };

  if (inputName.length > 0) {
    allUsers = user.filter((u) => {
      return u.name.toLowerCase().match(inputName);
    });
  }

  if (inputLastName.length > 0) {
    allUsers = user.filter((u) => {
      return u.lastname.toLowerCase().match(inputLastName);
    });
  }

  if (inputAge.length > 0) {
    allUsers = user.filter((u) => {
      return u.age.toString().match(inputAge);
    });
  }

  if (sexCheckM) {
    allUsers = user.filter((u) => {
      return u.sex.match('m');
    });
  }

  if (sexCheckF) {
    allUsers = user.filter((u) => {
      return u.sex.match('f');
    });
  }
  if (sexCheckF && sexCheckM) {
    allUsers = user.filter((u) => {
      return u.sex;
    });
  }
  return (
    <div className="App">
      <form action="">
        <div>
          <input
            type="text"
            placeholder="Имя"
            onChange={handleChange(setInputName)}
            value={inputName}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Фамилия"
            onChange={handleChange(setInputLastName)}
            value={inputLastName}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Возраст"
            onChange={handleChange(setInputAge)}
            value={inputAge}
          />
        </div>
        <p>
          <input
            name="sex"
            type="checkbox"
            value="m"
            onChange={() => {
              handleCheckbox(sexCheckM, setSexCheckM);
            }}
          />
          м
          <input
            name="sex"
            type="checkbox"
            value="f"
            onChange={() => {
              handleCheckbox(sexCheckF, setSexCheckF);
            }}
          />
          ж
        </p>
      </form>
      <Users users={allUsers} />
    </div>
  );
}

export default App;
