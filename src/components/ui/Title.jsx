import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Title = ({title, description, visibleButton = true, href = "/" }) => {
  return (
    <div className="title-container" >
    <h2 className="title-heading">{title}</h2>
       <Link to={href} className="title-link">
        <p className="title-description">{description}</p>
        {visibleButton && (
          <button className="title-button">
            Ver más <ArrowRight size={14} />
          </button>
        )}
       </Link>
      
    </div>
  )
}

export default Title
