export type FileNodeDto = {
  name: string;
  isDirectory: boolean;
  childNodes: FileNodeDto[];
};
