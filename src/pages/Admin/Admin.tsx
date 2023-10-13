
import React, { useState } from 'react';
import Side from './Side';
import User from './User';
import Blog from './Blog';

const Admin = () => {

  const [isUser,setUser]=useState(true);
  const [isBlog,setBlog]=useState(false);
  return (
    <div style={{display:"flex"}}>
      <div style={{ width: "200px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" ,marginLeft:"20px" ,padding:"10px"}}>
        <Side  setUser={setUser} setBlog={setBlog} isBlog={isBlog}/>
      </div>
<div style={{marginLeft:"10px"}}>

      {isUser&&<User/>}
      {isBlog&&<Blog/>}


</div>
    </div>
  );
};

export default Admin;
