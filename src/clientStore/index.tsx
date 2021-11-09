import { createContext, FC, PropsWithChildren, useContext } from "react";
import { AppStore } from "./appModule/AppStore";
import { SaveFormsStore } from "./saveFormsModule/SaveFormsStore";
import { FiltersStore } from "./filtersModule/FiltersModule";

type RootStateContextValue = {
  appStore: AppStore;
  saveFormsModule: SaveFormsStore;
  filtersModule: FiltersStore;
};

const RootStateContext = createContext<RootStateContextValue>(
  {} as RootStateContextValue
);

const appStore = new AppStore();
const saveFormsModule = new SaveFormsStore();
const filtersModule = new FiltersStore();

export const RootStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <RootStateContext.Provider
      value={{ appStore, saveFormsModule, filtersModule }}
    >
      {children}
    </RootStateContext.Provider>
  );
};

export const RootStore = () => useContext(RootStateContext);
