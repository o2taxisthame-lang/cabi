import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (path: string) => void;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, onNavigate }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (onNavigate && href.startsWith('/')) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 bg-slate-100 border-b border-slate-200">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs sm:text-sm text-slate-600 flex-wrap">
        <a
          href="/"
          onClick={(e) => handleClick(e, '/')}
          className="inline-flex items-center gap-1 hover:text-emerald-700 transition-colors font-medium"
        >
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </a>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              {isLast || !item.href ? (
                <span className="font-semibold text-slate-900 truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href!)}
                  className="hover:text-emerald-700 transition-colors"
                >
                  {item.label}
                </a>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};
