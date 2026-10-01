export const experience = [
  {
    role: 'AI Engineer Intern', org: 'MagicLemp', place: 'Paris, France', dates: 'Dec 2025 – Jun 2026',
    logo: 'assets/images/logos/magic-lemp.webp',
    points: [
      'Built a SharePoint-to-Qdrant sync pipeline with Microsoft Graph API, Celery and Redis, using incremental freshness checks, content-hash deduplication and rate limiting to avoid redundant indexing and embedding work.',
      'Built RAG and web-search agents as streaming gRPC/Protobuf services with permission-aware retrieval, query reformulation and source-grounded citations, on a production platform covering 13 document formats.',
      'Cut permission-aware Qdrant query latency from 25–52s to 1.6–1.8s on 2M+ vectors by indexing high-cardinality file identifiers.',
    ],
  },
  {
    role: 'Software Engineer Intern', org: 'Tata Research Group', place: 'Bangalore, India', dates: 'Jun 2024 – Aug 2024',
    logo: 'assets/images/logos/tata.webp',
    points: [
      'Built PEOA, a modular LLM orchestration framework with task decomposition, dynamic routing across models and tools, and Graph-RAG for grounded reasoning.',
      'Built PatExpert, a multi-agent patent analysis system with a Llama-3.1-405B orchestrator and GPT-4o-mini agents, plus LLM-as-a-Judge feedback loops.',
      'Reached 73.68% / 74.13% Exact Match on MathComp / ChemProc; the work contributed to papers submitted to AAAI and NeurIPS.',
    ],
  },
]
