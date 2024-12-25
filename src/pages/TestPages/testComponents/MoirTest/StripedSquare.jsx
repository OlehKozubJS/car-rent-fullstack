import { useState, useEffect } from "react";

import styled from "@emotion/styled";

const StripedSquare = () => {
  const [stripes, setStripes] = useState([]);

  useEffect(() => {
    setStripes();
  }, [stripes]);

  return <div>Striped square</div>;
};

export { StripedSquare };
