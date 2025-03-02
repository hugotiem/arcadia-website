export interface Experience {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
}

export const experiences: Experience[] = [
    {
      id: "01",
      title: "Navigation Journalière",
      description: "Une parenthèse rare s'ouvre à quatre privilégiés. Le temps d'une journée, notre équipage perpétue la grande tradition maritime, entre élégance du service et raffinement des instants.",
      details: "Une parenthèse rare s'ouvre à quatre privilégiés. Le temps d'une journée, notre équipage perpétue la grande tradition maritime, entre élégance du service et raffinement des instants.",
      image: "/RESERVATION/1.jpg"
    },
    {
      id: "02",
      title: "Réceptions Distinguées",
      description: "Dans l'intimité de dix convives, notre navire devient l'écrin de vos célébrations les plus délicates. Un cadre d'exception pour des moments choisis, où discrétion et excellence se marient naturellement.",
      image: "/RESERVATION/2.jpg",
      details: "Dans l'intimité de dix convives, notre navire devient l'écrin de vos célébrations les plus délicates. Un cadre d'exception pour des moments choisis, où discrétion et excellence se marient naturellement."
    },
    {
      id: "03",
      title: "Croisières Hebdomadaires",
      description: "Une semaine d'exception où le temps se suspend entre ciel et mer. Nos escales soigneusement sélectionnées vous font découvrir les plus beaux mouillages de Méditerranée.",
      image: "/RESERVATION/3.jpg",
      details: "Pour quatre hôtes d'exception, nous orchestrons une symphonie maritime où luxe et authenticité composent une partition unique. Sept jours durant lesquels le voilier suspend son vol, entre mouillages confidentiels et navigation d'excellence."
    },
    {
      id: "04",
      title: "Expériences Personnalisées",
      description: "Votre rêve maritime prend vie selon vos désirs. Notre équipage met son expertise à votre service pour créer une expérience unique, à votre image.",
      image: "/RESERVATION/4.jpg",
      details: "Votre rêve maritime prend vie selon vos désirs. Notre équipage met son expertise à votre service pour créer une expérience unique, à votre image."
    }
  ]