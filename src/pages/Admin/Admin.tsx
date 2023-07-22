import { Slide } from '@chakra-ui/react';
import React, { useState } from 'react';
import Side from './Side';
import User from './User';

const Admin = () => {

  const [isUser,setUser]=useState(true);
  const [isBlog,setBlog]=useState(false);
  return (
    <div style={{display:"flex"}}>
      <div style={{ width: "200px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" ,marginLeft:"20px" ,padding:"10px"}}>
        <Side  setUser={setUser} setBlog={setBlog}/>
      </div>
<div style={{marginLeft:"10px"}}>

      {isUser&&<User/>}

</div>
    </div>
  );
};

export default Admin;
