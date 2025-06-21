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

       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-10 px-6 ml-20 mr-20'>
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
  className="object-cover w-full h-[400px] transition-transform duration-500 hover:scale-105 hover:brightness-110"
/>
      </Link>
      <h1 className='text-2xl mt-3 transition-all duration-300 hover:tracking-wider'>Soft Leather Jackets</h1>
      <p className='text-gray-500 mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</p>
      <h1 className='mt-3 font-semibold tracking-widest  transition-all'>Discover Now</h1>
    </div>
  ))}
</div>
      </section>

      <section className='bg-white py-16'>
        <div className='px-6'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center'>
            {[
              { icon: FaCalendarAlt, title: 'Book An Appointment' },
              { icon: FaShoppingBag, title: 'Pick Up In Store' },
              { icon: FaGift, title: 'Special Packaging' },
              { icon: FaUndo, title: 'Free Global Returns' }
            ].map(({ icon: Icon, title }, idx) => (
              <div key={idx} data-aos="fade-up" data-aos-delay={idx * 150}>
                <Icon className='text-4xl text-gray-400 mx-auto transition-transform duration-500 hover:scale-110' />
                <h2 className='text-2xl mt-4'>{title}</h2>
                <p className='text-gray-500 mt-2'>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
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
                  className="object-cover w-full h-[400px] transition-transform duration-500 hover:scale-105 hover:brightness-110"
                /></a>
                <h2 className='text-gray-400 mt-3 tracking-widest text-lg'>{['SHOP FOR MEN', 'SHOP FOR WOMEN', 'SHOP ACCESSORIES'][idx]}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-yellow-100 py-16 text-center px-4" data-aos="zoom-in">
        <h2 className="text-lg tracking-widest text-gray-700 mb-6">WE LOVE GOOD COMPLIMENT</h2>
        <div className="text-2xl sm:text-4xl font-light text-gray-600 leading-snug max-w-4xl mx-auto">
          <p>“{testimonials[current].quote}”</p>
        </div>
        <p className="mt-4 text-sm text-gray-500 uppercase">{testimonials[current].author}</p>
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

      <section className='px-6 mt-10 mb-20'>
        <h1 className='text-left text-2xl mb-6' data-aos="fade-right">READ BLOG POSTS</h1>
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
              <h2 className='text-gray-400 mt-3'>FASHION / JUL 11, 2022</h2>
              <h1 className='mt-2 text-2xl hover:underline transition'>{[
                "HOW TO LOOK OUTSTANDING IN PASTEL",
                "TOP 10 FASHION TREND FOR SUMMER",
                "CRAZY FASHION WITH UNIQUE MOMENT"
              ][idx]}</h1>
              <p className='text-gray-400 mt-2'>Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla...</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-200 py-20 px-6" data-aos="fade-up">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-semibold mb-8">SIGN UP FOR OUR NEWSLETTER</h1>
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
  <div className="container px-5 py-24 mx-auto ml-10 mr-10">
    <div className="flex flex-wrap md:text-left text-center gap-28 -mb-10 -mx-4">
       <div className="lg:w-1/6 md:w-1/2 w-full px-3 ">
        <h2 className="title-font font-bold ml-5 text-white tracking-widest text-4xl mb-3">Kaira</h2>
        <nav className="list-none mb-10">
         <p className='ml-5 w-3xs'>
          Gravida massa volutpat aenean odio. Amet, turpis erat nullam fringilla elementum diam in. Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit.
         </p>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-2xl ml-5 mb-3">Quick Links</h2>
        <nav className="list-none mb-10 ml-5">
          <li>
            <a className="text-gray-400 hover:text-white">Home</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">About</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Services</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">Help & Info</h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-400 hover:text-white">Track Your Order</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Returns + Exchanges</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Shipping + Delivery</a>
          </li>
          <li>
            <a className="text-gray-400 hover:text-white">Contact Us</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/6 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-white tracking-widest text-2xl mb-3">Contact Us</h2>
        <nav className="list-none mb-10">
         <p className='w-2xs'>
          Do you have any questions or suggestions? contact@yourcompany.com
         </p>
         <p className='mt-5 w-3xs'>
          Do you need support? Give us a call. +43 720 11 52 78


         </p>
        </nav>
      </div>
     
     
     
    </div>
  </div>
  
  <div className="bg-gray-800 bg-opacity-75">
    <div className="container mx-auto py-7 px-7 flex flex-wrap flex-col sm:flex-row">
      <p className="text-gray-400 text-sm text-center sm:text-left ml-10">© 2025 Kaira —
        <a href="https://twitter.com/knyttneve" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@Nikunj</a>
      </p>
      <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-400 text-sm">Enamel pin tousled raclette tacos irony</span>
    </div>
  </div>
</footer>
    </main>
  );
};

export default Page;




