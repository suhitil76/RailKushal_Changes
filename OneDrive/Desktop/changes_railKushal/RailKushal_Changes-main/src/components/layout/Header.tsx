import React from 'react';
import { Search, Bell, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenSaarthi?: () => void;
  onOpenNotifications?: () => void;
  notificationCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSaarthi,
  onOpenNotifications,
  notificationCount = 24,
}) => {
  return (
    <header className="h-16 bg-white border-b border-slate-200 px-6 flex items-center justify-between sticky top-0 z-30 shadow-sm">
      {/* Search Bar */}
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search station (NDLS, PUNE), section, task (ENG-104), block ID..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0f4c81]"
          />
        </div>
      </div>

      {/* Header Actions & Pills */}
      <div className="flex items-center gap-3">
        <span className="px-2.5 py-1 bg-sky-50 text-sky-700 text-xs font-semibold rounded-md border border-sky-200">
          PROTOTYPE MODE
        </span>

        <span className="hidden md:inline-flex px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-md border border-emerald-200">
          Live Central Railway Sync
        </span>

        <span className="hidden lg:inline-flex px-2.5 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-md border border-slate-200">
          Div: ALL INDIA / IR
        </span>

        <button
          onClick={onOpenSaarthi}
          className="flex items-center gap-2 px-3 py-1.5 bg-[#0f4c81] hover:bg-[#003366] text-white text-xs font-medium rounded-lg transition-colors shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>RailSaarthi AI</span>
        </button>

        <button
          onClick={onOpenNotifications}
          className="relative p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Bell className="w-5 h-5" />
          {notificationCount > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
              {notificationCount}
            </span>
          )}
        </button>

        <div className="flex items-center gap-2.5 pl-2 border-l border-slate-200">
          <div className="w-8 h-8 rounded-full bg-[#0f4c81] text-white flex items-center justify-center font-semibold text-xs shadow-sm">
            RS
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold text-slate-800 leading-none">Rajesh Sharma</p>
            <p className="text-[10px] text-slate-500 mt-0.5">CONTROL OFFICE</p>
          </div>
        </div>
      </div>
    </header>
  );
};
