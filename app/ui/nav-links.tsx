'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Invoices', href: '/dashboard/invoices' },
  { name: 'Customers', href: '/dashboard/customers' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`text-white text-decoration-none mb-2 p-2 rounded ${
            pathname === link.href ? 'bg-white text-primary fw-bold' : ''
          }`}
          style={pathname === link.href ? { color: '#0d6efd' } : {}}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}