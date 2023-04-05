import { createContext } from "react";
import { ZipFileListDto } from "../../../models/zipFiles/ZipFileListDto.js";
import { LoadedContextItem } from "./LoadedContextItem.js";

type ZipFileListContextType = {
  asyncLoadedItem: LoadedContextItem<ZipFileListDto>;
  triggerUpdate: () => Promise<void>;
};

const defaultAsyncLoadedItem = { isLoading: false, result: { zipFiles: [] } };
const defaultTriggerUpdate = () => { throw new Error("trigger update is not defined"); }

const ZipFileListContext = createContext<ZipFileListContextType>({ asyncLoadedItem: defaultAsyncLoadedItem, triggerUpdate: defaultTriggerUpdate });
export default ZipFileListContext;
