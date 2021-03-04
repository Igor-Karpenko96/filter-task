import React from 'react'
import '../App.css'


const Users = (props) => {
    return (
      <div>
        {props.users.map((u, index) => (
          <div key={index} className="user__card">
            <div>Имя: {u.name}</div>
            <div>Фамилия: {u.lastname}</div>
            <div>Возраст: {u.age}</div>
            <div>Пол: {u.sex === 'm' ? 'мужской' : 'женский'}</div>
          </div>
        ))}
      </div>
    );
  };

export default Users