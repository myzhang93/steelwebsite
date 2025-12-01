export interface BlogPost {
  id: number
  image: string
  date: string
  day: string
  monthYear: string
  title: string
  author: string
  comments: number
  category: string[]
  excerpt: string
  slug: string
  fullContent?: string
  featuredImage?: string
  supportingImages?: string[]
  quote?: string
  tags?: string[]
  wordpressId?: string | number // WordPress 文章 ID
  previousPost?: {
    slug: string
    title: string
    image: string
  }
  nextPost?: {
    slug: string
    title: string
    image: string
  }
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    image: "/industrial-machinery-fabrication.jpg",
    date: "2024-02-10",
    day: "10",
    monthYear: "Feb 24",
    title: "The New Celanese Chief Pushes Customer-Facing Strategy",
    author: "Shanxi Steel",
    comments: 0,
    category: ["Bridge Construction", "Electronic Materials"],
    excerpt: "In a strategic move that signals a significant shift in corporate direction, the newly appointed chief executive of Celanese has unveiled a comprehensive customer-facing strategy.",
    slug: "celanese-chief-customer-facing-strategy",
    wordpressId: undefined, // 在这里填入 WordPress 文章 ID，例如: "123"
    featuredImage: "/industrial-machinery-fabrication.jpg",
    supportingImages: [
      "/stainless-steel-pipes-welding.jpg",
      "/industrial-surface-treatment-facility.jpg"
    ],
    quote: "It also can help to remind yourself that these catastrophic thoughts aren't 'expressions of facts,' Rajaee said. Rather, they're 'expressions of fear'—our brain's way of trying to protect us, she said.",
    tags: ["Power & Energy Sector"],
    fullContent: `
      <p>In a strategic move that signals a significant shift in corporate direction, the newly appointed chief executive of Celanese has unveiled a comprehensive customer-facing strategy. This approach represents a fundamental transformation in how the company engages with its clientele, prioritizing direct relationships and tailored solutions over traditional transactional models.</p>
      
      <p>The new strategy emphasizes supply chain optimization, demand variability management, and operational cost reduction. By focusing on customer needs and building stronger partnerships, Celanese aims to create more resilient and responsive business operations.</p>
      
      <p>Supply chains have become increasingly complex in today's global economy. Companies must navigate fluctuating demand, geopolitical uncertainties, and operational challenges. The customer-facing approach allows Celanese to better understand and anticipate market needs, leading to more efficient production and distribution processes.</p>
      
      <h3>What can managers take away from this study?</h3>
      
      <p>Managers can learn several key lessons from this strategic shift:</p>
      
      <ul>
        <li>Watch the same movie at the same time and text about your reactions</li>
        <li>Create a shared Spotify playlist and listen together</li>
        <li>Read a chapter of the same book every day and talk about it</li>
      </ul>
      
      <p>These collaborative approaches help build stronger relationships and understanding between team members and customers. A New York City psychotherapist has noted that such practices can significantly improve communication and engagement in both personal and professional contexts.</p>
    `,
    previousPost: {
      slug: "lean-service-well-operations-hr-practices",
      title: "Lean service well operations with HR practices incorporated",
      image: "/stainless-steel-pipes-welding.jpg"
    }
  },
  {
    id: 2,
    image: "/stainless-steel-pipes-welding.jpg",
    date: "2024-02-08",
    day: "08",
    monthYear: "Feb 24",
    title: "Lean service well operations with HR practices incorporated",
    author: "Shanxi Steel",
    comments: 0,
    category: ["Suppliers", "Welding Engineering"],
    excerpt: "The integration of human resources practices into lean service well operations represents a paradigm shift in operational excellence.",
    slug: "lean-service-well-operations-hr-practices",
    featuredImage: "/stainless-steel-pipes-welding.jpg",
    supportingImages: [
      "/industrial-machinery-fabrication.jpg",
      "/industrial-surface-treatment-facility.jpg"
    ],
    tags: ["Suppliers", "Welding Engineering"],
    fullContent: `
      <p>The integration of human resources practices into lean service well operations represents a paradigm shift in operational excellence. By combining the principles of lean manufacturing with strategic HR management, organizations can achieve unprecedented levels of efficiency and employee engagement.</p>
      
      <p>This innovative approach focuses on eliminating waste, improving processes, and empowering employees to contribute to continuous improvement. When HR practices are aligned with lean principles, companies can create a culture of excellence that drives both operational performance and employee satisfaction.</p>
      
      <p>Key benefits include reduced operational costs, improved quality, faster response times, and higher employee morale. The synergy between lean operations and effective HR management creates a competitive advantage that is difficult to replicate.</p>
    `,
    previousPost: {
      slug: "celanese-chief-customer-facing-strategy",
      title: "The New Celanese Chief Pushes Customer-Facing Strategy",
      image: "/industrial-machinery-fabrication.jpg"
    },
    nextPost: {
      slug: "digital-twin-supply-chain-disruptions",
      title: "Managing Disruptions: The Digital Twin For Supply Chain",
      image: "/oil-platform-sunset-offshore-industrial.jpg"
    }
  },
  {
    id: 3,
    image: "/oil-platform-sunset-offshore-industrial.jpg",
    date: "2024-02-05",
    day: "05",
    monthYear: "Feb 24",
    title: "Managing Disruptions: The Digital Twin For Supply Chain",
    author: "Shanxi Steel",
    comments: 0,
    category: ["Civil Engineering", "Fuel & Gas"],
    excerpt: "In an era marked by unprecedented supply chain volatility, the implementation of digital twin technology offers a revolutionary approach to disruption management.",
    slug: "digital-twin-supply-chain-disruptions",
    featuredImage: "/oil-platform-sunset-offshore-industrial.jpg",
    supportingImages: [
      "/industrial-machinery-fabrication.jpg",
      "/stainless-steel-pipes-welding.jpg"
    ],
    tags: ["Civil Engineering", "Fuel & Gas"],
    fullContent: `
      <p>In an era marked by unprecedented supply chain volatility, the implementation of digital twin technology offers a revolutionary approach to disruption management. This innovative solution creates virtual replicas of physical supply chain systems, enabling real-time monitoring, predictive analytics, and proactive response strategies.</p>
      
      <p>Digital twins allow companies to simulate various scenarios, test different strategies, and identify potential bottlenecks before they impact operations. By creating a virtual representation of the entire supply chain, organizations can optimize routes, predict demand fluctuations, and respond more quickly to disruptions.</p>
      
      <p>The technology integrates data from multiple sources, including IoT sensors, ERP systems, and external market data, to provide a comprehensive view of supply chain performance. This holistic approach enables better decision-making and more resilient operations.</p>
    `,
    previousPost: {
      slug: "lean-service-well-operations-hr-practices",
      title: "Lean service well operations with HR practices incorporated",
      image: "/stainless-steel-pipes-welding.jpg"
    }
  }
]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts
}

