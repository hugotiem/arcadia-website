import { Metadata } from 'next';
import { galleryItems } from '@/app/gallery-data';
import DetailView from './DetailView';

export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  const id = parseInt(params.id);
  const item = galleryItems.find(item => item.id === id);
  
  return {
    title: item ? `${item.title} | Detail` : 'Item Details',
  };
}

export async function generateStaticParams() {
  return galleryItems.map((item) => ({
    id: item.id.toString(),
  }));
}

export default function DetailPage({ params }: { params: { id: string } }) {
  const itemId = parseInt(params.id);
  return <DetailView itemId={itemId} />;
}