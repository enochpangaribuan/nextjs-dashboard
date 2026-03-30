import '@/app/ui/global.css';
import NavLinks from '@/app/ui/nav-links';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="dashboard-wrapper">
      <nav className="d-flex flex-column p-3 bg-primary" style={{ width: '200px', minHeight: '100vh' }}>
        <h2 className="text-white fs-5 mb-4">Acme</h2>
        <NavLinks />
      </nav>
      <div className="flex-grow-1">
        {children}
      </div>
    </div>
  );
}