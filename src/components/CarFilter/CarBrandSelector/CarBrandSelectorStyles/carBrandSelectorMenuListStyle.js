import styled from "@emotion/styled";

const menuListStyle = `        
        .menu-list-container {
          height: 244px;
          width: 190px;

          overflow: hidden;
          position: relative;
        }

        .menu-list {
          list-style: none;
          margin: 0;
          padding: 0;

          position: absolute;
          left: 0px;          
        }

        .menu-item {
          color: rgba(18, 20, 23, 0.2);
          
          transition: 500ms;
        }

        .menu-item:hover {
          color: rgb(18, 20, 23);
        }

        .menu-option-radio {
          display: none;
        }`;

export { menuListStyle };
