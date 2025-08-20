import { Oil } from '../App';

// Comprehensive essential oils database
export const oilsDatabase: Oil[] = [
  {
    id: '1',
    name: 'Lavender',
    scientificName: 'Lavandula angustifolia',
    description: 'Known for its calming and relaxing properties, lavender is one of the most versatile and popular essential oils.',
    benefits: ['Promotes relaxation', 'Improves sleep quality', 'Reduces anxiety', 'Soothes skin irritation', 'Reduces stress', 'Calms nervous system'],
    uses: ['Aromatherapy', 'Topical application', 'Bath additive', 'Pillow spray', 'Massage oil', 'Diffusion'],
    precautions: ['May cause drowsiness', 'Dilute before topical use', 'Patch test recommended'],
    imageUrl: 'https://images.unsplash.com/photo-1625189134278-05b61466b77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMGVzc2VudGlhbCUyMG9pbCUyMGJvdHRsZXxlbnwxfHx8fDE3NTU1OTM3NDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1657922644607-d9df8246e3bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXZlbmRlciUyMHBsYW50JTIwZmllbGR8ZW58MXx8fHwxNzU1NTkzNzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'Mediterranean',
    extractionMethod: 'Steam distillation',
    aromaNotes: ['Floral', 'Sweet', 'Herbaceous'],
    blendsWith: ['Bergamot', 'Chamomile', 'Geranium', 'Frankincense', 'Rose']
  },
  {
    id: '2',
    name: 'Eucalyptus',
    scientificName: 'Eucalyptus globulus',
    description: 'A powerful oil known for its refreshing and invigorating properties, excellent for respiratory support.',
    benefits: ['Clears respiratory pathways', 'Energizing', 'Mental clarity', 'Natural decongestant', 'Antimicrobial', 'Cooling sensation'],
    uses: ['Inhalation', 'Chest rub', 'Diffusion', 'Steam therapy', 'Room spray', 'Shower steam'],
    precautions: ['Not for children under 2', 'Avoid during pregnancy', 'May cause skin irritation if undiluted'],
    imageUrl: 'https://images.unsplash.com/photo-1697399511512-17d3adfab058?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldWNhbHlwdHVzJTIwZXNzZW50aWFsJTIwb2lsfGVufDF8fHx8MTc1NTU5Mzc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1726310276073-70d7894e6a49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldWNhbHlwdHVzJTIwdHJlZSUyMGxlYXZlc3xlbnwxfHx8fDE3NTU1OTM3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'Australia',
    extractionMethod: 'Steam distillation',
    aromaNotes: ['Fresh', 'Camphoraceous', 'Minty'],
    blendsWith: ['Peppermint', 'Tea Tree', 'Lemon', 'Rosemary', 'Pine']
  },
  {
    id: '3',
    name: 'Peppermint',
    scientificName: 'Mentha piperita',
    description: 'An energizing oil with cooling properties, perfect for mental alertness and digestive support.',
    benefits: ['Boosts energy', 'Improves focus', 'Digestive aid', 'Cooling sensation', 'Headache relief', 'Mental clarity'],
    uses: ['Aromatherapy', 'Topical application', 'Inhalation', 'Massage', 'Digestive blend', 'Room freshener'],
    precautions: ['May be too stimulating at night', 'Use sparingly', 'Avoid near eyes', 'May cause skin sensitivity'],
    imageUrl: 'https://images.unsplash.com/photo-1555729257-a52f777ffab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJtaW50JTIwZXNzZW50aWFsJTIwb2lsfGVufDF8fHx8MTc1NTU5Mzc1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1676410408633-79228457cec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXBwZXJtaW50JTIwcGxhbnQlMjBncm93aW5nfGVufDF8fHx8MTc1NTU5Mzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'Europe',
    extractionMethod: 'Steam distillation',
    aromaNotes: ['Minty', 'Fresh', 'Cooling'],
    blendsWith: ['Eucalyptus', 'Rosemary', 'Lemon', 'Orange', 'Spearmint']
  },
  {
    id: '4',
    name: 'Tea Tree',
    scientificName: 'Melaleuca alternifolia',
    description: 'A powerful antimicrobial oil renowned for its purifying and healing properties, especially for skin care.',
    benefits: ['Antimicrobial', 'Antifungal', 'Skin healing', 'Acne treatment', 'Immune support', 'Purifying'],
    uses: ['Topical application', 'Skin care', 'Household cleaner', 'First aid', 'Diffusion', 'Spot treatment'],
    precautions: ['Never ingest', 'Always dilute for topical use', 'Patch test required', 'May cause skin irritation'],
    imageUrl: 'https://images.unsplash.com/photo-1620843002805-05a08cb72f57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjB0cmVlJTIwZXNzZW50aWFsJTIwb2lsfGVufDF8fHx8fDE3NTU1OTM3NzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1582721478779-0ae163c05a60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWElMjB0cmVlJTIwcGxhbnR8ZW58MXx8fHwxNzU1NTkzNzc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'Australia',
    extractionMethod: 'Steam distillation',
    aromaNotes: ['Fresh', 'Medicinal', 'Camphoraceous'],
    blendsWith: ['Lavender', 'Eucalyptus', 'Lemon', 'Rosemary', 'Geranium']
  },
  {
    id: '5',
    name: 'Lemon',
    scientificName: 'Citrus limon',
    description: 'An uplifting citrus oil that energizes the mind, cleanses the air, and promotes mental clarity and focus.',
    benefits: ['Mood uplift', 'Mental clarity', 'Air purification', 'Energizing', 'Antimicrobial', 'Stress relief'],
    uses: ['Diffusion', 'Cleaning blends', 'Aromatherapy', 'Room spray', 'Topical dilution', 'Bath additive'],
    precautions: ['Photosensitive - avoid sun after topical use', 'May cause skin sensitivity', 'Always dilute'],
    imageUrl: 'https://images.unsplash.com/photo-1590736969955-71cc94901144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMGVzc2VudGlhbCUyMG9pbHxlbnwxfHx8fDE3NTU1OTM3Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMHRyZWUlMjBmcnVpdCUyMGdyb3dpbmd8ZW58MXx8fHwxNzU1NTkzNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'Mediterranean',
    extractionMethod: 'Cold pressing',
    aromaNotes: ['Citrus', 'Fresh', 'Clean'],
    blendsWith: ['Peppermint', 'Eucalyptus', 'Lavender', 'Rosemary', 'Orange']
  },
  {
    id: '6',
    name: 'Frankincense',
    scientificName: 'Boswellia carterii',
    description: 'A sacred oil known for promoting deep relaxation, spiritual connection, and skin rejuvenation.',
    benefits: ['Deep relaxation', 'Spiritual grounding', 'Skin rejuvenation', 'Emotional balance', 'Meditation support', 'Anti-aging'],
    uses: ['Meditation', 'Skincare', 'Aromatherapy', 'Topical application', 'Spiritual practices', 'Diffusion'],
    precautions: ['Generally safe', 'Patch test for sensitive skin', 'Consult during pregnancy'],
    imageUrl: 'https://images.unsplash.com/photo-1609205807107-171c63c8ad8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFua2luY2Vuc2UlMjBlc3NlbnRpYWwlMjBvaWx8ZW58MXx8fHwxNzU1NTkzNzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmFua2luY2Vuc2UlMjB0cmVlJTIwcmVzaW58ZW58MXx8fHwxNzU1NTkzNzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'Somalia, Oman',
    extractionMethod: 'Steam distillation',
    aromaNotes: ['Woody', 'Balsamic', 'Sweet'],
    blendsWith: ['Lavender', 'Orange', 'Rose', 'Sandalwood', 'Myrrh']
  },
  {
    id: '7',
    name: 'Rosemary',
    scientificName: 'Rosmarinus officinalis',
    description: 'An invigorating herb oil that enhances mental clarity, memory, and concentration while supporting hair health.',
    benefits: ['Memory enhancement', 'Mental clarity', 'Hair growth support', 'Circulation boost', 'Focus improvement', 'Energizing'],
    uses: ['Study aromatherapy', 'Hair care', 'Massage oil', 'Diffusion', 'Topical application', 'Scalp treatment'],
    precautions: ['Avoid during pregnancy', 'May increase blood pressure', 'Not for epileptics', 'Dilute before use'],
    imageUrl: 'https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlbWFyeSUyMGVzc2VudGlhbCUyMG9pbHxlbnwxfHx8fDE3NTU1OTM3OTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb3NlbWFyeSUyMGhlcmIlMjBwbGFudCUyMGdyb3dpbmd8ZW58MXx8fHwxNzU1NTkzNzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'Mediterranean',
    extractionMethod: 'Steam distillation',
    aromaNotes: ['Herbaceous', 'Camphoraceous', 'Fresh'],
    blendsWith: ['Peppermint', 'Lemon', 'Eucalyptus', 'Lavender', 'Pine']
  },
  {
    id: '8',
    name: 'Chamomile',
    scientificName: 'Matricaria chamomilla',
    description: 'A gentle, soothing oil perfect for calming irritated skin, reducing anxiety, and promoting restful sleep.',
    benefits: ['Calming', 'Anti-inflammatory', 'Skin soothing', 'Sleep promotion', 'Anxiety relief', 'Gentle healing'],
    uses: ['Skincare', 'Baby care', 'Sleep support', 'Massage', 'Bath additive', 'Aromatherapy'],
    precautions: ['Generally very safe', 'Rare allergies to daisy family', 'Patch test for sensitive skin'],
    imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtb21pbGUlMjBlc3NlbnRpYWwlMjBvaWx8ZW58MXx8fHwxNzU1NTkzODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1653669486138-a4dd6c55b8f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGFtb21pbGUlMjBmbG93ZXJzJTIwZmllbGR8ZW58MXx8fHwxNzU1NTkzODA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'Europe, North Africa',
    extractionMethod: 'Steam distillation',
    aromaNotes: ['Sweet', 'Floral', 'Apple-like'],
    blendsWith: ['Lavender', 'Rose', 'Geranium', 'Bergamot', 'Frankincense']
  },
  {
    id: '9',
    name: 'Orange Sweet',
    scientificName: 'Citrus sinensis',
    description: 'A cheerful citrus oil that uplifts mood, reduces stress, and creates a warm, welcoming atmosphere.',
    benefits: ['Mood enhancement', 'Stress relief', 'Uplifting', 'Immune support', 'Digestive aid', 'Calming for children'],
    uses: ['Diffusion', 'Room spray', 'Cleaning blends', 'Aromatherapy', 'Bath additive', 'Massage oil'],
    precautions: ['Photosensitive', 'May cause skin sensitivity', 'Avoid sun after topical use', 'Always dilute'],
    imageUrl: 'https://images.unsplash.com/photo-1580910051919-adab73895bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjBlc3NlbnRpYWwlMjBvaWx8ZW58MXx8fHwxNzU1NTkzODA4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmFuZ2UlMjB0cmVlJTIwZnJ1aXQlMjBncm93aW5nfGVufDF8fHx8MTc1NTU5MzgxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'Asia',
    extractionMethod: 'Cold pressing',
    aromaNotes: ['Sweet', 'Citrus', 'Fresh'],
    blendsWith: ['Cinnamon', 'Clove', 'Frankincense', 'Geranium', 'Lavender']
  },
  {
    id: '10',
    name: 'Ylang Ylang',
    scientificName: 'Cananga odorata',
    description: 'An exotic floral oil known for its romantic, balancing properties and ability to reduce stress and promote confidence.',
    benefits: ['Stress reduction', 'Mood balancing', 'Confidence boost', 'Romantic atmosphere', 'Hair care', 'Blood pressure support'],
    uses: ['Perfume blending', 'Hair care', 'Romantic aromatherapy', 'Stress relief', 'Massage', 'Diffusion'],
    precautions: ['Strong scent - use sparingly', 'May cause headaches in sensitive individuals', 'Patch test recommended'],
    imageUrl: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5bGFuZyUyMHlsYW5nJTIwZXNzZW50aWFsJTIwb2lsfGVufDF8fHx8MTc1NTU5MzgxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5bGFuZyUyMHlsYW5nJTIwZmxvd2VyJTIwdHJlZXxlbnwxfHx8fDE3NTU1OTM4MTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'Indonesia, Philippines',
    extractionMethod: 'Steam distillation',
    aromaNotes: ['Sweet', 'Floral', 'Exotic'],
    blendsWith: ['Rose', 'Jasmine', 'Sandalwood', 'Bergamot', 'Geranium']
  },
  {
    id: '11',
    name: 'Bergamot',
    scientificName: 'Citrus bergamia',
    description: 'A sophisticated citrus oil that balances mood, reduces anxiety, and promotes emotional well-being.',
    benefits: ['Mood balancing', 'Anxiety relief', 'Confidence boost', 'Skin care', 'Stress reduction', 'Emotional support'],
    uses: ['Aromatherapy', 'Perfume blending', 'Skin care', 'Diffusion', 'Bath additive', 'Massage oil'],
    precautions: ['Photosensitive', 'Avoid sun exposure after topical use', 'May interact with medications', 'Always dilute'],
    imageUrl: 'https://images.unsplash.com/photo-1602005229452-4c96359dee65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJnYW1vdCUyMGVzc2VudGlhbCUyMG9pbHxlbnwxfHx8fDE3NTU1OTM4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1613744273505-3e467f7ac221?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJnYW1vdCUyMGZydWl0JTIwdHJlZXxlbnwxfHx8fDE3NTU1OTM4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'Italy',
    extractionMethod: 'Cold pressing',
    aromaNotes: ['Citrus', 'Floral', 'Fresh'],
    blendsWith: ['Lavender', 'Geranium', 'Ylang Ylang', 'Frankincense', 'Rose']
  },
  {
    id: '12',
    name: 'Geranium',
    scientificName: 'Pelargonium graveolens',
    description: 'A balancing floral oil that harmonizes emotions, supports skin health, and promotes hormonal balance.',
    benefits: ['Hormonal balance', 'Emotional harmony', 'Skin health', 'Stress relief', 'Mood stabilizing', 'Anti-aging'],
    uses: ['Skin care', 'Aromatherapy', 'Massage', 'Perfume blending', 'Diffusion', 'Bath additive'],
    precautions: ['Generally safe', 'May affect blood pressure', 'Patch test for sensitive skin', 'Avoid during pregnancy'],
    imageUrl: 'https://images.unsplash.com/photo-1602005815037-0bb29b16003c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJhbml1bSUyMGVzc2VudGlhbCUyMG9pbHxlbnwxfHx8fDE3NTU1OTM4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    plantImageUrl: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJhbml1bSUyMGZsb3dlciUyMHBsYW50fGVufDF8fHx8MTc1NTU5MzgzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    origin: 'South Africa',
    extractionMethod: 'Steam distillation',
    aromaNotes: ['Floral', 'Rose-like', 'Minty'],
    blendsWith: ['Rose', 'Lavender', 'Bergamot', 'Clary Sage', 'Orange']
  }
];

// Keywords mapping for intelligent matching
export const keywordMapping = {
  // Sleep and relaxation
  sleep: ['Lavender', 'Chamomile', 'Frankincense', 'Bergamot', 'Orange Sweet'],
  relaxation: ['Lavender', 'Chamomile', 'Frankincense', 'Ylang Ylang', 'Bergamot'],
  calm: ['Lavender', 'Chamomile', 'Frankincense', 'Bergamot', 'Orange Sweet'],
  anxiety: ['Lavender', 'Bergamot', 'Chamomile', 'Frankincense', 'Orange Sweet'],
  stress: ['Lavender', 'Bergamot', 'Orange Sweet', 'Ylang Ylang', 'Frankincense'],
  
  // Energy and focus
  energy: ['Peppermint', 'Eucalyptus', 'Lemon', 'Rosemary', 'Orange Sweet'],
  focus: ['Peppermint', 'Rosemary', 'Lemon', 'Eucalyptus', 'Frankincense'],
  concentration: ['Rosemary', 'Peppermint', 'Lemon', 'Eucalyptus', 'Frankincense'],
  memory: ['Rosemary', 'Peppermint', 'Lemon', 'Frankincense'],
  clarity: ['Peppermint', 'Eucalyptus', 'Lemon', 'Rosemary'],
  alert: ['Peppermint', 'Eucalyptus', 'Lemon', 'Rosemary'],
  
  // Mood and emotional
  mood: ['Orange Sweet', 'Bergamot', 'Lemon', 'Ylang Ylang', 'Geranium'],
  happy: ['Orange Sweet', 'Lemon', 'Bergamot', 'Ylang Ylang'],
  uplifting: ['Orange Sweet', 'Lemon', 'Bergamot', 'Peppermint'],
  confidence: ['Ylang Ylang', 'Bergamot', 'Orange Sweet', 'Frankincense'],
  balance: ['Geranium', 'Bergamot', 'Ylang Ylang', 'Frankincense'],
  
  // Physical ailments
  headache: ['Peppermint', 'Eucalyptus', 'Lavender', 'Rosemary'],
  pain: ['Peppermint', 'Eucalyptus', 'Lavender', 'Rosemary'],
  muscle: ['Peppermint', 'Eucalyptus', 'Rosemary', 'Lavender'],
  respiratory: ['Eucalyptus', 'Peppermint', 'Tea Tree', 'Lemon'],
  breathing: ['Eucalyptus', 'Peppermint', 'Tea Tree'],
  congestion: ['Eucalyptus', 'Peppermint', 'Tea Tree', 'Lemon'],
  
  // Skin care
  skin: ['Tea Tree', 'Lavender', 'Chamomile', 'Geranium', 'Frankincense'],
  acne: ['Tea Tree', 'Lavender', 'Geranium', 'Lemon'],
  healing: ['Tea Tree', 'Lavender', 'Chamomile', 'Frankincense'],
  
  // Digestive
  digestive: ['Peppermint', 'Orange Sweet', 'Lemon', 'Chamomile'],
  stomach: ['Peppermint', 'Orange Sweet', 'Chamomile'],
  
  // Hair care
  hair: ['Rosemary', 'Tea Tree', 'Lavender', 'Ylang Ylang'],
  
  // Spiritual and meditation
  meditation: ['Frankincense', 'Lavender', 'Sandalwood', 'Ylang Ylang'],
  spiritual: ['Frankincense', 'Sandalwood', 'Myrrh'],
  grounding: ['Frankincense', 'Geranium', 'Ylang Ylang'],
  
  // Cleaning and purifying
  clean: ['Lemon', 'Tea Tree', 'Eucalyptus', 'Peppermint'],
  purify: ['Tea Tree', 'Lemon', 'Eucalyptus'],
  antimicrobial: ['Tea Tree', 'Eucalyptus', 'Lemon', 'Rosemary']
};

// Recommendation engine
export function generateRecommendations(prompt: string, selectedSuggestions: string[]): Oil[] {
  const combinedInput = (prompt + ' ' + selectedSuggestions.join(' ')).toLowerCase();
  const oilScores: { [key: string]: number } = {};
  
  // Initialize scores
  oilsDatabase.forEach(oil => {
    oilScores[oil.name] = 0;
  });
  
  // Score based on keyword matching
  Object.entries(keywordMapping).forEach(([keyword, oilNames]) => {
    if (combinedInput.includes(keyword)) {
      oilNames.forEach((oilName, index) => {
        if (oilScores[oilName] !== undefined) {
          // Higher score for oils that appear earlier in the list (more relevant)
          oilScores[oilName] += (oilNames.length - index) * 2;
        }
      });
    }
  });
  
  // Score based on benefits matching
  oilsDatabase.forEach(oil => {
    oil.benefits.forEach(benefit => {
      const benefitWords = benefit.toLowerCase().split(' ');
      benefitWords.forEach(word => {
        if (combinedInput.includes(word) && word.length > 3) {
          oilScores[oil.name] += 1;
        }
      });
    });
  });
  
  // Score based on uses matching
  oilsDatabase.forEach(oil => {
    oil.uses.forEach(use => {
      const useWords = use.toLowerCase().split(' ');
      useWords.forEach(word => {
        if (combinedInput.includes(word) && word.length > 3) {
          oilScores[oil.name] += 0.5;
        }
      });
    });
  });
  
  // Sort oils by score and return top recommendations
  const sortedOils = oilsDatabase
    .map(oil => ({ oil, score: oilScores[oil.name] }))
    .sort((a, b) => b.score - a.score)
    .filter(item => item.score > 0)
    .map(item => item.oil);
  
  // If no matches found, return popular general-purpose oils
  if (sortedOils.length === 0) {
    return oilsDatabase.filter(oil => 
      ['Lavender', 'Peppermint', 'Lemon', 'Tea Tree'].includes(oil.name)
    );
  }
  
  // Return top 6 recommendations, or all if fewer than 6
  return sortedOils.slice(0, Math.min(6, sortedOils.length));
}

// Get oil by ID
export function getOilById(id: string): Oil | undefined {
  return oilsDatabase.find(oil => oil.id === id);
}

// Get random oils for display
export function getRandomOils(count: number = 3): Oil[] {
  const shuffled = [...oilsDatabase].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Search oils by name or benefits
export function searchOils(query: string): Oil[] {
  const lowerQuery = query.toLowerCase();
  return oilsDatabase.filter(oil =>
    oil.name.toLowerCase().includes(lowerQuery) ||
    oil.benefits.some(benefit => benefit.toLowerCase().includes(lowerQuery)) ||
    oil.uses.some(use => use.toLowerCase().includes(lowerQuery))
  );
}