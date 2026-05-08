import { useEffect, useMemo, useState } from "react";
import PropertyCard from "./PropertyCard.jsx";
import PropertySkeleton from "./PropertySkeleton.jsx";

const bhkOptions = ["All", "1", "2", "3", "4"];

export default function PropertyExplorer({ properties, onSelectProperty }) {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [bhk, setBhk] = useState("All");
  const [type, setType] = useState("Buy");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setDebouncedSearch(search);
    }, 350);

    return () => window.clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 450);

    return () => window.clearTimeout(timer);
  }, [debouncedSearch, bhk, type]);

  const filteredProperties = useMemo(() => {
    const locationQuery = debouncedSearch.trim().toLowerCase();

    return properties.filter((property) => {
      const searchableText = [
        property.title,
        property.location,
        property.type,
        ...(property.searchKeywords || [])
      ]
        .join(" ")
        .toLowerCase();
      const matchesLocation =
        locationQuery.length === 0 || searchableText.includes(locationQuery);
      const matchesBhk = bhk === "All" || property.bhk === Number(bhk);
      const matchesType = property.type === type;

      return matchesLocation && matchesBhk && matchesType;
    });
  }, [properties, debouncedSearch, bhk, type]);

  return (
    <main className="listing-page">
      <section className="top-bar">
        <div className="hero-copy">
          <p className="eyebrow">The Propertist</p>
          <h1>Find your next space</h1>
          <p className="hero-subtitle">
            Explore curated homes across Mumbai, Delhi NCR, and more with quick filters.
          </p>
        </div>
        <div className="listing-count">
          <strong>{filteredProperties.length}</strong>
          <span>matches</span>
        </div>
      </section>

      <div className="quick-locations" aria-label="Quick location searches">
        {[
          "Mumbai",
          "Delhi",
          "Bengaluru",
          "Pune",
          "Hyderabad",
          "Chennai"
        ].map((city) => (
          <button
            className={search.toLowerCase() === city.toLowerCase() ? "active" : ""}
            key={city}
            type="button"
            onClick={() => setSearch(city)}
          >
            {city}
          </button>
        ))}
      </div>

      <section className="filters" aria-label="Property filters">
        <label className="search-field">
          <span>Location</span>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search by city or locality"
            type="search"
          />
        </label>

        <div className="segmented-control" aria-label="Transaction type">
          {["Buy", "Rent"].map((option) => (
            <button
              className={type === option ? "active" : ""}
              key={option}
              onClick={() => setType(option)}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>

        <label className="select-field">
          <span>BHK</span>
          <select value={bhk} onChange={(event) => setBhk(event.target.value)}>
            {bhkOptions.map((option) => (
              <option key={option} value={option}>
                {option === "All" ? "All BHK" : `${option} BHK`}
              </option>
            ))}
          </select>
        </label>
      </section>

      {isLoading ? (
        <section className="property-grid" aria-label="Loading properties">
          {Array.from({ length: 6 }).map((_, index) => (
            <PropertySkeleton key={index} />
          ))}
        </section>
      ) : filteredProperties.length > 0 ? (
        <section className="property-grid" aria-label="Property listings">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              style={{ "--delay": `${Math.min(10, filteredProperties.indexOf(property)) * 45}ms` }}
              onSelect={() => onSelectProperty(property.id)}
            />
          ))}
        </section>
      ) : (
        <section className="empty-state">
          <h2>No properties found</h2>
          <p>Try a different location, BHK, or transaction type.</p>
        </section>
      )}
    </main>
  );
}
