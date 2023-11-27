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
