import "./hamburgerMenu.css";
export const HamburgerMenu: React.FC = () => {
    return (
        <div className="hamburger-container flex items-center h-full">
            <input type="checkbox" id="menu-toggle" className="menu-toggle" />
            <label htmlFor="menu-toggle" className="menu-icon">
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </label>
            <nav className="menu">
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Acerca de</a></li>
                </ul>
            </nav>
        </div>
    );
};
