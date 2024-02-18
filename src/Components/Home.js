import React,{ useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import './styles.css';
import Navbar from '../Components/Navbar/Navbar.js';
// import Navbar from './Navbar.js';
import Hero from './Hero.js';
import Footer from './Footer.js';
import image from '../img/WhatsApp Image 2023-07-22 at 23.19.34.jpg';

export default function Home() {
    const stats = [
        { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
        { id: 2, name: 'Assets under holding', value: '$119 trillion' },
        { id: 3, name: 'New users annually', value: '46,000' },
        { id: 4, name: 'New users annually', value: '46,000' },
    ]

    const slides = [
        {
            url: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80',
        },

        {
            url: 'https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80',
        },
        {
            url: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80',
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
  return (
    <div>
        <Navbar />
        <Hero />
            {/* <div className="container">
                <div className="box">
                    <div className="contains">

                        <div className="section-1">
                            <h1>Hi, I'am Bella</h1>
                            <h3>Frontend Developer</h3>
                            <p>High level experience in web design and
                                development knowledge,producing quality work.</p>
                        </div>

                        <div className="section-2">
                            <img src={image} alt="img" />
                        </div>

                        <div className="section-3">
                            <a href="#"><i className="fa-brands fa-square-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>

                    </div>
                </div>
            </div> */}


        <div classNameName="max-w-[1400px] h-[780px] w-full m-auto py-7 px-4">
        {/* <div classNameName="bg-white py-24 sm:py-32 "> */}
            <div classNameName="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
                {stats.map((stat) => (
                    <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        {stat.value}
                    </dd>
                    </div>
                ))}
                </dl>
            </div>
        </div>

        {/* crousel */}
        <div className='max-w-[1400px] h-[780px] w-full m-auto py-7 px-4 relative group mt-8'>
            <div
                style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            ></div>
            {/* Left Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
            </div>
            {/* Right Arrow */}
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>
            <div className='flex top-4 justify-center py-2'>
                {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => goToSlide(slideIndex)}
                    className='text-2xl cursor-pointer'
                >
                    <RxDotFilled />
                </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
  )
}
