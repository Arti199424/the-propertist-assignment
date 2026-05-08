export default function PropertyDetail({ property, onBack }) {
  return (
    <main className="detail-page">
      <button className="back-link" onClick={onBack} type="button">
        Back to listings
      </button>

      <section className="detail-hero">
        <div className="detail-image-wrap">
          <img src={property.image} alt={property.title} className="property-image" />
        </div>

        <div className="detail-copy">
          <span className="status-pill">{property.type}</span>
          <h1>{property.title}</h1>
          <p className="detail-location">{property.location}</p>
          <p className="detail-price">{property.price}</p>

          <div className="detail-stats">
            <div>
              <span>{property.bhk}</span>
              <small>BHK</small>
            </div>
            <div>
              <span>{property.area}</span>
              <small>Area</small>
            </div>
            <div>
              <span>{property.furnishing}</span>
              <small>Furnishing</small>
            </div>
          </div>

          <p className="description">{property.description}</p>
          <button className="primary-button" type="button">
            Contact Owner
          </button>
        </div>
      </section>
    </main>
  );
}
