import localFont from 'next/font/local'

export const mainsonNeueExtended = localFont({
  src: [
    {
      path: '../../public/fonts/MaisonNeueExtended-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MaisonNeueExtended-Book.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MaisonNeueExtended-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MaisonNeueExtended-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MaisonNeueExtended-Black.otf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-mainson-neue-extended'
}) 

export const minionPro = localFont({
  src: [
    {
      path: '../../public/fonts/MinionPro-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MinionPro-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MinionPro-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/MinionPro-SemiBold.otf',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-minion-pro'
})