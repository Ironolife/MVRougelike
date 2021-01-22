export type Attributes<T> = {
  strength: T;
  dexterity: T;
  vitality: T;
  intelligence: T;
  wisdom: T;
  charisma: T;
};

export type Skills<T> = {
  fishing: T;
  mining: T;
  harvesting: T;
  cooking: T;
  smithing: T;
  alchemy: T;
};

export type Stats<T> = {
  attributes: Attributes<T>;
  skills: Skills<T>;
};
