export const LEVEL_FUNCTION_CONSTANTS = {
  K1: 10,
  K2: 1.5
};

export type ExpInfo = {
  level: number;
  total: number;
  current: number;
  target: number;
};

export const getExpInfoFromTotal = (total: number): ExpInfo => {
  const { K1, K2 } = LEVEL_FUNCTION_CONSTANTS;

  const level = Math.ceil(Math.pow((total + 0.1) / K1, 1 / K2));
  const previous_target = Math.ceil(K1 * Math.pow(level - 1, K2));
  const current = total - previous_target;
  const target = Math.ceil(K1 * Math.pow(level, K2)) - previous_target;

  return {
    level,
    total,
    current,
    target
  };
};

export const getExpInfoFromLevel = (level: number): ExpInfo => {
  const { K1, K2 } = LEVEL_FUNCTION_CONSTANTS;

  const total = Math.ceil(K1 * Math.pow(level, K2));
  const target =
    Math.ceil(K1 * Math.pow(level + 1, K2)) -
    Math.ceil(K1 * Math.pow(level, K2));

  return {
    level,
    total: total,
    current: 0,
    target: target
  };
};
