import * as React from "react";

import S from "./Body.style";

const Body: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <S.Body>{children}</S.Body>;
};

export default Body;
