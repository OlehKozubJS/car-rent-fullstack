import { CarModalInformationDivider } from "../CarModalInformationDivider";

import {
  CarModalItemsStyleBase,
  CarModalItemStyleBase,
  CarModalItemValueStyleBase,
} from "./imports";

const CarModalCommonInformation = ({
  address,
  id,
  year,
  type,
  fuelConsumption,
  engineSize,
}) => {
  return (
    <>
      <CarModalItemsStyleBase>
        <CarModalItemStyleBase>{address.split(", ")[1]}</CarModalItemStyleBase>
        <CarModalInformationDivider />
        <CarModalItemStyleBase>{address.split(", ")[2]}</CarModalItemStyleBase>
        <CarModalInformationDivider />
        <CarModalItemStyleBase>
          Id: <CarModalItemValueStyleBase>{id}</CarModalItemValueStyleBase>
        </CarModalItemStyleBase>
        <CarModalInformationDivider />
        <CarModalItemStyleBase>
          Year: <CarModalItemValueStyleBase>{year}</CarModalItemValueStyleBase>
        </CarModalItemStyleBase>
        <CarModalInformationDivider />
        <CarModalItemStyleBase>
          Type: <CarModalItemValueStyleBase>{type}</CarModalItemValueStyleBase>
        </CarModalItemStyleBase>
        <br />
        <CarModalItemStyleBase>
          Fuel Consumption:{" "}
          <CarModalItemValueStyleBase>
            {fuelConsumption}
          </CarModalItemValueStyleBase>
        </CarModalItemStyleBase>
        <CarModalInformationDivider />
        <CarModalItemStyleBase>
          Engine Size:{" "}
          <CarModalItemValueStyleBase>{engineSize}</CarModalItemValueStyleBase>
        </CarModalItemStyleBase>
      </CarModalItemsStyleBase>
    </>
  );
};

export { CarModalCommonInformation };
