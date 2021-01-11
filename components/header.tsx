import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 400,
      delay: 0,
      duration: 1000,
      once: true,
    });

    const nav = document.querySelector('#nav');
    const hamburger = document.querySelector('#hamburger');
    const badge = document.querySelector('#badge');
    const showcase = document.querySelector('#showcase');

    const showcaseOptions = {
      rootMargin: '-10px 0px 0px 0px',
    };

    const showcaseObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          nav.classList.add('nav-scrolled');
          hamburger.classList.add('hamburger-scrolled');
          badge.classList.add('badge-show');
        } else {
          nav.classList.remove('nav-scrolled');
          hamburger.classList.remove('hamburger-scrolled');
          badge.classList.remove('badge-show');
        }
      });
    }, showcaseOptions);

    showcaseObserver.observe(showcase);
  }, []);

  return (
    <header>
      <nav
        id="nav"
        className="fixed z-50 w-full bg-dark md:bg-transparent transition-all duration-500 ease-in-out"
      >
        <button
          id="hamburger"
          className="absolute top-5 right-5 p-1 block md:hidden"
          onClick={() => {
            setIsNavOpen(!isNavOpen);
            console.log(isNavOpen);
          }}
        >
          {isNavOpen ? (
            <span className="text-light text-4xl">&times;</span>
          ) : (
            <>
              <div className="w-8 h-0.5 bg-light m-2 rounded" />
              <div className="w-8 h-0.5 bg-light m-2 rounded" />
              <div className="w-8 h-0.5 bg-light m-2 rounded" />
            </>
          )}
        </button>
        <ul
          className={`${
            !isNavOpen && 'hidden md:flex'
          } flex flex-col md:flex-row justify-center items-center w-full h-screen md:h-20 p-6 list-none`}
        >
          <li>
            <a
              id="badge"
              className="nav-link relative font-extralight text-xl text-light p-3 transition-all duration-500 ease-in-out opacity-0 invisible"
              href="#"
              onClick={() => setIsNavOpen(false)}
            >
              Luis Manuel G.
            </a>
          </li>
          <div className="flex-grow hidden md:block" />
          <li className="md:mr-5">
            <a
              className="nav-link relative font-extralight text-xl text-light p-3"
              href="#about"
              onClick={() => setIsNavOpen(false)}
            >
              Acerca de
            </a>
          </li>
          <li>
            <a
              className="nav-link relative font-extralight text-xl text-light p-3"
              href="#projects"
              onClick={() => setIsNavOpen(false)}
            >
              Proyectos personales
            </a>
          </li>
        </ul>
        {/* </div> */}
      </nav>
      <style jsx>
        {`
          .nav-scrolled {
            background: #181818;
            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
          }

          .hamburger-scrolled {
            background: #181818;
            border-radius: 5px;
            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
          }

          .badge-show {
            visibility: visible;
            opacity: 1;
          }

          .nav-link::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 2px;
            border-radius: 50px;
            background: currentColor;
            width: 40px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 250ms ease-in-out;
          }

          .nav-link:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
