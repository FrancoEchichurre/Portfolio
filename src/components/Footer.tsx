export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__bg"></div>
            <div className="section__container footer__content">
                <div className="footer__info">
                    <h3 className="font-display">FRANCO ECHICHURRE</h3>
                    <p className="font-body">Desarrollador Full Stack</p>
                </div>

                <div className="footer__center">
                    <div className="footer__love">
                        CODED WITH ❤️ & ☕
                    </div>
                    <div className="footer__tech">
                        BUILT WITH REACT ⚛️ | STYLED WITH ATTITUDE 🎨
                    </div>
                </div>

                <div className="footer__social">
                    {/* Social Icons Placeholders */}
                    <div className="btn-icon bg-brick text-white hover:text-black hover:bg-neon-cyan">
                        GH
                    </div>
                    <div className="btn-icon bg-brick text-white hover:text-black hover:bg-neon-magenta">
                        LI
                    </div>
                </div>
            </div>
        </footer>
    );
};
