import styled from 'styled-components';

export const CastList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
`;

export const CastItem = styled.li`
  width: 160px;
  margin: 15px;
  text-align: center;

  img {
    max-width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
  }

  b {
    color: #e74c3c;
  }

  p {
    margin-top: 8px;
    font-size: 14px;
    color: #3498db;
  }

  span {
    color: #95a5a6;
  }
`;
export const NoImage = styled.span`
  display: block;
  margin: 10px; 
  font-size: 16px; 
  color: #f39c12;
`;
