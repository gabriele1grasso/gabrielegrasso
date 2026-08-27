import { faqs, testimonials } from '@/data/content'

function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function fetchTestimonials() {
  await wait(500)
  return testimonials
}

export async function fetchFaqs() {
  await wait(350)
  return faqs
}
