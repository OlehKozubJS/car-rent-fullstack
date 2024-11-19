import { cars } from "./data_base";

import { TestPage } from "./TestPage";

const App = () => {
  const [isModal, setIsModal] = useState(false);

  const openModal = () => {
    setIsModal(true);
  };

  const closeModal = () => {
    setIsModal(false);
  };

  const dispatch = useDispatch();

  const carMake = useSelector(getCarModel);

  useEffect(() => {
    dispatch(setSelectedCars(cars.filter((car) => car.make === carMake)));
  }, [carMake]);

  return (
    <div>
      <CarRentStyles />
      <button onClick={openModal}>Open Modal</button>
      {isModal && <CarModal carId={9582} onClose={closeModal} />}
      <CarFilter />
      <CarGallery />
      <TestPage />
    </div>
  );
};

export { App };
