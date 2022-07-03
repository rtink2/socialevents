export const sampleData = [
  {
    id: '1',
    title: 'Wedding - Adele & Raven',
    date: new Date('2021-10-11'),
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: {
      address: 'Los Angeles, USA',
      latLng: {
        lat: 34.073620,
        lng: -118.400352,
      },
    },
    venue: {
      address: 'North Beverly Park, Los Angeles, CA USA',
      latLng: {
        lat: 34.073620,
        lng: -118.400352,
      },
    },
    hostedBy: 'Lady Gaga & Loren Cohen',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/57.jpg',
    attendees: [
      {
        id: 'a',
        displayName: 'Jane',
        photoURL: 'https://randomuser.me/api/portraits/women/40.jpg',
      },
      {
        id: 'b',
        displayName: 'Lilly',
        photoURL: 'https://randomuser.me/api/portraits/women/50.jpg',
      },
    ],
  },
  {
    id: '2',
    title: 'Audience With Adele',
    date: new Date('2021-12-03'),
    category: 'music',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: {
      address: 'London, UK',
      latLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544,
      },
    },
    venue: {
      address: 'London Palladium, London, UK',
      latLng: {
        lat: 51.5118074,
        lng: -0.12300089999996544,
      },
    },
    hostedBy: 'Adele',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/40.jpg',
    attendees: [
      {
        id: 'a',
        displayName: 'Freya',
        photoURL: 'https://randomuser.me/api/portraits/women/5.jpg',
      },
      {
        id: 'b',
        displayName: 'Hope',
        photoURL: 'https://randomuser.me/api/portraits/women/50.jpg',
      },
    ],
  },
]
