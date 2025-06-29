'use client'

import { Navigation } from '@/components/Navigation'
import { StarIcon } from '@heroicons/react/20/solid'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    location: 'Alamo Heights, San Antonio',
    rating: 5,
    date: 'July 2023',
    title: 'Exceptional work on our home renovation',
    content: 'The team at Patchwork did an amazing job with our home renovation project. They were professional, punctual, and the quality of their work exceeded our expectations. The texture matching on our ceiling repair was perfect!',
    projectType: 'Home Renovation',
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    location: 'Stone Oak, San Antonio',
    rating: 5,
    date: 'September 2023',
    title: 'Professional and reliable service',
    content: 'We needed drywall repair after some water damage, and Patchwork came highly recommended. They were quick to respond, provided a fair estimate, and completed the work efficiently. You cannot even tell where the damage was!',
    projectType: 'Water Damage Repair',
  },
  {
    id: 3,
    name: 'David Chen',
    location: 'Downtown San Antonio',
    rating: 5,
    date: 'October 2023',
    title: 'Outstanding commercial renovation',
    content: 'As a business owner, I needed a reliable contractor for our office renovation. Patchwork delivered exceptional results while maintaining a clean workspace and minimizing disruption to our operations.',
    projectType: 'Commercial Renovation',
  },
  {
    id: 4,
    name: 'Emily Martinez',
    location: 'Shavano Park, San Antonio',
    rating: 5,
    date: 'November 2023',
    title: 'Excellent attention to detail',
    content: 'The level of craftsmanship shown by the Patchwork team was impressive. They took great care in protecting our furniture and floors during the project, and the final result was flawless.',
    projectType: 'Interior Remodel',
  },
  {
    id: 5,
    name: 'James Wilson',
    location: 'Terrell Hills, San Antonio',
    rating: 5,
    date: 'December 2023',
    title: 'Great experience from start to finish',
    content: 'From the initial estimate to the final walkthrough, working with Patchwork was a pleasure. Their team was knowledgeable, courteous, and the quality of their work was outstanding.',
    projectType: 'New Construction',
  },
  {
    id: 6,
    name: 'Lisa Thompson',
    location: 'Olmos Park, San Antonio',
    rating: 5,
    date: 'January 2024',
    title: 'Highly recommend for any drywall work',
    content: 'We had multiple holes to patch and texture to match in our older home. Patchwork did an incredible job matching the existing texture and making everything look seamless.',
    projectType: 'Repair Work',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function TestimonialsPage() {
  return (
    <div className="bg-white">
      <Navigation />
      
      <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-display text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Customer Testimonials
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't just take our word for it. Here's what our customers have to say about their experience working with Patchwork.
          </p>
        </div>

        {/* Overall rating summary */}
        <div className="mx-auto mt-16 max-w-2xl bg-gray-50 px-6 py-8 rounded-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">5.0</h2>
                <div className="ml-3 flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className="h-5 w-5 flex-shrink-0 text-yellow-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">Based on {testimonials.length} verified reviews</p>
            </div>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col rounded-2xl bg-gray-50 p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center gap-x-4">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          rating < testimonial.rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <time
                    dateTime={testimonial.date}
                    className="text-sm leading-6 text-gray-600"
                  >
                    {testimonial.date}
                  </time>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                  {testimonial.title}
                </h3>
              </div>
              <div className="mt-4 flex flex-1 flex-col">
                <p className="flex-1 text-base leading-7 text-gray-600">{testimonial.content}</p>
                <div className="mt-6 border-t border-gray-900/5 pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-semibold leading-6 text-gray-900">{testimonial.name}</p>
                      <p className="mt-1 text-xs leading-5 text-gray-500">{testimonial.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm italic text-gray-600">{testimonial.projectType}</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Call to action */}
        <div className="mx-auto mt-16 max-w-2xl text-center sm:mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Ready to start your project?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Join our satisfied customers and experience the Patchwork difference.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/estimate"
              className="rounded-md bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            >
              Get Free Estimate
            </a>
            <a href="tel:210-545-6150" className="text-sm font-semibold leading-6 text-gray-900">
              Call Us <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
} 