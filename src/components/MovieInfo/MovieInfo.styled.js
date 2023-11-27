import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column; 
  margin: 20px;
  border: 2px solid #e74c3c; 
  border-radius: 12px; 
  overflow: hidden;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); 
`;

export const MovieImage = styled.img`
  width: 300px;
  height: auto;
  display: block;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

export const MovieTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #3498db;
`;

export const UserScore = styled.p`
  font-size: 16px;
  color: #e74c3c;
  margin-bottom: 10px;
`;

export const Overview = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
  text-align: justify;
  color: #2ecc71;
`;

export const Genres = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
  color: #f39c12;
`;

export const GenresList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const GenresItem = styled.li`
  font-size: 14px;
  margin-right: 15px;
  display: inline-block;
  color: #34495e;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const MovieLink = styled(NavLink)`
  padding: 8px;
  border-radius: 4px;
  color: #f1c40f;
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out,
    text-decoration 0.5s ease-in-out;

  &:hover {
    text-decoration: none;
    color: #3498db;
    background-color: #34495e;
  }
`;

export const BackPageLink = styled(Link)`
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 12px 24px;
  border-radius: 10px;
  text-decoration: none;
  display: inline-block;
  margin-top: 20px;
  margin-left: 20px;
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;

  &:hover {
    color: #f39c12;
    background-color: #3498db;
  }
`;
