import { useEffect } from 'react'

export default function Modal({ modalName: id, onClose }) {
  useEffect(() => {
    const handleEscape = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div className="modal-overlay" onClick={handleOverlayClick} role="dialog" aria-modal="true" aria-labelledby={`${id}-title`}>
      <div className="modal">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">&times;</button>
        {id === 'mentionsLegales' && <MentionsLegales />}
        {id === 'confidentialite' && <Confidentialite />}
      </div>
    </div>
  )
}

function MentionsLegales() {
  return (
    <>
      <h2 id="mentionsLegales-title">Mentions Légales</h2>
      <h3>Éditeur du site</h3>
      <p>Novacom Business<br/>26 Rue des Sablons, 95360 Montmagny, France<br/>Téléphone : 01 75 43 04 63<br/>Email : novacombusiness@gmail.com</p>
      <h3>Directeur de la publication</h3>
      <p>Le représentant légal de Novacom Business.</p>
      <h3>Hébergement</h3>
      <p>Les informations concernant l'hébergeur du site seront communiquées sur demande.</p>
      <h3>Propriété intellectuelle</h3>
      <p>L'ensemble du contenu de ce site (textes, images, logos, éléments graphiques) est la propriété exclusive de Novacom Business, sauf mention contraire. Toute reproduction, même partielle, est interdite sans autorisation préalable.</p>
      <h3>Limitation de responsabilité</h3>
      <p>Novacom Business s'efforce d'assurer l'exactitude des informations diffusées sur ce site. Toutefois, la responsabilité de Novacom Business ne saurait être engagée en cas d'erreurs, d'omissions ou de résultats obtenus suite à l'utilisation de ces informations.</p>
    </>
  )
}

function Confidentialite() {
  return (
    <>
      <h2 id="confidentialite-title">Politique de Confidentialité</h2>
      <h3>Collecte des données</h3>
      <p>Novacom Business peut être amené à collecter des données personnelles lors de vos interactions avec notre site (formulaires de contact, prise de rendez-vous).</p>
      <h3>Utilisation des données</h3>
      <p>Les données collectées sont utilisées exclusivement pour :</p>
      <ul>
        <li>Répondre à vos demandes de contact</li>
        <li>Planifier des rendez-vous</li>
        <li>Améliorer nos services</li>
      </ul>
      <h3>Protection des données</h3>
      <p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles. Pour exercer ces droits, contactez-nous à novacombusiness@gmail.com.</p>
      <h3>Cookies</h3>
      <p>Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de suivi n'est utilisé.</p>
      <h3>Conservation des données</h3>
      <p>Vos données personnelles sont conservées pour une durée maximale de 3 ans à compter de votre dernier contact avec Novacom Business.</p>
    </>
  )
}
