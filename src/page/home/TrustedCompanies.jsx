import { companiesLogo } from "../../data/companiesLogo";

const TrustedCompanies = () => {
    const duplicated = [...companiesLogo, ...companiesLogo];
  return (
    <div className="trusted-wrapper">
    <h3 className="trusted-title">
        Con la confianza de marcas líderes, incluyendo —
      </h3>
    <div className="trusted-marquee">
    <div className="trusted-track">
     {duplicated.map((company, index) => (    
      <img 
      key={index}
      className="trusted-logo"
      src={company.logo}
      alt={company.name}
      width={100}
      height={100}
      />  
    ))}

  
    </div>
    </div>
    </div>
  )
}

export default TrustedCompanies
