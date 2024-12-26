// src/styles.ts

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from "@emotion/styled";
import { FaMusic, FaPlusCircle, FaListAlt } from "react-icons/fa";

// App Container
export const AppContainer = styled.div`
  padding: 20px;
  font-family: "Arial, sans-serif";
  background: #e8edf1;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #2c3e50;
`;

// Title
export const Title = styled.h1`
  font-size: 2.4rem;
  margin-bottom: 30px;
  color: #34495e;
  text-align: center;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 2px solid #bdc3c7;
  padding-bottom: 10px;
`;

// Section Container
export const Section = styled.div`
  margin-bottom: 25px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 650px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

// Section Title
// Section Title
export const SectionTitle = styled.h2`
  font-size: 1.6rem;
  margin-bottom: 15px;
  color: #2c3e50;
  display: flex;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid #dfe6e9;
  padding-bottom: 8px;
`;

// Footer
export const Footer = styled.footer`
  margin-top: 40px;
  font-size: 0.9rem;
  color: #7f8c8d;
  text-align: center;
`;

// Icon Style for Music Manager Title
export const MusicIcon = styled(FaMusic)`
  size: 30;
  color: #2c3e50;
`;

// Icon Style for Add Song Section
export const PlusCircleIcon = styled(FaPlusCircle)`
  size: 20;
  color: #2c3e50;
`;

// Icon Style for Statistics and Song List Section
export const ListAltIcon = styled(FaListAlt)`
  size: 20;
  color: #2c3e50;
`


export const containerStyle = css`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

export const headingStyle = css`
  text-align: center;
  margin-bottom: 20px;
`;

export const formStyle = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const inputStyle = css`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const buttonStyle = css`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007BFF;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const statsStyle = css`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export const slideIn = {
  initial: { x: "-100%" },
  animate: { x: 0 },
  exit: { x: "100%" },
};