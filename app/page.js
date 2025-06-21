"use client";
import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft, FaCalendarAlt, FaShoppingBag, FaGift, FaUndo } from "react-icons/fa";
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const Page = () => {
  const testimonials = [
    {
      quote: "Best fitted white denim shirt more than expected crazy soft, flexible",
      author: "UPTOP"
    },
    {
      quote: "More than expected, soft, flexible and best white simple denim shirt",
      author: "CASUAL WAY"
    },
    {
      quote: "Perfect white denim shirt. Flexible and super soft, feels amazing",
      author: "DENIM CRAZE"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className='bg-gray-100 pb-10'>
        <div className='flex flex-col items-center text-center px-4' data-aos="fade-down">
          <h1 className='font-serif tracking-widest mt-16 text-4xl sm:text-6xl'>New Collection</h1>
          <span className='text-gray-500 text-lg mt-6 max-w-3xl'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </span>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 px-6 sm:px-12'>
          {[
            { num: 1, href: '/slj' },
            { num: 2, href: '/plj' },
            { num: 6, href: '/blj' },
          ].map((item, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Link href={item.href}>
                <Image
                  src={`/banner-image-${item.num}.jpg`}
                  alt={`Banner Image ${idx + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-[300px] sm:h-[400px] transition-transform duration-500 hover:scale-105 hover:brightness-110"
                />
              </Link>
              <h1 className='text-xl sm:text-2xl mt-3 transition-all duration-300 hover:tracking-wider'>Soft Leather Jackets</h1>
              <p className='text-gray-500 mt-2 text-sm sm:text-base'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
              <h1 className='mt-3 font-semibold tracking-widest text-sm sm:text-base transition-all'>Discover Now</h1>
            </div>
          ))}
        </div>
      </section>

      <section className='bg-white py-16'>
        <div className='px-6 sm:px-12'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center'>
            {[
              { icon: FaCalendarAlt, title: 'Book An Appointment' },
              { icon: FaShoppingBag, title: 'Pick Up In Store' },
              { icon: FaGift, title: 'Special Packaging' },
              { icon: FaUndo, title: 'Free Global Returns' }
            ].map(({ icon: Icon, title }, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
                <Icon className='text-3xl sm:text-4xl text-gray-400 mx-auto transition-transform duration-500 hover:scale-110' />
                <h2 className='text-xl sm:text-2xl mt-4'>{title}</h2>
                <p className='text-gray-500 mt-2 text-sm sm:text-base'>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10'>
            {[1, 2, 3].map((num, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
                <a href="">
                  <Image
                    src={`/cat-item${num}.jpg`}
                    alt={`Category Image ${idx + 1}`}
                    width={400}
                    height={400}
                    className="object-cover w-full h-[300px] sm:h-[400px] transition-transform duration-500 hover:scale-105 hover:brightness-110"
                  />
                </a>
                <h2 className='text-gray-400 mt-3 tracking-widest text-base sm:text-lg'>{['SHOP FOR MEN', 'SHOP FOR WOMEN', 'SHOP ACCESSORIES'][idx]}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-100 py-16 text-center px-4" data-aos="zoom-in">
        <h2 className="text-sm sm:text-lg tracking-widest text-gray-700 mb-6">WE LOVE GOOD COMPLIMENT</h2>
        <div className="text-xl sm:text-3xl font-light text-gray-600 leading-snug max-w-4xl mx-auto">
          <p>“{testimonials[current].quote}”</p>
        </div>
        <p className="mt-4 text-xs sm:text-sm text-gray-500 uppercase">{testimonials[current].author}</p>
        <div className="flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === current ? 'bg-gray-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrent(index)}
            ></button>
          ))}
        </div>
      </section>

      <section className='px-6 sm:px-12 mt-10 mb-20'>
        <h1 className='text-left text-xl sm:text-2xl mb-6' data-aos="fade-right">READ BLOG POSTS</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12'>
          {[1, 2, 3].map((num, idx) => (
            <div key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Image
                src={`/post-image${num}.jpg`}
                alt={`Post Image ${idx + 1}`}
                width={300}
                height={220}
                className="object-cover w-full h-[220px] transition-transform duration-500 hover:scale-105 hover:brightness-110"
              />
              <h2 className='text-gray-400 mt-3 text-sm sm:text-base'>FASHION / JUL 11, 2022</h2>
              <h1 className='mt-2 text-lg sm:text-2xl hover:underline transition'>{["HOW TO LOOK OUTSTANDING IN PASTEL", "TOP 10 FASHION TREND FOR SUMMER", "CRAZY FASHION WITH UNIQUE MOMENT"][idx]}</h1>
              <p className='text-gray-400 mt-2 text-sm sm:text-base'>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla...</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-200 py-20 px-6" data-aos="fade-up">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-xl sm:text-3xl font-semibold mb-8">SIGN UP FOR OUR NEWSLETTER</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full sm:w-96 px-5 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-base"
            />
            <button className="w-full sm:w-auto px-8 py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition">
              SIGN UP
            </button>
          </div>
        </div>
      </section>

      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-wrap text-center sm:text-left gap-12 justify-between">
            <div className="w-full sm:w-auto px-4">
              <h2 className="title-font font-bold text-white tracking-widest text-3xl mb-3">Kaira</h2>
              <p className='text-sm'>Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.</p>
            </div>
            <div className="w-full sm:w-auto px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Quick Links</h2>
              <ul className="list-none space-y-2">
                {['Home', 'About', 'Services', 'Contact'].map((item, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-auto px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Help & Info</h2>
              <ul className="list-none space-y-2">
                {['Track Your Order', 'Returns + Exchanges', 'Shipping + Delivery', 'Contact Us'].map((item, i) => (
                  <li key={i} className="hover:text-white cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
            <div className="w-full sm:w-auto px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-xl mb-3">Contact Us</h2>
              <p className='text-sm'>Do you have any questions or suggestions? contact@yourcompany.com</p>
              <p className='mt-3 text-sm'>Do you need support? +43 720 11 52 78</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-800">
          <div className="container mx-auto py-4 px-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm">© 2025 Kaira — <a href="https://twitter.com/knyttneve" className="ml-1 text-gray-500" target="_blank" rel="noopener noreferrer">@Nikunj</a></p>
            <span className="text-sm mt-2 sm:mt-0">Enamel pin tousled raclette tacos irony</span>
          </div>
        </div>
      </footer>
    </main>
  );
};




export default Page;




