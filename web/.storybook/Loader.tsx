import React from "react";
import { ClassFragment, useClassesQuery } from "../src/generated/graphql";
import { setClass } from "../src/reducers/classSlice";
import { useAppDispatch } from "../src/store";
import stripFunction from "../src/utils/stripTypeName";

const Loader: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();

  useClassesQuery({
    onCompleted: (data) => {
      dispatch(setClass(stripFunction<ClassFragment>(data.classes[0])));
    }
  });

  return <>{children}</>;
};

export default Loader;
