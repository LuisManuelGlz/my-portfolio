import Container from './container';

const Header = () => {
  return (
    <nav className="fixed z-50 w-full bg-dark">
      <Container>
        {/* <button id="hamburger">
          <span className="text-light text-4xl">&times;</span>
          <>
          <div className="w-8 h-0.5 bg-light m-2 rounded" />
          <div className="w-8 h-0.5 bg-light m-2 rounded" />
          <div className="w-8 h-0.5 bg-light m-2 rounded" />
          </>
        </button> */}
        <ul className="flex items-center font-medium w-full h-16">
          <li>
            <a id="badge" href="#" className="text-light">
              Luis Manuel
            </a>
          </li>
          <div className="flex-grow hidden sm:block" />
          <li className="mr-0 sm:mr-5">
            <a href="#projects" className="text-gray">
              Mis proyectos
            </a>
          </li>
          <li>
            <a href="#about" className="text-gray">
              Acerca de
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default Header;
