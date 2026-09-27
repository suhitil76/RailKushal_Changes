import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  CheckSquare, 
  Map, 
  Layers, 
  Cpu, 
  Calendar, 
  CalendarDays, 
  CloudSun, 
  FlaskConical, 
  BarChart3, 
  Bell,
  RefreshCw
} from 'lucide-react';

const navItems = [
  { path: '/control-dashboard', label: 'Control Dashboard', icon: LayoutDashboard },
  { path: '/request-review', label: 'Request Review', icon: CheckSquare, badge: '23' },
  { path: '/map', label: 'All India Railway Map', icon: Map },
  { path: '/asset-register', label: 'Asset & Task Register', icon: Layers, badge: '46 Crit', badgeColor: 'bg-red-500' },
  { path: '/ai-priority', label: 'AI Priority Workbench', icon: Cpu },
  { path: '/block-planning', label: 'Block Planning Workspace', icon: Calendar },
  { path: '/weekly-plan', label: 'Weekly Plan', icon: CalendarDays },
  { path: '/monthly-plan', label: 'Monthly Plan', icon: CalendarDays },
  { path: '/weather-intelligence', label: 'Weather Intelligence', icon: CloudSun },
  { path: '/what-if-simulator', label: 'What-if Simulator', icon: FlaskConical },
  { path: '/analytics', label: 'Analytics & Reports', icon: BarChart3 },
  { path: '/notifications', label: 'Notifications', icon: Bell },
];

export const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between h-screen sticky top-0 shadow-sm z-20">
      <div>
        {/* Brand Header */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#0f4c81] flex items-center justify-center text-white font-black text-base shadow-sm">
            RK
          </div>
          <div>
            <h1 className="font-extrabold text-base tracking-tight text-slate-900 leading-none">
              RAILKUSHAL
            </h1>
            <p className="text-[10px] text-slate-500 font-medium mt-0.5">Indian Railways Block Planning</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-3 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    isActive
                      ? 'bg-[#0f4c81] text-white font-semibold shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`
                }
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`px-1.5 py-0.5 text-[10px] font-bold text-white rounded-full ${
                      item.badgeColor || 'bg-amber-500'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-slate-200 bg-slate-50">
        <button className="w-full flex items-center justify-center gap-2 px-3 py-2 bg-white border border-slate-200 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-100 transition-colors shadow-xs">
          <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
          <span>Reset Demo Data</span>
        </button>
        <p className="text-[10px] text-slate-400 text-center mt-2">SIH 2026 • PS ID: 26027</p>
      </div>
    </aside>
  );
};
