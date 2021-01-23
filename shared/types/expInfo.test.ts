import {
  LEVEL_FUNCTION_CONSTANTS,
  ExpInfo,
  getExpInfoFromTotal,
  getExpInfoFromLevel
} from "./expInfo";

const { K1, K2 } = LEVEL_FUNCTION_CONSTANTS;

const expInfos = new Map<number, ExpInfo>();
for (let i = 0; i <= 100; i++) {
  expInfos.set(i, {
    level: i + 1,
    total: Math.ceil(K1 * Math.pow(i, K2)),
    current: 0,
    target:
      Math.ceil(K1 * Math.pow(i + 1, K2)) - Math.ceil(K1 * Math.pow(i, K2))
  });
}

describe(getExpInfoFromTotal, () => {
  test("LV1", () => {
    const total = expInfos.get(0).total;
    expect(getExpInfoFromTotal(total)).toStrictEqual(expInfos.get(0));
  });

  test("LV1+1", () => {
    const total = expInfos.get(0).total + 1;
    expect(getExpInfoFromTotal(total)).toStrictEqual({
      ...expInfos.get(0),
      total,
      current: 1
    });
  });

  test("LV2-1", () => {
    const total = expInfos.get(1).total - 1;
    expect(getExpInfoFromTotal(total)).toStrictEqual({
      ...expInfos.get(0),
      total,
      current: expInfos.get(0).target - 1
    });
  });

  test("LV2", () => {
    const total = expInfos.get(1).total;
    expect(getExpInfoFromTotal(total)).toStrictEqual(expInfos.get(1));
  });

  test("LV2+1", () => {
    const total = expInfos.get(1).total + 1;
    expect(getExpInfoFromTotal(total)).toStrictEqual({
      ...expInfos.get(1),
      total,
      current: 1
    });
  });

  test("LV3-1", () => {
    const total = expInfos.get(2).total - 1;
    expect(getExpInfoFromTotal(total)).toStrictEqual({
      ...expInfos.get(1),
      total,
      current: expInfos.get(1).target - 1
    });
  });

  test("LV3", () => {
    const total = expInfos.get(2).total;
    expect(getExpInfoFromTotal(total)).toStrictEqual(expInfos.get(2));
  });

  test("LV50", () => {
    const total = expInfos.get(49).total;
    expect(getExpInfoFromTotal(total)).toStrictEqual(expInfos.get(49));
  });

  test("LV50+1", () => {
    const total = expInfos.get(49).total + 1;
    expect(getExpInfoFromTotal(total)).toStrictEqual({
      ...expInfos.get(49),
      total,
      current: 1
    });
  });

  test("LV51-1", () => {
    const total = expInfos.get(50).total - 1;
    expect(getExpInfoFromTotal(total)).toStrictEqual({
      ...expInfos.get(49),
      total,
      current: expInfos.get(49).target - 1
    });
  });
});

describe(getExpInfoFromLevel, () => {
  test("LV1", () => {
    const level = 1;
    expect(getExpInfoFromLevel(level)).toStrictEqual(expInfos.get(level - 1));
  });

  test("LV2", () => {
    const level = 2;
    expect(getExpInfoFromLevel(level)).toStrictEqual(expInfos.get(level - 1));
  });

  test("LV3", () => {
    const level = 3;
    expect(getExpInfoFromLevel(level)).toStrictEqual(expInfos.get(level - 1));
  });

  test("LV50", () => {
    const level = 50;
    expect(getExpInfoFromLevel(level)).toStrictEqual(expInfos.get(level - 1));
  });
});
