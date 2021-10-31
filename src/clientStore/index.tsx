import { createContext, FC, PropsWithChildren, useContext } from "react";
import { AppStore } from "./appModule/AppStore";
import { SaveFormsStore } from "./saveFormsModule/SaveFormsStore";

type RootStateContextValue = {
  appStore: AppStore;
  saveFormsModule: SaveFormsStore;
};

const RootStateContext = createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

const appStore = new AppStore();
const saveFormsModule = new SaveFormsStore();

export const RootStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <RootStateContext.Provider value={{ appStore, saveFormsModule }}>
      {children}
    </RootStateContext.Provider>
  );
};

export const RootStore = () => useContext(RootStateContext);
