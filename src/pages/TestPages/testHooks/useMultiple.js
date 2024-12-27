const useMultiple = (iterations, step, callback) => {
  for (let iteration = 1; iteration < iterations; iteration += step) {
    callback(iteration);
  }
};

export { useMultiple };
