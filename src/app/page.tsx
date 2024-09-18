import React from 'react';
import Component from '../components/components';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Component />
      <div className="w-full max-w-[550px] mx-auto lg:order-last">
        <div className="relative w-full aspect-video sm:w-full lg:aspect-square">
          <Image
            src="/images/AdobeStock_767456269.jpeg"
            alt="Periospot AI"
            fill
            className="object-cover rounded-xl"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent rounded-xl"></div>
        </div>
      </div>
    </div>
  );
}