const useKeyboard = (callback, keyName) => {
  return () => {
    const keydownCallback = () => {};

    window.addEventListener("keydown", keydownCallback);

    return () => {
      window.removeEventListener("keydown", keydownCallback);
    };
  };
};

export { useKeyboard };
