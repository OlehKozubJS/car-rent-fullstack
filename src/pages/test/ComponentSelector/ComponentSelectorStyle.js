import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const ComponentSelectorContainerStyleBase = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 18px;

  margin-bottom: 50px;
`;

const ComponentSelectorButtonStyleBase = styled.label`
  margin-top: 28px;

  height: 36px;

  display: flex;
  padding: 12px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 12px;
  background-color: ${({ isactive }) => {
    return isactive === "true" ? "rgb(52, 112, 255)" : "rgba(138, 138, 137, 1)";
  }};

  color: #fff;
  font-size: 14px;
  line-height: 20px;

  font-family: "Manrope-SemiBold", sans-serif;

  &:hover {
    background-color: rgb(11, 68, 205);
  }
`;

const ComponentSelectorRadioButtonStyleBase = styled.input`
  display: none;
`;

const ComponentSelectorRadioButtonTextStyleBase = styled.span`
  display: inline;
`;

export {
  ComponentSelectorContainerStyleBase,
  ComponentSelectorButtonStyleBase,
  ComponentSelectorRadioButtonStyleBase,
  ComponentSelectorRadioButtonTextStyleBase,
};
