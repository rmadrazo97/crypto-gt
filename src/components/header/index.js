import { Box, Divider, Drawer, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { Clear } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import bars from '../../assets/images/bars.svg';
import { FlexBetween, FlexBox } from '../../components/flex-box';
import socialIcon1 from '../../assets/images/socialIcon1.svg';
import socialIcon2 from '../../assets/images/socialIcon2.svg';
import socialIcon3 from '../../assets/images/socialIcon3.svg';
import socialIcon4 from '../../assets/images/socialIcon4.svg';
import socialIcon5 from '../../assets/images/socialIcon5.svg';
import './header.css';

const Header = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  console.log('location.pathname', location.pathname);
  return (
    <div className="page-header">
      <div className="movile-header">
        <h1 className="logo">
          <span>COMPANY</span> LOGO
        </h1>
        <ul className="page-header-links">
          <Link to="/">
            <li className={location.pathname === '/' ? 'active' : ''}>Home</li>
          </Link>
          <Link to="/formulario">
            <li className={location.pathname === '/formulario' ? 'active' : ''}>
              Formulario
            </li>
          </Link>
          <Link to="/comunidad">
            <li className={location.pathname === '/comunidad' ? 'active' : ''}>
              Comunidad
            </li>
          </Link>
          <Link to="/términos-y-políticas">
            <li
              className={
                location.pathname === '/t%C3%A9rminos-y-pol%C3%ADticas'
                  ? 'active'
                  : ''
              }
            >
              Acerca De
            </li>
          </Link>
        </ul>
        <div className="page-header-socialIcons">
          <div className="page-header-socialIcon">
            <img src={socialIcon1} alt="socialIcon1" />
          </div>
          <div className="page-header-socialIcon">
            <img src={socialIcon2} alt="socialIcon2" />
          </div>
          <img src={socialIcon3} alt="socialIcon3" />
          <div className="page-header-socialIcon">
            <img src={socialIcon4} alt="socialIcon4" />
          </div>
          <div className="page-header-socialIcon">
            <img src={socialIcon5} alt="socialIcon5" />
          </div>
        </div>
        <div className="page-header-humbarger">
          <img
            className="bars"
            onClick={() => setOpen(true)}
            src={bars}
            alt="bars"
          />
        </div>
      </div>
      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        sx={{
          zIndex: 9999,
        }}
      >
        <Box className="right-header-nav" width="100%" maxWidth={380}>
          <Box
            overflow="auto"
            height={`calc(100vh - ${!!3 ? '80px - 3.25rem' : '0px'})`}
            width={250}
          >
            <FlexBetween mx={3} height={66}>
              <FlexBox gap={1} alignItems="center">
                <h1 className="drar-logo">
                  <span>COMPANY</span> LOGO
                </h1>
              </FlexBox>

              <IconButton onClick={() => setOpen(false)}>
                <Clear style={{ color: '#fff' }} />
              </IconButton>
            </FlexBetween>
            <Divider />
            <ul className="header-drar-links">
              <Link to="/">
                <li className="active" onClick={() => setOpen(false)}>
                  Home
                </li>
              </Link>
              <Link to="/formulario">
                <li onClick={() => setOpen(false)}>Formulario</li>
              </Link>
              <Link to="/">
                <li onClick={() => setOpen(false)}>Comunidad</li>
              </Link>
              <Link to="/términos-y-políticas">
                <li onClick={() => setOpen(false)}>Términos y Políticas</li>
              </Link>
            </ul>
            <Divider />
            <div className="header-drawr-socialIcons">
              <div className="header-drawr-socialIcon">
                <img src={socialIcon1} alt="socialIcon1" />
              </div>
              <div className="header-drawr-socialIcon">
                <img src={socialIcon2} alt="socialIcon2" />
              </div>
              <img src={socialIcon3} alt="socialIcon3" />
              <div className="header-drawr-socialIcon">
                <img src={socialIcon4} alt="socialIcon4" />
              </div>
              <div className="header-drawr-socialIcon">
                <img src={socialIcon5} alt="socialIcon5" />
              </div>
            </div>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default Header;
