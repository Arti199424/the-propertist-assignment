export default function PropertyCard({ property, onSelect, style }) {
  return (
    <button className="property-card" onClick={onSelect} style={style} type="button">
      <div className="card-image-wrap">
        <img src={property.image} alt={property.title} className="property-image" />
        <span className="card-badge">{property.type}</span>
      </div>

      <div className="card-body">
        <div>
          <h2>{property.title}</h2>
          <p>{property.location}</p>
        </div>
        <div className="card-meta">
          <span>{property.price}</span>
          <span>{property.bhk} BHK</span>
        </div>
        <div className="card-features">
          <span>{property.area}</span>
          <span>{property.furnishing}</span>
        </div>
      </div>
    </button>
  );
}
