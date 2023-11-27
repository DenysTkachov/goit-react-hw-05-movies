import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SearchedContainer = styled.div`
  margin: 0 auto;
  background-color: #3498db;
  padding: 24px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  width: 450px;
`;

export const SearchedList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const SearchedItem = styled.li`
  font-size: 16px;
  margin-bottom: 12px;
  color: #e74c3c;
`;

export const SearchedLink = styled(Link)`
  text-decoration: none;
  color: #f39c12;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #2ecc71;
  }
`;
