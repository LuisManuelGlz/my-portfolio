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
          nav.classList.add('nav__scrolled');
          badge.classList.add('nav__badge_show');
        } else {
          nav.classList.remove('nav__scrolled');
          badge.classList.remove('nav__badge_show');
        }
      });
    }, showcaseOptions);

    showcaseObserver.observe(showcase);
  }, []);

  return (
    <header>
      <nav id="nav" className="nav">
        <div>
          <a id="badge" className="nav__badge nav__link" href="#">
            Luis Manuel G.
          </a>
        </div>
        <div>
          <ul className="nav__list">
            <li className="nav__list_item">
              <a className="nav__link" href="#about">
                Acerca de
              </a>
            </li>
            <li className="nav__list_item">
              <a className="nav__link" href="#projects">
                Proyectos personales
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <style jsx>
        {`
          .nav {
            --background: transparent;

            width: 100%;
            position: fixed;
            padding: 15px;
            display: flex;
            background: var(--background);
            transition: background 500ms ease-in-out;
            justify-content: space-between;
            align-items: center;
            z-index: 1000;
          }

          .nav__scrolled {
            --background: var(--root-background-dark);

            box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
          }

          .nav__badge {
            opacity: 0;
            visibility: hidden;
            transition: opacity 500ms, visibility 500ms ease-in-out;
          }

          .nav__badge_show {
            visibility: visible;
            opacity: 1;
          }

          .nav__list {
            display: flex;
            list-style: none;
          }

          .nav__list_item {
            margin-left: 20px;
          }

          .nav__link {
            position: relative;
            color: var(--root-text-color-dark);
            font-weight: 200;
            font-size: 1.2em;
            padding: 10px;
          }

          .nav__link::after {
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

          .nav__link:hover::after {
            transform: scaleX(1);
            transform-origin: left;
          }
        `}
      </style>
    </header>
  );
};

export default Header;
