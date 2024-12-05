import styled from "@emotion/styled";

const MenuListContainerStyleBase = styled.div`
  height: 244px;
  width: 190px;

  overflow: hidden;
  position: relative;
`;

const MenuListStyleBase = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  position: absolute;
  left: 0px;
`;

const MenuItemStyleBase = styled.li`
  color: rgba(18, 20, 23, 0.2);

  transition: 500ms;
  &:hover {
    color: rgb(18, 20, 23);
  }
`;

const MenuOptionRadioStyleBase = styled.input`
  display: none;
`;

export {};
