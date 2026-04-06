export const MOCK_BLOGS = [
  {
    _id: "post_001",
    title: "Veterinary Consultation: When Does Your Pet Need One?",
    excerpt: "It’s 10:30 PM and your pet is acting strange. Are you being anxious or is it an emergency? The difference between acting early and waiting can mean a ₹500 fix versus a ₹20,000 crisis.",
    category: "Preventative Care",
    image: "/dog.png", // Replace with your real image path later
    author: { name: "Anand Sen" },
    readTime: "7 min read",
    featured: true 
  },
  {
    _id: "post_002",
    title: "Dog Food Allergies: 8 Signs & Vet Solutions India",
    excerpt: "From fancy kibble to maa ke haath ka chicken-roti, pinning down a food allergy in Indian households is chaotic. Stop the guessing game and learn what actually works.",
    category: "Nutrition",
    image: "/dog.png",
    author: { name: "Anand Sen" },
    readTime: "6 min read",
    featured: false
  },
  {
    _id: "post_003",
    title: "Why Does My Cat Bite & Hiss? Online Consultation Guide",
    excerpt: "When your cat bites mid-petting or hisses, they aren't being mean—they are giving a frantic SOS signal. Learn the most common aggression triggers for urban cats in India.",
    category: "Behavior",
    image: "/dog.png",
    author: { name: "Anand Sen" },
    readTime: "5 min read",
    featured: false
  },
  // Kept a few placeholders below so your Care Essentials section has content!
  {
    _id: "post_004",
    title: "The Ultimate Pet First-Aid Kit: What's Missing?",
    excerpt: "From charcoal powder to digital thermometers, the professional-grade items you actually need for at-home emergencies.",
    category: "Preventative Care",
    image: "/dog.png",
    author: { name: "Editorial Team" },
    readTime: "4 min read",
    featured: false
  },
  {
    _id: "post_005",
    title: "Golden Years: Tailoring Care for the Aging Companion",
    excerpt: "Managing mobility, cognitive changes, and metabolic health in your senior dog or cat to ensure their twilight years are comfortable.",
    category: "Senior Pets",
    image: "/dog.png",
    author: { name: "Dr. Souvik Sadhukhan" },
    readTime: "8 min read",
    featured: false
  }
];

export const BLOG_CATEGORIES = [
  "All",
  "Preventative Care",
  "Nutrition",
  "Behavior",
  "Senior Pets",
  "Puppies & Kittens"
];