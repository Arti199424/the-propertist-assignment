export default function PropertySkeleton() {
  return (
    <article className="property-card skeleton-card" aria-hidden="true">
      <div className="skeleton skeleton-image" />
      <div className="card-body">
        <div className="skeleton skeleton-line wide" />
        <div className="skeleton skeleton-line" />
        <div className="skeleton-meta">
          <div className="skeleton skeleton-pill" />
          <div className="skeleton skeleton-pill small" />
        </div>
      </div>
    </article>
  );
}
