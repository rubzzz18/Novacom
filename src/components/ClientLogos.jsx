import { clientLogos } from '../data/clientLogos'

export default function ClientLogos() {
  const allLogos = [...clientLogos, ...clientLogos]

  return (
    <section className="clients-section" aria-label="Nos clients et partenaires">
      <h3>Ils nous font confiance</h3>
      <div className="logos-scroll">
        <div className="logos-track">
          {allLogos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img
                src={logo.src}
                alt={logo.name}
                className="logo-img-carousel"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
