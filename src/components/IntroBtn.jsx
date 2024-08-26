import PropTypes from "prop-types";

function NavBtn(props){
    return <>
        <div className="btn">
            <img src={props.url} alt={props.alt} /><span>{props.text}</span>
        </div>
    </>
}

NavBtn.propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};
export default NavBtn;