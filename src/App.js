import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
  'id':1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '홍길동',
  'birthday':'1972',
  'gender':'남',
  'job': '백수'
 },
 
 {
  'id':2,
  'image': 'https://placeimg.com/64/64/any',
  'name': '이길동',
  'birthday':'1973',
  'gender':'남',
  'job': '백수'
 },

 {
  'id':3,
  'image': 'https://placeimg.com/64/64/any',
  'name': '김길동',
  'birthday':'1974',
  'gender':'남',
  'job': '백수'
 }
]

class App extends Component {
 render () {
  return (
    <div>
      {
        customers.map(c=> {
          return (
            <Customer 
              key={c.id}
              id={c.id}
              iamge={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}

            />
          )
        })
      }

    </div>
    // <div className="gray-background">
    //    <img src={logo} late="logo" />
    //    <h2> 개발 Management System </h2>
    // </div>
  );

 }
}


export default App;
