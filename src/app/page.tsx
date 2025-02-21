
import { Metadata } from 'next';
import { galleryItems } from './gallery-data';
import Gallery from '@/components/Gallery';

export const metadata: Metadata = {
  title: 'Gallery | Home',
};

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-8">Photo Gallery</h1>
      <Gallery />
    </>
  );
}