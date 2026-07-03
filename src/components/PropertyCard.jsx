import { useState } from "react";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { toast } from "sonner";

function PropertyCard({ property }) {
  const [isFavourite, setIsFavourite] = useState(false);

  const handleFavourite = () => {
    setIsFavourite(!isFavourite);
    if (!isFavourite) {
      toast.success("Added to wishlist!");
    } else {
      toast("Removed from wishlist");
    }
  };

  return (
    <div className="rounded-xl overflow-hidden cursor-pointer group">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover rounded-xl group-hover:brightness-90 transition"
        />
        <div className="absolute top-3 left-3 bg-white text-xs font-semibold px-2 py-1 rounded-full">
          {property.badge}
        </div>
        <div
          className="absolute top-3 right-3 text-white hover:scale-110 transition"
          onClick={handleFavourite}
        >
          {isFavourite ? (
            <FaHeart size={20} className="text-red-500" />
          ) : (
            <FaRegHeart size={20} />
          )}
        </div>
      </div>

      <div className="pt-2">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-sm">{property.title}</h3>
          <div className="flex items-center gap-1 text-sm">
            <FaStar size={12} />
            <span>{property.rating}</span>
          </div>
        </div>
        <p className="text-gray-500 text-sm">{property.location}</p>
        <p className="text-sm mt-1">
          <span className="font-semibold">₹{property.price}</span> for {property.nights} nights
        </p>
      </div>
    </div>
  );
}

export default PropertyCard;