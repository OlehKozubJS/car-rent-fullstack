import styled from "@emotion/styled";

     
const carBrandSelectorInputLabelStyleBase = styled.label`
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  height: 48px;
  width: 224px;
  padding: 14px 18px;

  background-color: rgb(247, 247, 251);
  border-radius: 14px;

  margin-bottom: 4px;
`

        .car-filter-input {
          outline: none;
          border: none;

          width: 150px;
          background-color: inherit;

          font-size: 18px;
          color: rgb(18, 20, 23);
        }

        .car-filter-input-label:focus-within {
          background-color: rgb(251, 251, 255);
        }
        
        .car-filter-input-button {
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          border: none;
        }

export { carFilterInputStyle };
