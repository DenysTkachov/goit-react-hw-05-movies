import styled from 'styled-components';
import {
  Form as StyledForm,
  Field as StyledField,
  ErrorMessage as StyledError,
} from 'formik';

export const Form = styled(StyledForm)`
  display: flex;
  flex-direction: column; 
  align-items: center; 
  max-width: 400px;
  margin: 0 auto;
`;

export const FormField = styled.label`
  margin-bottom: 15px;
  text-align: center;
`;

export const Field = styled(StyledField)`
  width: 250px;
  height: 40px;
  padding: 10px;
  font-size: 16px;
  border: 1.5px solid #2ecc71;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #e74c3c;
  }
`;

export const FormButton = styled.button`
  margin-left: 10px;
  height: 40px;
  background-color: #3498db;
  color: #ecf0f1;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;

  &:hover {
    color: #f39c12;
    background-color: #2c3e50;
  }
`;

export const ErrorMessage = styled(StyledError)`
  color: #e74c3c;
  font-size: 14px;
  margin-top: 5px;
  display: block;
  text-align: center;
`;
