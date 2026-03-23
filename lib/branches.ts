export interface Branch {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  googleMapsUrl: string;
}

export const BRANCHES: Branch[] = [
  {
    id: 'qc-trinoma',
    name: 'Momoyo Trinoma',
    address: 'Level 3, Trinoma Mall, Quezon City',
    city: 'Metro Manila',
    phone: '+63 917 100 1001',
    hours: '10:00 AM - 10:00 PM',
    coordinates: { lat: 14.6538, lng: 121.0339 },
    googleMapsUrl: 'https://maps.google.com/?q=Trinoma+Mall+Quezon+City',
  },
  {
    id: 'bgc-high-street',
    name: 'Momoyo High Street',
    address: 'Bonifacio High Street, Taguig',
    city: 'Metro Manila',
    phone: '+63 917 100 1002',
    hours: '10:00 AM - 11:00 PM',
    coordinates: { lat: 14.5508, lng: 121.0509 },
    googleMapsUrl: 'https://maps.google.com/?q=Bonifacio+High+Street+Taguig',
  },
  {
    id: 'cebu-it-park',
    name: 'Momoyo IT Park',
    address: 'Garden Bloc, IT Park, Cebu City',
    city: 'Cebu',
    phone: '+63 917 100 1003',
    hours: '9:00 AM - 11:00 PM',
    coordinates: { lat: 10.3293, lng: 123.9066 },
    googleMapsUrl: 'https://maps.google.com/?q=IT+Park+Cebu+City',
  },
  {
    id: 'davao-abreeza',
    name: 'Momoyo Abreeza',
    address: 'Abreeza Mall, J.P. Laurel Ave, Davao City',
    city: 'Davao',
    phone: '+63 917 100 1004',
    hours: '10:00 AM - 10:00 PM',
    coordinates: { lat: 7.0924, lng: 125.6116 },
    googleMapsUrl: 'https://maps.google.com/?q=Abreeza+Mall+Davao+City',
  },
  {
    id: 'iloilo-esplanade',
    name: 'Momoyo Esplanade',
    address: 'Iloilo Esplanade Complex, Iloilo City',
    city: 'Iloilo',
    phone: '+63 917 100 1005',
    hours: '10:00 AM - 9:30 PM',
    coordinates: { lat: 10.7057, lng: 122.5457 },
    googleMapsUrl: 'https://maps.google.com/?q=Iloilo+Esplanade+Complex',
  },
  {
    id: 'bacolod-lacson',
    name: 'Momoyo Lacson',
    address: 'Lacson Street, Bacolod City',
    city: 'Bacolod',
    phone: '+63 917 100 1006',
    hours: '10:00 AM - 10:00 PM',
    coordinates: { lat: 10.6765, lng: 122.9511 },
    googleMapsUrl: 'https://maps.google.com/?q=Lacson+Street+Bacolod+City',
  },
  {
    id: 'angeles-clark',
    name: 'Momoyo Clark',
    address: 'Clark Cityfront Mall, Angeles, Pampanga',
    city: 'Pampanga',
    phone: '+63 917 100 1007',
    hours: '10:00 AM - 10:00 PM',
    coordinates: { lat: 15.1809, lng: 120.5292 },
    googleMapsUrl: 'https://maps.google.com/?q=Clark+Cityfront+Mall+Angeles+Pampanga',
  },
  {
    id: 'makati-greenbelt',
    name: 'Momoyo Greenbelt',
    address: 'Greenbelt 3, Ayala Center, Makati',
    city: 'Metro Manila',
    phone: '+63 917 100 1008',
    hours: '10:00 AM - 11:00 PM',
    coordinates: { lat: 14.5515, lng: 121.0237 },
    googleMapsUrl: 'https://maps.google.com/?q=Greenbelt+3+Makati',
  },
];

