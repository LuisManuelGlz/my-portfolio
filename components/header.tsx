import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
  useEffect(() => {
    AOS.init({
      offset: 400,
      delay: 0,
      duration: 1000,
      once: true,
    });

    const nav = document.querySelector('#nav');
    const badge = document.querySelector('#badge');
    const showcase = document.querySelector('#showcase');

    const showcaseOptions = {
      rootMargin: '-10px 0px 0px 0px',
    };

    const showcaseObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          nav.classList.add('nav-scrolled');
          badge.classList.add('badge-show');
        } else {
          nav.classList.remove('nav-scrolled');
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
        className="fixed z-50 flex justify-between items-center w-full p-6 bg-transparent transition-colors duration-500 ease-in-out"
      >
        <div>
          <a
            id="badge"
            className="nav-link relative font-extralight text-xl text-light p-3 transition-all duration-500 ease-in-out opacity-0 invisible"
            href="#"
          >
            Luis Manuel G.
          </a>
        </div>
        <div>
          <ul className="flex list-none">
            <li className="mr-5">
              <a
                className="nav-link relative font-extralight text-xl text-light p-3"
                href="#about"
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                className="nav-link relative font-extralight text-xl text-light p-3"
                href="#projects"
              >
                Proyectos personales
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>
        {`
          .nav-scrolled {
            background: #181818;
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
