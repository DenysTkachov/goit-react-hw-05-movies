import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  background-color: #2ecc71;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const HeaderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 15px;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: #e74c3c;
  font-size: 18px;
  padding: px;
  border-radius: px;
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;

  &:active {
    color: #f39c12;
    background-color: #e74c3c;
  }

  &:hover {
    color: #3498db;
    background-color: #34495e;
  }
`;
