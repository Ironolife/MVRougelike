const stripFunction = (key: string, value: any) =>
  key === "__typename" ? undefined : value;

const stripTypeName = <T>(data: T): T =>
  JSON.parse(JSON.stringify(data), stripFunction);

export default stripTypeName;
