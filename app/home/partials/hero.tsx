import FeatureCard from '@/components/feature-card';
import { Button } from '@/components/ui/button';
import SkewMotion from '@/components/ui/skew-motion';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className='custom-container flex flex-wrap items-center gap-7 overflow-hidden pt-28 md:pt-36.75'>
      {/* kiri */}
      <div className='flex-[5.3] basis-80'>
        <h1 className='display-lg-bold md:display-2xl-bold text-neutral-25'>
          Your Trusted IT{' '}
          <span className='text-primary-300'>Partner for Digital Success</span>
        </h1>
        <p className='text-sm-regular md:text-md-regular mt-3 text-neutral-400'>
          We craft custom IT solutions that align with your goals, ensuring
          efficiency, security, and innovation
        </p>

        <Button asChild className='mt-6 w-full md:mt-12 md:w-fit'>
          <Link href='#'>Get Started</Link>
        </Button>
      </div>

      {/* kanan */}

      <div
        className='relative flex-[4.7] basis-80'
        style={{ height: 'clamp(18.31rem, 52.81vw, 39.88rem)' }}
      >
        {/* image */}
        <SkewMotion asChild>
          <Image
            src='/images/hero-image.png'
            fill
            alt='hero-image'
            className='object-contain'
          />
        </SkewMotion>

        {/* feature card */}
        <FeatureCard
          icon={<Icon icon='mingcute:flash-fill' />}
          title='Elite Solutions'
          description='Cutting-edge tech, flawless execution'
          className='absolute top-[10%] right-1/2 -translate-x-[6.25%]'
          animationDelay={0.5}
        />

        {/* feature card */}
        <FeatureCard
          icon={<Icon icon='bi:bar-chart-fill' />}
          title='Real Impact'
          description='We turn ideas into measurable success'
          className='absolute top-[49%] right-1/2 -translate-x-[48%]'
          animationDelay={0.5}
        />
        {/* feature card */}
        <FeatureCard
          icon={<Icon icon='ri:brain-fill' />}
          title='Smart Tech'
          description='Innovation that drives real growth.'
          className='absolute top-[43%] left-1/2 translate-x-[37.5%]'
          animationDelay={0.5}
        />
      </div>

      {/* decoration */}
      <div className='from-base-background absolute inset-x-0 bottom-0 h-[23%] bg-gradient-to-t to-transparent' />
    </section>
  );
};
export default Hero;
