import React from "react";
import {
  ClassFragment,
  StatsFragment,
  useClassesQuery
} from "../src/generated/graphql";
import { setClass } from "../src/reducers/classSlice";
import { setStats } from "../src/reducers/statsSlice";
import { useAppDispatch } from "../src/store";
import stripFunction from "../src/utils/stripTypeName";

const Loader: React.FC = ({ children }) => {
  const dispatch = useAppDispatch();

  useClassesQuery({
    onCompleted: (data) => {
      dispatch(setClass(stripFunction<ClassFragment>(data.classes[0])));
      dispatch(setStats(stripFunction<StatsFragment>(data.classes[0].stats)));
    }
  });

  return <>{children}</>;
};

export default Loader;
