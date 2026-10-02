export const experience = [
  {
    id: "magic-lemp",

    company: "Magic LEMP",

    role: "AI Engineer Intern",

    location: "Paris, France",

    period: "Dec 2025 - Jun 2026",

    headline:
      "Building the infrastructure behind a production enterprise AI gateway.",

    summary:
      "I worked on LLM Gateway, a multi-tenant platform designed to expose multiple AI capabilities through a single OpenAI-compatible interface. My work sat primarily behind the user-facing product: document ingestion, retrieval infrastructure, RAG agents, web search, permissions, and the services that connected them.",

    context:
      "Enterprise RAG becomes considerably harder once documents are continuously changing, users have different permissions, files arrive in many formats, and multiple organizations must remain isolated. The system needed to preserve SharePoint access rules while still making semantic retrieval fast enough for interactive use.",

    contributions: [
      {
        title: "Document ingestion",
        text:
          "Built the SharePoint synchronization path from Microsoft Graph through asynchronous Celery pipelines into parsing, embedding, and Qdrant indexing. The pipeline detects new, modified, unchanged, and deleted documents rather than blindly reprocessing an entire library.",
      },

      {
        title: "Permission-aware retrieval",
        text:
          "Represented organization, user, and group permissions directly inside Qdrant vector payloads so access control could be applied during similarity search instead of through a separate post-filtering service.",
      },

      {
        title: "RAG + web-search agents",
        text:
          "Implemented streaming gRPC agents for internal-document RAG and web search. The RAG agent reformulates conversational queries, searches both personal and organization-wide collections, and streams citations alongside generated responses.",
      },

      {
        title: "Platform architecture",
        text:
          "Contributed across the service boundary rather than one isolated component: synchronization, document parsing, shared RAG utilities, gRPC contracts, Django DMS endpoints, vector search, and deployment infrastructure.",
      },
    ],

    impact: {
      label: "Retrieval optimization",
      value: "25–52s → 1.6–1.8s",
      description:
        "High-cardinality permission filtering over 2M vectors and filters containing up to 1M file identifiers was reduced by more than an order of magnitude after introducing indexed filtering.",
    },

    stats: [
      {
        value: "6",
        label: "repositories",
      },
      {
        value: "13",
        label: "document formats",
      },
      {
        value: "2M+",
        label: "benchmark vectors",
      },
    ],

    technologies: [
      "Python",
      "Django",
      "FastAPI",
      "Celery",
      "Redis",
      "Qdrant",
      "PostgreSQL",
      "gRPC",
      "Protobuf",
      "Microsoft Graph",
      "Docker",
    ],
  },

  {
    id: "tcs-research",

    company: "Tata Research",

    role: "Software Engineer Intern",

    location: "Bangalore, India",

    period: "Jun 2024 - Aug 2024",

    headline:
      "Exploring how language models can orchestrate tools, specialist models, and structured knowledge.",

    summary:
      "My internship focused on agentic AI systems rather than standalone language-model calls. I worked on research systems that decomposed complex requests, selected specialized models and computational tools, incorporated graph-based retrieval, and used evaluation or critique loops to refine their outputs.",

    context:
      "General-purpose LLMs can generate impressive responses, but domain-specific workflows often require structured knowledge, deterministic computational tools, multiple specialized models, and mechanisms for recovering from errors. The research explored how an orchestrator could coordinate those capabilities.",

    contributions: [
      {
        title: "PEOA",
        text:
          "Worked on the Process Engineering Operations Assistant, a modular orchestration framework that decomposes engineering problems into subtasks and routes them through specialized language models, computation tools, and graph-based retrieval.",
      },

      {
        title: "Graph-based retrieval",
        text:
          "Integrated structured knowledge retrieval into the reasoning pipeline so agents could use relationships encoded in property graphs rather than relying only on flat vector similarity.",
      },

      {
        title: "PatExpert",
        text:
          "Developed parts of a multi-agent patent-analysis framework where a meta-agent delegates work to specialist agents for classification, summarization, claim generation, acceptance prediction, hypothesis generation, and multi-patent analysis.",
      },

      {
        title: "Evaluation",
        text:
          "Built and analyzed evaluation pipelines across task planning, tool selection, tool invocation, response generation, Graph-RAG retrieval, and iterative error-handling behavior.",
      },
    ],

    impact: {
      label: "PEOA evaluation",
      value: "73.68% / 74.13%",
      description:
        "Exact Match on the MathComp and ChemProc evaluation datasets in the reported PEOA experiments.",
    },

    stats: [
      {
        value: "2",
        label: "research systems",
      },
      {
        value: "Graph RAG",
        label: "structured retrieval",
      },
      {
        value: "Multi-agent",
        label: "orchestration",
      },
    ],

    technologies: [
      "Python",
      "LLMs",
      "Graph RAG",
      "Neo4j",
      "LlamaIndex",
      "Knowledge Graphs",
      "Multi-Agent Systems",
      "LLM-as-a-Judge",
    ],

    links: [
      {
        label: "PEOA Paper",
        url: "https://arxiv.org/abs/2408.14494",
      },
      {
        label: "PatExpert Paper",
        url: "https://arxiv.org/abs/2409.19006",
      },
    ],
  },
];