import { useMemo, useState } from "react";
import { Autocomplate, Content } from "../../components";
import { useResources } from "../../contexts/hooks";
import { ResouceBase } from "../../api/types";

export const ProductPage = () => {
  const { categories, types, units } = useResources();
  const [selectedType, setSelectedType] = useState<ResouceBase | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<ResouceBase | null>(
    null
  );
  const [selectedUnit, setSelectedUnit] = useState<ResouceBase | null>(null);
  const categoriesFiltred = useMemo(
    () =>
      categories.filter((x) =>
        selectedType ? x.type === selectedType.id : true
      ),
    [selectedType, categories]
  );
  return (
    <Content title="Nowy product">
      <h1>Dodaj product</h1>
      <Autocomplate
        className="mb-6 mx-2"
        label="Typ productu"
        items={types}
        selected={selectedType}
        onSelectItem={setSelectedType}
        getKey={(x) => x.id}
        getLabel={(x) => x.name}
      />
      <Autocomplate
        className="mb-6 mx-2"
        label="Kategoria"
        items={categoriesFiltred}
        selected={selectedCategory}
        onSelectItem={setSelectedCategory}
        getKey={(x) => x.id}
        getLabel={(x) => x.name}
      />
      <Autocomplate
        className="mb-6 mx-2"
        label="Jednostka"
        selected={selectedUnit}
        onSelectItem={setSelectedUnit}
        items={units}
        getKey={(x) => x.id}
        getLabel={(x) => x.name}
      />
    </Content>
  );
};
