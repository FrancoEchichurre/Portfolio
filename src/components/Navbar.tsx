export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__logo">
                FRANCO<span>.DEV</span>
            </div>
            {/* Mobile Menu Icon Placeholder */}
            <div className="navbar__menu-icon">
                =
            </div>
            {/* Desktop Links */}
            <ul className="navbar__links">
                <li className="navbar__item">SOBRE MÍ</li>
                <li className="navbar__item">PROYECTOS</li>
                <li className="navbar__item">SKILLS</li>
                <li className="navbar__item">CONTACTO</li>
            </ul>
        </nav>
    );
};
