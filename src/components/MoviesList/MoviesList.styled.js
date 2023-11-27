import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const TrendingContainer = styled.div`
  margin: 0 auto;
  background-color: #3498db;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  width: 450px;
`;

export const TrendingTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
  color: #e74c3c;
`;

export const TrendingList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const TrendingItem = styled.li`
  font-size: 16px;
  margin-bottom: 10px;
  color: #2ecc71;
`;

export const TrendingLink = styled(Link)`
  text-decoration: none;
  color: #2c3e50;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #e74c3c;
  }
  
  
`;

export const SearchedContainer = styled.div`
  margin: 0 auto;
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 400px;
`;

export const SearchedList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

export const SearchedItem = styled.li`
  font-size: 14px;
  margin-bottom: 8px;
  color: #34495e;
`;

export const SearchedLink = styled(Link)`
  text-decoration: none;
  color: #34495e;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #f1c40f;
  }
`;