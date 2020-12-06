/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/LogoText.png';
import { ContainerHeader, Menu, ItemMenu, Content } from './styles';

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <ContainerHeader>
        <Content>
          <img src={logo} alt="logo" />

          <Menu isVisible={showMenu}>
            <button
              onClick={() => {
                setShowMenu(!showMenu);
              }}
              type="button"
            >
              <FaBars size={40} />
            </button>
            <ul>
              <ItemMenu isSelected>
                <a href="#">Home</a>
              </ItemMenu>
              <ItemMenu>
                <a href="#"> Conheça a Plataforma</a>
              </ItemMenu>
              <ItemMenu>
                <Link to="/login">Login</Link>
              </ItemMenu>
            </ul>
          </Menu>
        </Content>
      </ContainerHeader>
    </>
  );
};

export default Header;
