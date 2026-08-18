import React from 'react';
import { Car, Home, Phone, MessageCircle, ArrowLeft } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config/business';
import { Breadcrumbs } from '../components/Breadcrumbs';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-slate-50 min-h-[70vh] flex flex-col">
      <Breadcrumbs items={[{ label: 'Page Not Found' }]} onNavigate={onNavigate} />

      <div className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-lg w-full bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 text-center shadow-sm">
          <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-emerald-600">
            <Car className="w-8 h-8" />
          </div>

          <span className="text-4xl sm:text-5xl font-black text-emerald-600 block mb-2">
            404
          </span>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Page Not Found
          </h1>

          <p className="text-slate-600 text-sm mt-3 leading-relaxed">
            The page you are looking for does not exist or has been moved. You can return to our homepage or contact O2Taxi directly for bookings.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Return Home</span>
            </a>
            <a
              href={BUSINESS_CONFIG.phoneHref}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
