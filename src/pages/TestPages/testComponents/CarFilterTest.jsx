const CarFilterTest = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    //onSubmit({ make, minRentalPrice, maxRentalPrice, minMileage, maxMileage });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Car brand (make)</h3>
        <label htmlFor="carMakeInput">
          <input
            id="carMakeInput"
            type="text"
            placeholder="Enter car make name or its part"
            onChange={handleMake}
            style={{ width: "200px" }}
          />
        </label>
      </div>
      <div>
        <h3>Car rental price</h3>
        <label htmlFor="minCarRentalPriceInput">
          <input
            id="minCarRentalPriceInput"
            type="number"
            placeholder="From"
            onChange={handleMinimalRentalPrice}
          />
        </label>
        <label htmlFor="maxCarRentalPriceInput">
          <input
            id="maxCarRentalPriceInput"
            type="number"
            placeholder="To"
            onChange={handleMaximalRentalPrice}
          />
        </label>
      </div>
      <div>
        <h3>Car mileage</h3>
        <label htmlFor="minCarMileageInput">
          <input
            id="minCarMileageInput"
            type="number"
            placeholder="From"
            onChange={handleMinimalMileage}
          />
        </label>
        <label htmlFor="maxCarMileageInput">
          <input
            id="maxCarMileageInput"
            type="number"
            placeholder="To"
            onChange={handleMaximalMileage}
          />
        </label>
      </div>
      <button type="submit">Find car</button>
    </form>
  );
};

export { CarFilterTest };

export default CarFilterTest;
