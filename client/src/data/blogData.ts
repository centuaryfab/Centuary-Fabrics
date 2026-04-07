export interface BlogPost {
  id: number;
  slug: string;
  tag: string;
  date: string;
  title: string;
  description: string;
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
    content: [
      "Cotton has been at the heart of textile craftsmanship for millennia — and for good reason. When sourced from the finest fields and handled with precision, cotton yields a fabric that is breathable, durable, and supremely soft against the skin.",
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
      "Discover why linen fabrics are rapidly becoming the top choice for eco-conscious designers and clothing brands seeking lasting quality.",
    content: [
      "In an era of increasing environmental awareness, linen has emerged as the textile industry's most compelling answer to sustainability. Derived from the flax plant — one of the oldest cultivated crops known to humanity — linen is a fabric whose ecological credentials are matched only by its timeless elegance.",
      "Flax requires significantly less water than cotton to cultivate, often thriving on rainfall alone. Every part of the plant finds use: seeds yield linseed oil, fibres become fabric, and residual plant matter is composted back into the soil. It is a closed-loop crop in the truest sense.",
      "The fibre itself is extraordinary. Linen is stronger than cotton, naturally resistant to bacteria, and grows softer and more lustrous with each wash. Unlike synthetic alternatives, it biodegrades fully at the end of its life — leaving no trace on the earth that grew it.",
      "For fashion brands, linen offers creative versatility. Its natural slub texture lends an organic, artisanal quality to garments. It drapes beautifully in warm months and layers elegantly in cooler seasons. Available in a spectrum from raw undyed naturals to richly saturated tones, linen adapts to every aesthetic.",
      "At Centuary Fab, our linen range is processed with low-impact dyes and finished without harmful chemicals. We believe that sustainable fabric need not compromise on refinement — and our linen collection is the proof.",
    ],
  },
  {
    id: 3,
    slug: "understanding-fabric-dyeing-finishing",
    tag: "Process",
    date: "February 2026",
    title: "Understanding Fabric Dyeing & Finishing",
    description:
      "A behind-the-scenes look at how fabrics are dyed and finished to achieve the premium quality, colour depth, and handle expected by discerning brands.",
    content: [
      "The journey from grey fabric to a finished textile ready for a designer's studio is one of the most technically demanding — and artistically rewarding — processes in manufacturing. Dyeing and finishing are where science, craft, and creativity converge.",
      "Dyeing begins with preparation. Fabrics must be scoured to remove natural waxes and impurities, then bleached to a clean, receptive base. The fibre type dictates the dye class: reactive dyes for cotton and linen, acid dyes for silk and wool, disperse dyes for polyester. Each requires precise temperature, pH, and timing to achieve the intended result.",
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
      "From sacred ceremonies to festive celebrations, fabric in India carries meaning far beyond utility — it is memory, identity, and devotion woven into thread.",
    content: [
      "In India, fabric is never merely cloth. It is ceremony. It is memory. It is the thread that binds generations across time. From the puja room to the wedding mandap, from the Pongal harvest to the Eid celebration, specific textiles carry meanings that no word can fully express.",
      "White cotton and silk hold sacred significance in Hindu ritual — representing purity, auspiciousness, and the threshold between the material and divine. The offering of a new cloth to a deity, the draping of a temple idol in fresh silk, the gifting of a sari at a daughter's wedding — these are acts imbued with spiritual weight.",
      "Regional textile traditions reflect the diversity of India's ritual landscape. Kanjivaram silk from Tamil Nadu graces South Indian brides in colours chosen for their astrological and cultural significance. Banarasi brocade carries Mughal-era motifs into contemporary celebrations. Chanderi and Maheshwari serve the everyday rituals of central Indian households with understated grace.",
      "The relationship between fabric and occasion is encoded in community memory. A grandmother knows instinctively which textile is appropriate for a naming ceremony, which for a funeral, which for a harvest festival. These distinctions — passed orally across generations — constitute an intangible cultural heritage as rich as any written tradition.",
      "Centuary Fab is proud to supply fabrics that become part of these stories. When our cloth is chosen for a wedding trousseau or a temple offering, it enters a lineage far older than our company. We hold that responsibility with care — producing textiles worthy of the moments they are called to mark.",
    ],
  },
  {
    id: 5,
    slug: "choosing-the-right-shirting-fabric",
    tag: "Shirting",
    date: "December 2025",
    title: "Choosing the Right Shirting Fabric",
    description:
      "From formal poplin to relaxed linen, navigate the world of shirting with confidence — understanding how fabric choice shapes fit, feel, and occasion.",
    content: [
      "A shirt is only as good as the fabric from which it is cut. Thread count, weave structure, fibre composition, and finish all determine whether a shirt will feel premium from the first wear or lose its appeal after a season. Knowing how to choose the right shirting fabric is the first step toward building a wardrobe that endures.",
      "Poplin — also called broadcloth — is the benchmark of formal shirting. Its plain weave produces a smooth, tight surface with a subtle sheen that reads as crisp and professional. High-thread-count poplin in long-staple cotton is the fabric of choice for dress shirts and business wear. It presses beautifully and holds its structure through a full working day.",
      "Oxford cloth offers a more relaxed alternative. Its basket weave creates a slightly textured surface with more body than poplin. Pin Oxford and Royal Oxford are refined enough for business casual; heavier Oxfords suit weekend and casual settings. The weave's natural give makes it forgiving in fit and comfortable across long hours.",
      "Linen shirting occupies a category of its own. Its characteristic slub texture and breathability make it ideal for warm climates and informal occasions. While it creases readily — a property some wearers embrace as part of its aesthetic — enzyme-washed or blended linen shirting offers a more relaxed approach to the crease.",
      "For the discerning buyer, the test of a shirting fabric lies in its handle. Roll a corner gently in the hand: premium cotton should feel smooth and cool, with a confident weight that springs back without wrinkling excessively. Trust that hand — it tells you everything about how the finished shirt will wear.",
    ],
  },
];
