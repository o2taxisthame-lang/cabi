import React from 'react';
import {
  Car,
  Plane,
  Compass,
  Train,
  Package,
  GraduationCap,
  Briefcase,
  Sparkles,
  ArrowRight,
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceCardProps {
  service: ServiceItem;
  onNavigate: (path: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onNavigate }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-6 h-6 text-emerald-600" />;
      case 'Plane':
        return <Plane className="w-6 h-6 text-emerald-600" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-emerald-600" />;
      case 'Train':
        return <Train className="w-6 h-6 text-emerald-600" />;
      case 'Package':
        return <Package className="w-6 h-6 text-emerald-600" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-emerald-600" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-emerald-600" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-emerald-600" />;
      default:
        return <Car className="w-6 h-6 text-emerald-600" />;
    }
  };

  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate(`/${service.slug}/`);
  };

  return (
    <div
      id={`service-card-${service.id}`}
      className="group bg-white rounded-xl border border-slate-200 hover:border-emerald-500/80 shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col justify-between"
    >
      <div>
        <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:bg-emerald-100 transition-all">
          {getIcon(service.iconName)}
        </div>
        <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-emerald-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm mt-2 leading-relaxed">
          {service.shortDescription}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <a
          href={`/${service.slug}/`}
          onClick={handleCardClick}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>

        <a
          href="/book-your-taxi/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate('/book-your-taxi/', { journeyType: service.title });
          }}
          className="text-xs font-semibold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded-md transition-colors"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};
