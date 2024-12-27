const useKeyboard = (keyName, callback) => {
  return () => {
    const keydownCallback = ({ type, key }) => {
      if (type === "keydown" && key === keyName) {
        callback();
      }
    };

    window.addEventListener("keydown", keydownCallback);

    return () => {
      window.removeEventListener("keydown", keydownCallback);
    };
  };
};

export { useKeyboard };
