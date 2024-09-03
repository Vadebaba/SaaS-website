"use client";
import ProductImage from '@/assets/product-image.png';
import Image from 'next/image';
import PyramidImage from '@/assets/pyramid.png';
import TubeImage from '@/assets/tube.png';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef } from 'react';


export const ProductShowcase = () => {
  const sectionRef = useRef(null);

  const {scrollYProgress}= useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const translateY = useTransform(scrollYProgress, [0,1], [-150, 150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFf] to-[#d2dcff] py-24 overflow-x-clip">
      <div className="container">
        <div className='section-heading'>
          <div className="flex justify-center">
            <div className="tag">Boost your Productivity</div>
          </div>

          <h2 className="section-title mt-5">
            A more effective way to track progress
          </h2>
          <p className="section-desc mt-5">
            Effortlessly turn your ideas into a fully functional, responsive Saas
            website in minutes with this template.
          </p>
        </div>

        <div className='relative'>
          <Image
            src={ProductImage}
            alt="product-image"
            className="mt-10"
          />

          <motion.img
            src={PyramidImage.src}
            alt="pyramid-image"
            height={230}
            width={230}
            className="hidden md:block absolute -right-36 -top-32"
            style={{
              translateY,
            }}
          />

          <motion.img
            src={TubeImage.src}
            alt="tube-image"
            height={220}
            width={220}
            className="hidden md:block absolute bottom-24 -left-36"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
