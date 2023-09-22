import { ReactNode, createContext, useEffect, useState } from "react";
import { getCategories, getTypes, getUnits } from "../api";
import { Category, ResouceBase } from "../api/types";

export interface ResourcesContextProps {
  loading: boolean;
  types: ResouceBase[];
  units: ResouceBase[];
  categories: Category[];
}

export const ResourcesContext = createContext<ResourcesContextProps>({
  loading: false,
  types: [],
  units: [],
  categories: [],
});

export const ResourcesContextProvider = (props: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [types, setTypes] = useState<ResouceBase[]>([]);
  const [units, setUnits] = useState<ResouceBase[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    setLoading(true);
    Promise.all([getUnits(), getCategories(), getTypes()])
      .then((res) => {
        setUnits(res[0].data);
        setCategories(res[1].data);
        setTypes(res[2].data);
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <ResourcesContext.Provider value={{ loading, types, units, categories }}>
      {props.children}
    </ResourcesContext.Provider>
  );
};
