import { Metadata } from 'next';
import { experiences } from '@/app/gallery-data';
import DetailView from './DetailView';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string } >
}): Promise<Metadata> {
  const id = (await params).id;
  const item = experiences.find(item => item.id === id);
  
  return {
    title: item ? `${item.title} | Detail` : 'Item Details',
  };
}

export async function generateStaticParams() {
  return experiences.map((item) => ({
    id: item.id.toString(),
  }));
}

export default async function DetailPage({ params }: { params: Promise<{ id: string } > }) {
  const itemId = (await params).id;
  return <DetailView itemId={itemId} />;
}