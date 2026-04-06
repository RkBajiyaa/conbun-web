// lib/mockVets.js

export const MOCK_VETS = [
  {
    _id: "vet_001",
    name: "Dr. S. Ramesh",
    title: "Veterinary Dermatologist & Clinical Medicine",
    experience: "10+",
    rating: 4.7,
    reviewCount: 22,
    appointments: 171,
    price: 299,
    available: true,
    featured: false,
    image: "/dog.png", // Replace with actual doctor photo paths later
    petTypes: ["All Pets", "Dogs", "Cats", "Exotic"],
    specialties: ["Dermatology", "Clinical Medicine"],
    about: "I specialize in the care and treatment of both exotic and domestic animals, with extensive expertise in veterinary dermatology and advanced clinical medicine. I am committed to providing compassionate, effective, and personalized treatment."
  },
  {
    _id: "vet_002",
    name: "Dr. Devyani Mate",
    title: "Veterinary Microbiologist",
    experience: "3",
    rating: 4.9,
    reviewCount: 52,
    appointments: 205,
    price: 199,
    available: true,
    featured: true,
    image: "/dog.png",
    petTypes: ["All Pets", "Dogs", "Cats"],
    specialties: ["Microbiology", "Nutrition"],
    about: "I am Dr. Devyani Mate, a veterinary professional with an undergraduate degree from Mumbai Veterinary College and a specialization in Veterinary Microbiology from Madras Veterinary College, Chennai. I am currently pursuing my Ph.D."
  },
  {
    _id: "vet_003",
    name: "Dr. P N S S Praneeth",
    title: "Veterinary Clinical Surgeon",
    experience: "2",
    rating: 5.0,
    reviewCount: 18,
    appointments: 83,
    price: 149,
    available: true,
    featured: false,
    image: "/dog.png",
    petTypes: ["All Pets", "Dogs", "Cats"],
    specialties: ["Surgeon", "Clinical Medicine"],
    about: "I am a skilled veterinarian with expertise in Veterinary Clinical Medicine and Clinical Surgery. With strong clinical acumen and surgical proficiency, I am dedicated to delivering accurate diagnosis, effective treatment, and compassionate patient care."
  },
  {
    _id: "vet_004",
    name: "Dr. Saroja Patil",
    title: "Senior Veterinary Specialist",
    experience: "10+",
    rating: 4.8,
    reviewCount: 71,
    appointments: 346,
    price: 249,
    available: false,
    featured: true,
    image: "/dog.png",
    petTypes: ["All Pets", "Dogs", "Cats", "Birds"],
    specialties: ["General Practice", "Behaviorist"],
    about: "As a dedicated veterinarian with over 10 years of experience, I provide comprehensive care to pets of all ages and breeds. My services include routine checkups, vaccinations, and behavioral consultations."
  },
  {
    _id: "vet_005",
    name: "Dr. Manisha",
    title: "Veterinary Gynaecologist",
    experience: "6",
    rating: 4.6,
    reviewCount: 87,
    appointments: 405,
    price: 299,
    available: true,
    featured: true,
    image: "/dog.png",
    petTypes: ["All Pets", "Dogs", "Cats"],
    specialties: ["Gynaecology", "Diagnostics"],
    about: "I hold a Ph.D. in Veterinary Gynaecology and have over five years of hands-on experience in small animal practice. My expertise encompasses reproductive health, diagnostics, and clinical care for pets."
  },
  {
    _id: "vet_006",
    name: "Dr. Vinod Kumar Jain",
    title: "Ex-Govt Veterinary Surgeon",
    experience: "34",
    rating: 4.8,
    reviewCount: 39,
    appointments: 191,
    price: 349,
    available: true,
    featured: true,
    image: "/dog.png",
    petTypes: ["All Pets", "Dogs", "Cats", "Exotic", "Birds", "Aquatic"],
    specialties: ["Surgeon", "Preventive Care"],
    about: "I am a retired Government Veterinary Surgeon with over 34 years of extensive experience in animal disease diagnosis, treatment, and preventive healthcare. Throughout my career, I have been dedicated to safeguarding animal health."
  }
];

export const VET_SPECIALTIES = [
  "Dermatology", "Clinical Medicine", "Microbiology", "Nutrition", 
  "Surgeon", "General Practice", "Behaviorist", "Gynaecology", 
  "Diagnostics", "Preventive Care"
];

export const PET_CATEGORIES = [
  { name: "All Pets", icon: "pets" },
  { name: "Dogs", icon: "pets" },
  { name: "Cats", icon: "pets" },
  { name: "Exotic", icon: "sound_detection_dog_barking" },
  { name: "Birds", icon: "potted_plant" },
  { name: "Aquatic", icon: "water_drop" },
];