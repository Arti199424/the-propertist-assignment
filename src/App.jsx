import { useMemo, useState } from "react";
import properties from "../data/properties.json";
import PropertyExplorer from "./components/PropertyExplorer.jsx";
import PropertyDetail from "./components/PropertyDetail.jsx";

export default function App() {
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  const selectedProperty = useMemo(
    () => properties.find((property) => property.id === selectedPropertyId),
    [selectedPropertyId]
  );

  if (selectedProperty) {
    return (
      <PropertyDetail
        property={selectedProperty}
        onBack={() => setSelectedPropertyId(null)}
      />
    );
  }

  return (
    <PropertyExplorer
      properties={properties}
      onSelectProperty={setSelectedPropertyId}
    />
  );
}
