import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ClientDestinationDetail from './ClientDestinationDetail'
import { getDestinationBySlug, destinations } from '@/data/destinations'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const resolvedParams = await params
    const destination = getDestinationBySlug(resolvedParams.slug)
    
    if (!destination) {
      return {
        title: 'Destination Not Found',
      }
    }

    return {
      title: `${destination.name} | Modern Heritage Egypt`,
      description: destination.label,
    }
  } catch (error) {
    return {
      title: 'Destination Not Found',
    }
  }
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }))
}

export default async function DestinationPage({ params }: Props) {
  try {
    const resolvedParams = await params
    const destination = getDestinationBySlug(resolvedParams.slug)
    
    if (!destination) {
      notFound()
    }

    return <ClientDestinationDetail destination={destination} />
  } catch (error) {
    notFound()
  }
}