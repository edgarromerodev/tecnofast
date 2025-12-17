import Title from "../../components/ui/Title";
import { ourSpecsData } from "../../data/ourSpecsData";


const OurSpecs = () => {
  return (
    <div  className="ourSpecs">
          <Title
        visibleButton={false}
        title="¿Por qué elegirnos?"
        description="En TecnoFast GT te ofrecemos productos originales, envíos rápidos y un soporte confiable para garantizarte una experiencia de compra segura y moderna."
      />
    
    <div className="ourSpecs__grid">
               {ourSpecsData.map((item, index) => (
          <article
            key={index}
            className="ourSpecs__card"
            style={{
              backgroundColor: item.accent + "10",
              borderColor: item.accent + "30",
            }}
          >
            <span
              className="ourSpecs__icon"
              style={{ backgroundColor: item.accent }}
            >
              <item.icon size={20} />
            </span>
            <h3 className="ourSpecs__title">{item.title}</h3>
            <p className="ourSpecs__description">{item.description}</p>
          </article>
        ))}
 
    </div>
      
    </div>
  )
}

export default OurSpecs
