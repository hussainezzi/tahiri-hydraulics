export const categories = [
  {
    id: 'hydraulic-hoses',
    name: 'Hydraulic Hoses',
    icon: 'wrench',
    description: 'High-pressure hydraulic hoses for industrial applications',
    products: [
      { name: 'Parker Hydraulic Hose', sku: 'PRK-HH-001', brand: 'Parker', pressure: '350 Bar', temp: '-40°C to +100°C' },
      { name: 'Caterpillar Hydraulic Hose', sku: 'CAT-HH-001', brand: 'Caterpillar', pressure: '400 Bar', temp: '-40°C to +120°C' },
      { name: 'SS Steam Flexible Hose', sku: 'SS-SF-001', brand: 'Tahiri', pressure: '50 Bar', temp: 'up to +500°C' },
      { name: 'Rubber Hose Pipe', sku: 'RB-HP-001', brand: 'Tahiri', pressure: '200 Bar', temp: '-20°C to +80°C' },
      { name: 'Textile Braided Air Compressor Pipe', sku: 'TB-AC-001', brand: 'Tahiri', pressure: '15 Bar', temp: '-10°C to +60°C' },
    ]
  },
  {
    id: 'fittings',
    name: 'Hydraulic Fittings',
    icon: 'settings',
    description: 'Precision crimping fittings and connectors',
    products: [
      { name: 'Hydraulic Crimping Fitting', sku: 'HCF-001', brand: 'Tahiri', material: 'Steel', type: 'BSP/NPT' },
      { name: 'Yutong Original Fitting', sku: 'YUT-001', brand: 'Yutong', material: 'Stainless Steel', type: 'Metric' },
      { name: 'Parker Push-Lok Fitting', sku: 'PRK-PL-001', brand: 'Parker', material: 'Brass', type: 'Push-Lock' },
      { name: 'Caterpillar OEM Fitting', sku: 'CAT-F-001', brand: 'Caterpillar', material: 'Carbon Steel', type: 'JIC/ORFS' },
    ]
  },
  {
    id: 'industrial-pipes',
    name: 'Industrial Pipes',
    icon: 'factory',
    description: 'MS, SS and specialty pipes for heavy industry',
    products: [
      { name: 'MS Brake Pipe', sku: 'MS-BP-001', brand: 'Tahiri', material: 'Mild Steel', pressure: '100 Bar' },
      { name: 'A/C Pipe', sku: 'AC-PP-001', brand: 'Tahiri', material: 'Aluminium', use: 'Air Conditioning' },
      { name: 'High-Pressure Moulding Machine Pipe', sku: 'HP-MM-001', brand: 'Tahiri', pressure: '500 Bar', temp: 'up to +200°C' },
      { name: 'Karcher Machine Pipe', sku: 'KM-PP-001', brand: 'Karcher Compatible', pressure: '200 Bar', use: 'Pressure Washing' },
    ]
  },
  {
    id: 'bellows',
    name: 'Expansion Bellows',
    icon: 'wind',
    description: 'SS expansion and exhaust bellows for thermal compensation',
    products: [
      { name: 'SS Expansion Bellow', sku: 'SS-EB-001', brand: 'Tahiri', material: 'Stainless Steel 304', temp: 'up to +800°C' },
      { name: 'Exhaust Bellow', sku: 'EX-EB-001', brand: 'Tahiri', material: 'Stainless Steel 316', temp: 'up to +900°C' },
      { name: 'High Temperature Pipe', sku: 'HT-PP-001', brand: 'Tahiri', temp: 'up to +1000°C', use: 'Kiln/Furnace' },
    ]
  },
  {
    id: 'authorized',
    name: 'Authorized Brands',
    icon: 'trophy',
    description: 'Official dealers for world-class hydraulic brands',
    products: [
      { name: 'Parker Full Hose Range', sku: 'PRK-FULL', brand: 'Parker', authorized: true },
      { name: 'Caterpillar Hose & Fittings', sku: 'CAT-FULL', brand: 'Caterpillar', authorized: true },
      { name: 'Yutong Bus Hydraulics', sku: 'YUT-FULL', brand: 'Yutong', authorized: true },
    ]
  }
];

export const stats = [
  { value: '38+', label: 'Years Experience' },
  { value: '237+', label: 'Products' },
  { value: '250+', label: 'SKUs in Stock' },
  { value: '5', label: 'Categories' },
];

export const certifications = ['MSHA', 'FRAS', 'ABS', 'DNV-GL', "Lloyd's", 'ISO 1436', 'SAE J517', 'EN 853', 'ISO 18752'];
