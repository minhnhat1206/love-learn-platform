
import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, CalendarHeart, Gift, Heart, ClipboardCheck } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const SidebarLink = ({ to, icon: Icon, label }: { to: string; icon: any; label: string }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 font-semibold mb-2 ${isActive
        ? 'bg-pastel-pink text-white shadow-lg shadow-pink-200 scale-105'
        : 'text-gray-500 hover:bg-white hover:text-pastel-pinkDark'
      }`
    }
  >
    <Icon size={20} />
    <span>{label}</span>
  </NavLink>
);

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-[#FFF5F7]">
      {/* Sidebar */}
      <aside className="w-64 fixed inset-y-0 left-0 bg-white/80 backdrop-blur-md border-r border-pink-100 p-6 hidden md:block z-20">
        <div className="flex items-center gap-2 mb-10 text-pastel-pinkDark px-2">
          <Heart className="fill-pastel-pink text-pastel-pink animate-pulse-slow" />
          <h1 className="text-2xl font-bold font-sans tracking-tight">Love & Learn</h1>
        </div>

        <nav>
          <SidebarLink to="/" icon={LayoutDashboard} label="Dashboard" />
          <SidebarLink to="/lessons" icon={BookOpen} label="Bài Học" />
          <SidebarLink to="/tests" icon={ClipboardCheck} label="Kiểm Tra" />
          <SidebarLink to="/schedule" icon={CalendarHeart} label="Lịch Học" />
          <SidebarLink to="/rewards" icon={Gift} label="Quà Tặng" />
        </nav>

        <div className="absolute bottom-8 left-6 right-6 p-4 bg-pastel-yellow/30 rounded-2xl border border-pastel-yellow/50">
          <p className="text-xs text-gray-600 italic text-center">
            "Hôm nay Vợ đã rất cố gắng rồi. Yêu vợ! ❤️"
          </p>
        </div>
      </aside>

      {/* Mobile Header (Hidden on Desktop) */}
      <div className="md:hidden fixed top-0 w-full bg-white/90 backdrop-blur border-b border-pink-100 z-30 p-4 flex justify-between items-center">
        <span className="font-bold text-pastel-pinkDark">Love & Learn</span>
        <div className="flex gap-4">
          <NavLink to="/" className={({ isActive }) => isActive ? "text-pastel-pink" : "text-gray-400"}><LayoutDashboard size={24} /></NavLink>
          <NavLink to="/lessons" className={({ isActive }) => isActive ? "text-pastel-pink" : "text-gray-400"}><BookOpen size={24} /></NavLink>
          <NavLink to="/rewards" className={({ isActive }) => isActive ? "text-pastel-pink" : "text-gray-400"}><Gift size={24} /></NavLink>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 p-4 md:p-8 pt-20 md:pt-8 overflow-y-auto min-h-screen">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
