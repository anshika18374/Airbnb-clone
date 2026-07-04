import PropertyCard from "./PropertyCard";

function PropertyGrid({ title, properties }) {
  return (
    <div className="px-10 py-6">
      <h2 className="text-xl font-semibold mb-4">{title} →</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
}

export default PropertyGrid;