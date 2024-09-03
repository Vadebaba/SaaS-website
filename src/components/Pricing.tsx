/* eslint-disable react/jsx-key */
"use client";
import CheckIcon from '@/assets/check.svg'
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';


const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "5GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 15,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 10 project members",
      "Unlimited tasks and projects",
      "70GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 29,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 20 project members",
      "Unlimited tasks and projects",
      "300GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className='section-heading' >
          <h2 className="section-title">Pricing</h2>
          <p className="section-desc mt-5">
            Free forever, Upgrade for unlimited tasks, better security, and
            exclusive features.
          </p>
        </div>

        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              features,
              popular,
              inverse,
            }) => (
              <article className={twMerge("card",
                inverse === true && 'border-black bg-black text-white')}>

                <div className='flex justify-between '>
                  <h3 className={twMerge('text-lg font-bold text-black/50',
                    inverse === true && 'text-white/60')}>
                    {title}
                  </h3>
                  {popular === true && (
                    <div className='inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20'>
                      <motion.span

                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: 'linear',
                          repeatType: 'loop',
                        }}

                        className='bg-[linear-gradient(to_right,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff,#dd7ddf,#e1cd86,#bbcb92,#71c2ef,#3bffff)]
                      [background-size:200%] text-transparent bg-clip-text font-medium'>
                        Popular
                      </motion.span>
                    </div>
                  )}

                </div>

                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    ${monthlyPrice}
                  </span>
                  <span className="tracking-tighter font-bold text-black/50 ">
                    /month
                  </span>
                </div>

                <button className={twMerge("btn btn-primary w-full mt-[30px]",
                  inverse === true && 'bg-white text-black')}>
                  {buttonText}
                </button>

                <ul className="flex flex-col gap-5 mt-8 ">
                  {features.map((feature, i) => (
                    <li key={i} className='text-sm flex items-center gap-4'>
                      <CheckIcon className='h-6 w-6 ' />
                      <span> {feature}</span>
                    </li>
                  ))}
                </ul>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
};





