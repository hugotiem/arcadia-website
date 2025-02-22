
 export interface Experience {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const experiences: Experience[] = [
    {
      id: "01",
      title: "Navigation Journalière",
      description: "Une parenthèse rare s'ouvre à quatre privilégiés. Le temps d'une journée, notre équipage perpétue la grande tradition maritime, entre élégance du service et raffinement des instants.",
      image: "/01.jpg"
    },
    {
      id: "02",
      title: "Réceptions Distinguées",
      description: "Dans l'intimité de dix convives, notre navire devient l'écrin de vos célébrations les plus délicates. Un cadre d'exception pour des moments choisis, où discrétion et excellence se marient naturellement.",
      image: "/02.jpg"
    },
    {
      id: "03",
      title: "Croisières Hebdomadaires",
      description: "Une semaine d'exception où le temps se suspend entre ciel et mer. Nos escales soigneusement sélectionnées vous font découvrir les plus beaux mouillages de Méditerranée.",
      image: "/03.jpg"
    },
    {
      id: "04",
      title: "Expériences Personnalisées",
      description: "Votre rêve maritime prend vie selon vos désirs. Notre équipage met son expertise à votre service pour créer une expérience unique, à votre image.",
      image: "/04.jpg"
    }
  ]