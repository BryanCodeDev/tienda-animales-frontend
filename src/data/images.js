const IMAGES = {
  placeholder: {
    logo: '/logo.svg',
    hero: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww',
    dog: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww',
    cat: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww',
  },

  hero: {
    dogAndCat: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww',
    premiumFood: 'https://images.unsplash.com/photo-1764249453891-84799ed79e9e?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  petSelector: {
    dog: 'https://images.unsplash.com/photo-1632236568025-1256513514b7?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    cat: 'https://images.unsplash.com/photo-1726534659704-152c341d63b5?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  products: {
    dogFood1: 'https://images.unsplash.com/photo-1676193866128-03a926df76ef?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dogFood2: 'https://images.unsplash.com/photo-1746483966755-273b467b24fa?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dogFood3: 'https://images.unsplash.com/photo-1745252798506-29500efc5b39?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dogFood4: 'https://images.unsplash.com/photo-1747577672187-d99b416cba22?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dogFood5: 'https://images.unsplash.com/photo-1747577672081-991640ad50ce?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    catFood1: 'https://images.unsplash.com/photo-1767023028317-bbafd3157967?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    catFood2: 'https://images.unsplash.com/photo-1683871287549-852bcc3878b2?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    catFood3: 'https://images.unsplash.com/photo-1616591938272-7d2b499a695b?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    catFood4: 'https://images.unsplash.com/photo-1604444506921-bdd3442e66c2?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    dogFood6: 'https://images.unsplash.com/photo-1611542805774-bce925416cba22?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  categories: {
    dryFood: 'https://images.unsplash.com/photo-1764249453891-84799ed79e9e?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    wetFood: 'https://images.unsplash.com/photo-1676193866128-03a926df76ef?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    natural: 'https://images.unsplash.com/photo-1683871287549-852bcc3878b2?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    snacks: 'https://images.unsplash.com/photo-1747577672081-991640ad50ce?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    puppy: 'https://images.unsplash.com/photo-1746483966755-273b467b24fa?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    adult: 'https://images.unsplash.com/photo-1632236568025-1256513514b7?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    senior: 'https://images.unsplash.com/photo-1747577672187-d99b416cba22?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    special: 'https://images.unsplash.com/photo-1726534659704-152c341d63b5?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  nutrition: {
    puppy: 'https://images.unsplash.com/photo-1746483966755-273b467b24fa?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    adult: 'https://images.unsplash.com/photo-1632236568025-1256513514b7?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    senior: 'https://images.unsplash.com/photo-1747577672187-d99b416cba22?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    smallBreed: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    largeBreed: 'https://images.unsplash.com/photo-1599194921977-f89d8bd0eefb?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    sterilized: 'https://images.unsplash.com/photo-1616591938272-7d2b499a695b?fm=jpg&q=60&w=800&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  testimonials: {
    pet1: 'https://images.unsplash.com/photo-1632236568025-1256513514b7?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pet2: 'https://images.unsplash.com/photo-1726534659704-152c341d63b5?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pet3: 'https://images.unsplash.com/photo-1683871287549-852bcc3878b2?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pet4: 'https://images.unsplash.com/photo-1746483966755-273b467b24fa?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    pet5: 'https://images.unsplash.com/photo-1616591938272-7d2b499a695b?fm=jpg&q=60&w=200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  experience: {
    familyDog: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww',
    familyCat: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww',
    cta: 'https://images.unsplash.com/photo-1623387641168-d9803ddd3f35?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0JTIwYW5kJTIwZG9nfGVufDB8fDB8fHww',
    aboutTeam: 'https://images.unsplash.com/photo-1632498301446-5f78baad40d0?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    aboutMission: 'https://images.unsplash.com/photo-1632236568025-1256513514b7?fm=jpg&q=60&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  instagram: {
    1: 'https://images.unsplash.com/photo-1632236568025-1256513514b7?fm=jpg&q=60&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    2: 'https://images.unsplash.com/photo-1726534659704-152c341d63b5?fm=jpg&q=60&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    3: 'https://images.unsplash.com/photo-1683871287549-852bcc3878b2?fm=jpg&q=60&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    4: 'https://images.unsplash.com/photo-1746483966755-273b467b24fa?fm=jpg&q=60&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    5: 'https://images.unsplash.com/photo-1745252798506-29500efc5b39?fm=jpg&q=60&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    6: 'https://images.unsplash.com/photo-1747577672081-991640ad50ce?fm=jpg&q=60&w=400&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },

  brands: {
    logo1: '/logo.svg',
    logo2: '/logo.svg',
    logo3: '/logo.svg',
    logo4: '/logo.svg',
    logo5: '/logo.svg',
    logo6: '/logo.svg',
    logo7: '/logo.svg',
    logo8: '/logo.svg',
  },
}

export default IMAGES