import type { Metadata } from 'next'
import ClientInquire from './ClientInquire'

export const metadata: Metadata = {
  title: 'Inquire Now | Modern Heritage Egypt',
  description: 'Begin your personal odyssey with Modern Heritage. Craft bespoke expeditions through Egypt tailored to your exact desires.',
}

export default function InquirePage() {
  return <ClientInquire />
}