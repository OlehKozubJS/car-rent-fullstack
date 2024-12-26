const useKeyboard = (key, callback, parameters) => {
  return () => {
    const keydownCallback = (event) => {
      if (event.type === "keydown" && event.key === key) {
        callback(parameters);
      }
    };

    window.addEventListener("keydown", keydownCallback);

    return () => {
      window.removeEventListener("keydown", keydownCallback);
    };
  };
};

export { useKeyboard };
