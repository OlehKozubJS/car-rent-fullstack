const useKeyboard = (callback, keyName) => {
  return () => {
    window.addEventListener();

    return () => {
      window.removeEventListener();
    };
  };
};

export { useKeyboard };
