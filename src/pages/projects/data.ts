import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: 'Personal projects',
    projects: [{
      text: 'Family History',
      description: 'Publishing my family history research and telling some stories.',
      image: '/ows.png',
      href: '/family-history',
    }, {
      text: 'Forebears',
      description: 'A Blazor web application to privately share your family tree.',
      image: '/forebears.jpg',
      href: '/forebears',
    }, {
      text: 'Instant Flyers',
      description: 'Create ready-made flyers for your business using your Etsy profile.',
      image: '/instantflyers.jpg',
      href: '/instant-flyers',
    }, {
      text: 'Blog (Mk I)',
      description: 'My first foray into JAMstack sites using Hugo.',
      image: '/blog1.png',
      href: '/blog1',
    }, {
      text: 'Blog (Mk II)',
      description: 'AstroJS: the next new shiny thing 😅',
      image: '/blog2.jpg',
      href: '/blog2',
    }],
  },
  {
    title: 'Volunteering',
    projects: [{
      text: 'Seaford Wetlands Community Garden',
      description: 'Online presence for the Seaford Community Garden & Urban Biodiversity Project.',
      image: 'https://www.owen.nz/scglogo.png',
      href: '/swcg',
    }, {
      text: 'Carnelian Craft',
      description: 'Online presence for the Carnelian Craft business.',
      image: 'https://www.owen.nz/cclogo.png',
      href: '/carnelian-craft',
    }],
  },
]
