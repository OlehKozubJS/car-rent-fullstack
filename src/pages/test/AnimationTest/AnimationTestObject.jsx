const AnimationTestObject = ({ transformValues }) => {
  return (
    <div>
      <div
        style={{
          height: "250px",
          width: "250px",
          border: "5px solid rgb(150, 250, 250)",
          backgroundColor: "red",
          transformOrigin: "center",
          transform: `perspective(${transformValues.p}px) rotate(${transformValues.r}deg) rotateY(${transformValues.ry}deg) rotateX(${transformValues.rx}deg)`,
        }}
      >
        Hello
      </div>
    </div>
  );
};

export { AnimationTestObject };
