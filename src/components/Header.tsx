import Nav from "./Nav";

export default function Header() {
  return (
    <nav
      className="navbar navbar-b navbar-trans navbar-expand-md fixed-top"
      id="mainNav"
      role="navigation"
      aria-label="Primary"
    >
      <div className="container">
        <a className="navbar-brand js-scroll" href="#home">
          IFrontend
        </a>
        <Nav />
      </div>
    </nav>
  );
}
