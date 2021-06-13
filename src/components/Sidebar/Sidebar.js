import React, { useState } from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Button from '@material-ui/core/Button';

import "./Sidebar.css"

const Nav = styled.div`
  background: #6f79a8;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding:30px;
  color:white;
  border-bottom: 3px solid #000000;
  `;

// const NavIcon = styled(Link)`
//   margin-left: 2rem;
//   font-size: 2rem;
//   height: 80px;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// `;

const SidebarNav = styled.nav`
  background: #6f79a8;
  width: 250px;
  height: 100vh;
  display: flex;
  position: absolute;
  justify-content: center;
  top: 80px;
  left: 0;
  transition: 350ms;
  z-index: 10;
  border-right: 3px solid #000000;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const logout = () => {
  localStorage.clear();
  window.location.reload();
}

const Sidebar = () => {
  const [sidebar] = useState(false);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>   
        <img src="GetFluent2.png" height={100} alt="" />         
          <h1>GetFluent</h1>
          {/* <Button style={{marginLeft: "auto"}} onClick={logout} variant="contained">Logout</Button> */}
          <Button class="logout" onClick={logout} variant="contained">Logout</Button>
        </Nav>        
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );

};

export default Sidebar;

