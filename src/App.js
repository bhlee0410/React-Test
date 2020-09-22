import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Pager from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    whdth: '100%',
    maginTop : theme.spacing.unit * 3,
    overFlowZ:"auto"

  },
  tbale:{
    minWidth : 1080
  }

})


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
   const {classes} = this.props;
  return (
    <Pager className={classes.root}>
      <Table>
        <TableHead>
           <TableRow>
             <TableCell> 번호</TableCell>
             <TableCell> 이미지</TableCell>
             <TableCell> 이름</TableCell>
             <TableCell> 생년월일</TableCell>
             <TableCell> 설별</TableCell>
             <TableCell> 직업</TableCell>
           </TableRow>
        </TableHead>

        <TableBody>
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
      </TableBody>
      </Table>

      

    </Pager>
    // <div className="gray-background">
    //    <img src={logo} late="logo" />
    //    <h2> 개발 Management System </h2>
    // </div>
  );

 }
}


export default withStyles(styles)(App);
