import { Button } from '@/components/ui/button';
import { navigationData } from '@/constant/navigation-data';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className='fixed top-0 z-50 w-full'>
      <div className='custom-container flex-between h-16 md:h-21'>
        {/* 1. Image */}
        <Image
          src='/images/logo.svg'
          alt='logo-navbar'
          width={158}
          height={56}
          className='max-md:h-9 max-md:w-35.25'
        />

        {/* 2. Nav */}
        <nav className='hidden lg:block'>
          <ul className='flex-start gap-3'>
            {navigationData.map((data) => (
              <li key={data.label}>
                <Link href={data.href} className='hover:text-primary-300 p-4'>
                  {data.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* 3.Button */}
        <Button className='hidden lg:flex'>
          <Link href='#contact'>Get Started</Link>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
