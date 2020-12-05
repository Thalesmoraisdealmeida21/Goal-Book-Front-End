import styled from 'styled-components';

interface ItemMenuProps {
  isSelected?: boolean;
  isVisible?: boolean;
}

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100vw;
  width: 98vw;

  img {
    height: 50px;

    @media (max-width: 400px) {
      height: 30px;
      margin-top: 15px;
    }
  }
`;

export const Menu = styled.div<ItemMenuProps>`
  display: flex;
  margin-left: auto;
  flex-direction: row;

  @media (max-width: 1070px) {
    flex-direction: column;
  }

  button {
    display: none;
    margin-left: auto;
    visibility: hidden;
    display: flex;
    height: 50px;
    width: 50px;
    background: white;
    border: 1px solid silver;
    text-align: center;
    padding: 5px;
    border-radius: 10px;

    @media (max-width: 1070px) {
      visibility: visible;
    }
  }

  ul {
    display: flex;
    margin-left: auto;
    transition: 1s;

    @media (max-width: 1070px) {
      flex-direction: column;
      position: absolute;
      margin: 0;
      left: 0;
      top: 80px;
      visibility: ${props => (props.isVisible ? 'visible' : 'hidden')};
      right: 0;
      text-align: center;
      background: ${props => (props.isVisible ? '#07085b' : 'white')};

      a {
        color: white;
      }
    }
  }
`;

export const ItemMenu = styled.li<ItemMenuProps>`
  list-style: none;
  margin: 0px 30px;
  height: 40px;

  background: ${props => (props.isSelected ? '#06bfad' : 'transparent')};
  padding: 10px 5px;
  border-radius: 10px;

  a {
    text-decoration: none;
    color: ${props => (props.isSelected ? 'white' : '#07085B')};
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  margin: 15px 20vw;
`;
