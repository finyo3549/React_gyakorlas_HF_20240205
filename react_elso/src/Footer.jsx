import PropTypes from "prop-types";
import "./Footer.css";
export function Footer(props) {
    const { name, link } = props;
    Footer.propTypes = {
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    };
    return (
        <footer className="first-footer">
            <div>
            <p>Készítette: {name} - elérhető <a href={link}>itt </a></p>          
            </div>
        </footer>
    )
}