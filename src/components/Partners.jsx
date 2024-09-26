import "./CSS/Partners.css";
import PropTypes from "prop-types";

const PartnerSect = ({info, title}) =>{
    return <>
        <div className="partners">
            <div className="partner-title">
                <h2>{title}</h2>
            </div>
            <div className="partner-imgs">   
                {
                    info.map((imgInfo, index) =>{
                        return(
                                <div className="partner-img" key={index}>
                                    <img src={imgInfo.imgUrl} alt="Partner Image" />
                                </div>
                        )
                    })
                    
                }

            </div>
        </div>
    </>
}

PartnerSect.propTypes = {
    info: PropTypes.arrayOf(
      PropTypes.shape({
        partUrl: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired,
      })
    ).isRequired,
    title: PropTypes.string.isRequired
};

export default PartnerSect;