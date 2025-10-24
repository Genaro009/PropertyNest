import { Bed, Bath, Maximize, MapPin, Phone } from 'lucide-react';
import { Property } from '../lib/supabase';

interface PropertyCardProps {
  property: Property;
  onInquire: (property: Property) => void;
}

export default function PropertyCard({ property, onInquire }: PropertyCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const statusColors = {
    for_sale: 'bg-green-500',
    for_rent: 'bg-blue-500',
    sold: 'bg-gray-500',
    rented: 'bg-gray-500',
  };

  const statusLabels = {
    for_sale: 'For Sale',
    for_rent: 'For Rent',
    sold: 'Sold',
    rented: 'Rented',
  };

  const propertyTypeLabels = {
    house: 'House',
    apartment: 'Apartment',
    land: 'Land',
    commercial: 'Commercial',
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.images[0] || 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800'}
          alt={property.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`${statusColors[property.status]} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
            {statusLabels[property.status]}
          </span>
          {property.featured && (
            <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          )}
        </div>
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
          {propertyTypeLabels[property.property_type]}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{property.title}</h3>
          <span className="text-2xl font-bold text-yellow-600">{formatPrice(property.price)}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{property.location}</span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>

        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
          {property.bedrooms > 0 && (
            <div className="flex items-center space-x-1 text-gray-700">
              <Bed size={20} />
              <span className="font-semibold">{property.bedrooms}</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center space-x-1 text-gray-700">
              <Bath size={20} />
              <span className="font-semibold">{property.bathrooms}</span>
            </div>
          )}
          {property.area_sqm > 0 && (
            <div className="flex items-center space-x-1 text-gray-700">
              <Maximize size={20} />
              <span className="font-semibold">{property.area_sqm} m²</span>
            </div>
          )}
        </div>

        <button
          onClick={() => onInquire(property)}
          className="w-full flex items-center justify-center space-x-2 bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
        >
          <Phone size={18} />
          <span>Inquire Now</span>
        </button>
      </div>
    </div>
  );
}
