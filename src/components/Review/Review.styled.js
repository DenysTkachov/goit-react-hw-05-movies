import styled from 'styled-components';

export const ReviewsContainer = styled.div`
  margin-top: 24px;
`;

export const ReviewsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); 
  gap: 24px; 
  margin: 0 40px 0 40px; 
  list-style: none;
  padding: 0;
`;

export const ReviewItem = styled.li`
  border: 2px solid #e74c3c;
  border-radius: 10px;
  padding: 10px 20px;

  b {
    color: #f39c12;
  }
  span {
    color: #95a5a6;
  }
  p {
    margin-top: 12px;
    font-size: 16px;
    color: #34495e;
  }
`;

export const NoReviewsMessage = styled.p`
  font-size: 18px;
  font-style: italic;
  color: #2ecc71;
`;
