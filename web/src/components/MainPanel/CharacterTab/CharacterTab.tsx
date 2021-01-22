import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import LinearProgress from "../../Base/LinearProgress/LinearProgress";

export interface CharacterTabProps {}

const CharacterTab: React.FC<CharacterTabProps> = ({}) => {
  const groupedStats = useSelector((state: RootState) => state.stats);

  return (
    <div className="h-full flex">
      {groupedStats &&
        Object.entries(groupedStats).map(([group, stats]) => (
          <div key={group} className="flex-1 mr-4 last:mr-0">
            <div className="pb-2 mb-4 text-xl capitalize border-b border-gray-400">
              {group}
            </div>
            {Object.entries(stats).map(([key, { level, current, target }]) => (
              <div key={key} className="mb-4 last:mb-0">
                <div className="flex mb-2">
                  <div className="flex-1 capitalize">{key}</div>
                  <div className="flex-1 text-center">LV{level}</div>
                  <div className="flex-1 text-right">
                    {Math.floor((current / target) * 100)}%
                  </div>
                </div>
                <LinearProgress value={(current / target) * 100} />
              </div>
            ))}
          </div>
        ))}
    </div>
  );
};

export default CharacterTab;
