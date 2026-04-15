export interface BlogPost {
  id: number;
  slug: string;
  tag: string;
  date: string;
  title: string;
  description: string;
  image: string; // ✅ ADD THIS
  content: string[];
}

export const posts: BlogPost[] = [
  {
    id: 1,
    slug: "art-of-premium-cotton-fabrics",
    tag: "Cotton",
    date: "April 2026",
    title: "The Art of Premium Cotton Fabrics",
    description:
      "Explore how high-quality cotton is carefully selected, processed, and transformed into the luxurious fabrics that define comfort and craftsmanship.",
    image: "/images/blog/blog1.jpg",
    content: ["Cotton has been at the heart of textile craftsmanship for millennia — and for good reason. When sourced from the finest fields and handled with precision, cotton yields a fabric that is breathable, durable, and supremely soft against the skin.",
      "At Centuary Fab, our cotton selection begins at origin. We partner with cultivators who practice careful harvesting — hand-picking fibres to preserve their length and strength. Long-staple cotton varieties such as Giza and Supima are prioritised for their exceptional lustre and resistance to pilling.",
      "Once sourced, the raw cotton undergoes a rigorous pre-treatment process. Ginning separates fibre from seed without compromising quality. Carding and combing align fibres for uniformity, producing a yarn that is fine, smooth, and consistent. It is at this stage that the character of a fabric is truly born.",
      "The dyeing and finishing phase is where artistry meets science. Natural and reactive dyes are applied under carefully controlled conditions to ensure depth of colour and wash-fastness. Finishing treatments — mercerisation, sanforisation, calendering — add the final layer of refinement: a handle that is crisp yet supple, a surface that holds its form wash after wash.",
      "Premium cotton is not a commodity; it is a craft. Each metre that leaves our facility carries the accumulated knowledge of decades — an enduring commitment to fabric that performs as beautifully as it looks.",
    ],
  },
  {
    id: 2,
    slug: "linen-future-of-sustainable-fashion",
    tag: "Linen",
    date: "March 2026",
    title: "Why Linen is the Future of Sustainable Fashion",
    description:
      "Discover why linen fabrics are rapidly becoming the top choice for eco-conscious designers.",
    image: "/images/blog/blog2.jpg",
    content: [
  "Flax requires significantly less water than cotton to cultivate, often thriving on rainfall alone. Every part of the plant finds use.",
  
  "Centuary Fab Erode is a leading fabric manufacturer specializing in cotton and linen fabrics.",

  "The fibre itself is extraordinary. Linen is stronger than cotton, naturally resistant to bacteria, and grows softer and more lustrous with each wash. Unlike synthetic alternatives, it biodegrades fully at the end of its life — leaving no trace on the earth that grew it.",

  "For fashion brands, linen offers creative versatility. Its natural slub texture lends an organic, artisanal quality.",

  "At Centuary Fab, our linen range is processed with low-impact dyes and finished without harmful chemicals.",],
  },
  {
    id: 3,
    slug: "understanding-fabric-dyeing-finishing",
    tag: "Process",
    date: "February 2026",
    title: "Understanding Fabric Dyeing & Finishing",
    description:
      "A behind-the-scenes look at how fabrics are dyed and finished.",
    image: "/images/blog/blog3.jpg",
    content: ["The journey from grey fabric to a finished textile ready for a designer's studio is one of the most technically demanding — and artistically rewarding — processes in manufacturing. Dyeing and finishing are where science, craft, and creativity converge.",
      "Dyeing begins with preparation. Fabrics must be scoured to remove natural waxes and impurities, then bleached to a clean, receptive base. The fibre type dictates the dye class: reactive dyes for cotton and linen, acid dyes for silk and wool, disperse dyes for polyester. Each requires precise temperature, pH, and timing to achieve the intended result.",
      "Centuary Fab Erode is a leading fabric manufacturer specializing in cotton and linen fabrics.",
      "Colour matching is an art in itself. Our colourists work from Pantone and custom client swatches, building dye recipes that reproduce exact shades across large batch runs — a consistency that mass-market processes frequently fail to achieve. Wash-fastness, light-fastness, and crocking tests are performed at every stage.",
      "Finishing follows dyeing and determines a fabric's final personality. Mechanical finishing processes — calendering for smoothness, sanforisation for dimensional stability, raising for softness — shape how a fabric feels and behaves in wear. Chemical finishes add properties such as wrinkle-resistance, water repellency, or anti-microbial protection.",
      "At Centuary Fab, every finishing decision is made in service of the fabric's end use. A fine shirting cloth demands a different hand than a heavy suiting or a delicate voile. Understanding that distinction — and executing it with consistency — is the craft that separates premium textile processing from the ordinary.",
    ],
  },
  {
    id: 4,
    slug: "ritual-fabrics-indian-culture",
    tag: "Ritual",
    date: "January 2026",
    title: "The Importance of Ritual Fabrics in Indian Culture",
    description:
      "Fabric in India carries meaning beyond utility.",
    image: "/images/blog/blog4.jpg",
    content: [ "In India, fabric is never merely cloth. It is ceremony. It is memory. It is the thread that binds generations across time. From the puja room to the wedding mandap, from the Pongal harvest to the Eid celebration, specific textiles carry meanings that no word can fully express.",
      "White cotton and silk hold sacred significance in Hindu ritual — representing purity, auspiciousness, and the threshold between the material and divine. The offering of a new cloth to a deity, the draping of a temple idol in fresh silk, the gifting of a sari at a daughter's wedding — these are acts imbued with spiritual weight.",
      "Regional textile traditions reflect the diversity of India's ritual landscape. Kanjivaram silk from Tamil Nadu graces South Indian brides in colours chosen for their astrological and cultural significance. Banarasi brocade carries Mughal-era motifs into contemporary celebrations. Chanderi and Maheshwari serve the everyday rituals of central Indian households with understated grace.",
      "The relationship between fabric and occasion is encoded in community memory. A grandmother knows instinctively which textile is appropriate for a naming ceremony, which for a funeral, which for a harvest festival. These distinctions — passed orally across generations — constitute an intangible cultural heritage as rich as any written tradition.",
      "Centuary Fab is proud to supply fabrics that become part of these stories. When our cloth is chosen for a wedding trousseau or a temple offering, it enters a lineage far older than our company. We hold that responsibility with care — producing textiles worthy of the moments they are called to mark.",],
  },
  {
    id: 5,
    slug: "choosing-the-right-shirting-fabric",
    tag: "Shirting",
    date: "December 2025",
    title: "Choosing the Right Shirting Fabric",
    description:
      "Understand how fabric choice shapes fit and feel.",
    image: "/images/blog/blog5.jpg",
    content: ["Choosing the right shirting fabric is essential for both comfort and appearance. High-quality fabric enhances both the look and durability of garments.",
    "Cotton and linen are among the most preferred fabrics for shirts due to their breathability and natural feel. These materials provide comfort throughout the day, especially in warm climates.",
    "Thread count, weave type, and finishing processes play a major role in fabric quality. A well-made fabric feels smooth, holds its structure, and maintains its appearance over time.",
    "In textile hubs like Erode, manufacturers focus on combining traditional weaving techniques with modern technology to produce world-class fabrics.",
    "Centuary Fab offers premium shirting fabrics that meet the needs of modern fashion brands and businesses across India.",
    "Our fabrics are designed for comfort, durability, and elegance, making them ideal for both formal and casual wear.",
    "If you are looking for high-quality shirting fabric, choosing the right manufacturer ensures long-term value and customer satisfaction.",],
  },
{
  id: 6,
  slug: "fabric-manufacturer-india-guide",
  tag: "Textile Excellence",
  date: "April 2026",
  title: "Leading Fabric Manufacturer in India: A Complete Guide",
  description:
    "Looking for a reliable fabric manufacturer in India? Discover how to choose the right textile partner for quality, consistency, and long-term business growth.",
  image: "/images/blog/blog6.jpg",
  content: [
    "India is one of the largest textile manufacturing hubs in the world, offering a wide range of fabrics including cotton, linen, and blended materials.",
    "Choosing the right fabric manufacturer in India is crucial for businesses that depend on quality, consistency, and timely delivery.",
    "A reliable manufacturer should have strong expertise in weaving, dyeing, and finishing processes, along with modern infrastructure.",
    "Regions like Tamil Nadu, especially Erode, are known for their excellence in textile production and innovation.",
    "At Centuary Fab, we combine traditional craftsmanship with advanced technology to deliver premium cotton and linen fabrics.",
    "Our commitment to quality and customer satisfaction makes us a trusted fabric partner for brands and wholesalers across India.",
  ],
},
{
  id: 7,
  slug: "centuary-fab-erode-fabric-manufacturer",
  tag: "Brand Story",
  date: "April 2026",
  title: "Centuary Fab: Premium Fabric Manufacturer in Erode",
  description:
    "Centuary Fab is a leading fabric manufacturer in Erode, specializing in premium cotton and linen fabrics. Discover our journey, quality, and expertise in textile manufacturing.",
  image: "/images/blog/blog7.jpg",
  content: [
  "Centuary Fab Erode is becoming a preferred choice for premium cotton and linen fabric manufacturing in India.",
    "Centuary Fab is a trusted name in the textile industry, known for premium fabric manufacturing in Erode, Tamil Nadu.",
    "With a strong focus on quality and craftsmanship, Centuary Fab specializes in cotton and linen fabrics for modern apparel and textile businesses.",
    "Located in Erode, one of India’s leading textile hubs, Centuary Fab combines traditional weaving techniques with modern manufacturing processes.",
    "Our fabrics are designed to meet the highest standards of durability, comfort, and style.",
    "Centuary Fab serves clients across India, offering reliable fabric supply for wholesalers, retailers, and fashion brands.",
    "If you are searching for a fabric manufacturer in Erode, Centuary Fab stands as a symbol of quality, trust, and textile excellence.",
  ],
},
];