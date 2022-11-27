import styled from "styled-components";
import { keyframes } from "styled-components";

export const Container = styled.section`
  overflow: hidden;
  width: 100%;
  display: flex;
  height: 100vh;
`;
export const Banner = styled.div`
  background-image: linear-gradient(45deg, #3f51b5, #9b00e8);
  display: flex;
  justify-content: center;
  align-items: center;
  transition-property: border, witdh;
  transition: 0.5s ease-out;
  width: 100%;
  &.active {
    border-top-right-radius: 7%;
    border-bottom-right-radius: 7%;
    width: 40%;
    min-width: 400px;
    width: 40%;
  }
`;
export const H1R = styled.h1`
  color: #fff;
  font-size: 44px;
  font-weight: 400;
`;

export const H1 = styled.h1`
  color: blueviolet;
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
  margin-top: 0;
`;

const Scale = keyframes`
    70% {
    transform: scale(1.1);
    }
    80% {
    transform: scale(1.1);
    }
    100% {
    margin-right: 0;
    transform: scale(1);
    }
`;
export const SignupForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-right: -3000px;
  overflow: hidden;
  width: 60%;
  transform: scale(0);
  &.active {
    margin-right: 0;
    animation: ${Scale} 0.5s ease-out 1 forwards;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 20px;
`;

export const Input = styled.div`
  position: relative;
  width: 100%;
  border: none;
  display: flex;
  align-items: center;
  > input {
    border: none;
    height: 100%;
    padding-left: 50px;
    padding-right: 20px;
    min-height: 40px;
    border-radius: 25px;
    box-shadow: 0px 10px 49px -14px rgba(0, 0, 0, 0.7);
    font-size: 18px;
  }
  span {
    position: absolute;
    left: 15px;
    pointer-events: none;
  }
`;

const Loading = keyframes`
    0% {
    transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Button = styled.button`
  background: linear-gradient(45deg, #3f51b5, #9b00e8);
  color: #fff;
  width: 230px;
  border: none;
  border-radius: 25px;
  padding: 10px;
  text-align: center;
  box-shadow: 0px 10px 41px -11px rgba(0, 0, 0, 0.7);
  transform-origin: top;
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  height: 40px;
  &:active {
    transform: scale(0.98);
    background: linear-gradient(45deg, #3f51b5, #9b00e8);
  }
  &:hover {
    opacity: 0.92;
  }
  > img {
    height: 100%;
    &.loading {
      animation: ${Loading} 0.5s linear infinite;
    }
  }
`;
