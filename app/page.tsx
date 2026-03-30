import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="d-flex flex-column p-4" style={{ minHeight: '100vh' }}>
      <div className="bg-primary p-4 rounded mb-4" style={{ height: '80px' }}>
        {/* <AcmeLogo /> */}
      </div>
      <div className="d-flex flex-column flex-md-row gap-4 flex-grow-1">
        <div className="d-flex flex-column justify-content-center gap-4 bg-light rounded p-5">
          <p className="fs-4">
            <strong>Welcome to Acme.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-primary">
              Next.js Learn Course
            </a>
            , brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className="btn btn-primary d-flex align-items-center gap-2 w-auto align-self-start"
          >
            <span>Log in</span> <ArrowRightIcon style={{ width: '20px' }} />
          </Link>
        </div>
        <div className="d-flex align-items-center justify-content-center p-4">
          {/* Add Hero Images Here */}
        </div>
      </div>
    </main>
  );
}