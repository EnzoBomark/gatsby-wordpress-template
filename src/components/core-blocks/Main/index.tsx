import * as React from "react";

import S from "./Main.style";

const Main: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
