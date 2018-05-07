import React from 'react';
import background from './farm.jpg'

const style = {
  stage:{
    backgroundImage: `url("${background}"`,
    width: '100vw',
    height: '100vh',
    backgroundSize: 'cover',
    color: "#FFF",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title:{
    fontSize: '3em',
    marginBottom: 16,
    paddingBottom: 16
  }

};

const Stage = ({children, title=""})=>
    <div style={style.stage}>
      <h1 style={style.title}>{title}</h1>
      {children}
    </div>;

export default Stage