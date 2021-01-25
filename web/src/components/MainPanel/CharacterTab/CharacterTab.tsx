import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import LinearProgress from "../../Base/LinearProgress/LinearProgress";
import TabContent from "../../Base/TabContent/TabContent";

export interface CharacterTabProps {}

const CharacterTab: React.FC<CharacterTabProps> = ({}) => {
  const _class = useSelector((state: RootState) => state.class);
  const groupedStats = useSelector((state: RootState) => state.stats);

  const classContent: { label: string; value?: string }[] = [
    {
      label: "name",
      value: "[name]"
    },
    {
      label: "class",
      value: _class?.name
    }
  ];

  return (
    <div className="h-full flex">
      {_class && (
        <TabContent header="character">
          {classContent.map(({ label, value }) => (
            <div className="flex mb-4 last:mb-0 capitalize">
              <div className="flex-1">{label}</div>
              <div>{value}</div>
            </div>
          ))}
        </TabContent>
      )}
      {groupedStats &&
        Object.entries(groupedStats).map(([group, stats]) => (
          <TabContent key={group} header={group}>
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
          </TabContent>
        ))}
    </div>
  );
};

export default CharacterTab;
