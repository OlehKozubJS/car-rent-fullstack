import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

const RouterNavigationContainerStyleBase = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 18px;

  margin-bottom: 50px;
`;

const RouterNavigationLinkStyleBase = styled(NavLink)`
  margin-top: 28px;

  height: 48px;

  display: flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 12px;
  background-color: ${({ isActive }) => {
    (isActive && "rgb(52, 112, 255)") || "rgba(138, 138, 137, 1)";
  }};

  color: #fff;
  font-size: 14px;
  line-height: 20px;

  font-family: "Manrope-SemiBold", sans-serif;

  &:hover {
    background-color: rgb(11, 68, 205);
  }
`;

export { RouterNavigationContainerStyleBase, RouterNavigationLinkStyleBase };
