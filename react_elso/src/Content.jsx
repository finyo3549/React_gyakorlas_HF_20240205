import PropTypes from "prop-types";
import "./Content.css";
export function Content(props) {
    const { darabszam } = props;
    
    Content.propTypes = {
        darabszam: PropTypes.number
    }
    const bekezdesek = () => {
        const p = [];
        
        for (let i = 0; i < (darabszam || 5); i++) {
            p.push(
                <p key={i}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit ullam corporis veniam vitae in illum, esse quo consequuntur labore, quasi quos eligendi harum! Unde rem molestiae, nihil consequatur quia nemo? {i + 1}</p>
            );
        }
        return p;
    };
    return (
        <div id="content" className="first-content">
            {bekezdesek()}
            <hr />
        </div>
    )
}