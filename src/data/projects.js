export const projects = [
  {
    id: "llm-gateway",

    number: "01",

    title: "LLM Gateway",

    subtitle:
      "Enterprise RAG infrastructure",

    description:
      "A production-oriented AI platform connecting enterprise documents, vector retrieval, LLM agents, and OpenAI-compatible APIs. I worked across the ingestion, permission, retrieval, agent, and backend layers rather than on a single isolated service.",

    problem:
      "How do you make continuously changing enterprise documents searchable by LLMs without violating the access rules of the original document system?",

    approach:
      "SharePoint state is synchronized through asynchronous pipelines, documents are normalized into a common chunk representation, permissions are encoded directly into vector payloads, and retrieval applies authorization during semantic search.",

    result:
      "The system supported 13 document formats and permission-aware RAG across organization and user collections. Indexing high-cardinality filter fields reduced a 2M-vector permission benchmark from tens of seconds to roughly 1.6–1.8 seconds.",

    technologies: [
      "Python",
      "Django",
      "Celery",
      "Redis",
      "Qdrant",
      "gRPC",
      "Microsoft Graph",
      "Docker",
    ],

    image:
      "/assets/images/projects/magic-lemp/thumbnail.webp",
  },

  {
    id: "peoa",

    number: "02",

    title: "PEOA",

    subtitle:
      "LLM orchestration for engineering workflows",

    description:
      "A research framework exploring how an AI orchestrator can solve complex process-engineering tasks by decomposing them into smaller problems and coordinating specialized models, computational tools, and structured knowledge retrieval.",

    problem:
      "A single language model may lack the domain knowledge, deterministic computation, and multi-step execution needed for specialized engineering workflows.",

    approach:
      "PEOA constructs solution trajectories consisting of subtasks and tool invocations. Graph-based retrieval supplies structured domain context while iterative error handling allows failed steps to be identified and revised.",

    result:
      "Reported experiments achieved 73.68% Exact Match on MathComp and 74.13% on ChemProc while enabling analysis of planning, tool selection, invocation, retrieval, and error-handling behavior.",

    technologies: [
      "Python",
      "LLMs",
      "Graph RAG",
      "Neo4j",
      "LlamaIndex",
      "Tool Learning",
    ],

    image:
      "/assets/images/projects/tata-research/peoa.webp",

    links: [
      {
        label: "Paper",
        url: "https://arxiv.org/abs/2408.14494",
      },
    ],
  },

  {
    id: "patexpert",

    number: "03",

    title: "PatExpert",

    subtitle:
      "Multi-agent patent intelligence",

    description:
      "A conversational multi-agent framework for automating patent analysis workflows using a central orchestrator, specialized expert agents, structured knowledge retrieval, and automated critique.",

    problem:
      "Patent workflows span very different tasks — classification, summarization, claim generation, prior-art analysis, acceptance prediction, and cross-document reasoning — making one monolithic model difficult to specialize.",

    approach:
      "A Meta-Llama-based meta-agent interprets the request and delegates subtasks to specialist agents. Graph retrieval supports multi-patent analysis while judge agents evaluate responses and return feedback for iterative refinement.",

    result:
      "The architecture unified multiple patent-analysis workflows behind one conversational interface while preserving explicit specialization and evaluation at each stage.",

    technologies: [
      "Python",
      "Meta-Llama",
      "GPT-4o",
      "Graph RAG",
      "Multi-Agent Systems",
      "LLM-as-a-Judge",
    ],

    image:
      "/assets/images/projects/tata-research/patexpert.webp",

    links: [
      {
        label: "Paper",
        url: "https://arxiv.org/abs/2409.19006",
      },
    ],
  },

  {
    id: "treasure-search",

    number: "04",

    title: "Autonomous Treasure Search",

    subtitle:
      "Multi-sensor mobile manipulation",

    description:
      "A simulated autonomous robot that combines perception, learned control, Ackermann steering, and a 4-DOF manipulator to locate and retrieve hidden targets.",

    problem:
      "The robot had to convert noisy sensor measurements into target estimates while coordinating navigation and manipulation.",

    approach:
      "I combined ROS2 and CoppeliaSim with an MLP for distance estimation and CNN imitation-learning controllers for steering and arm positioning.",

    result:
      "The complete pipeline connected learned perception and control with a simulated mobile manipulator capable of autonomous target localization and retrieval.",

    technologies: [
      "ROS2",
      "CoppeliaSim",
      "PyTorch",
      "CNN",
      "MLP",
      "Robotics",
    ],

    image:
      "/assets/images/projects/treasure-search/thumbnail.webp",
  },

  {
    id: "humanoid-rl",

    number: "05",

    title: "Humanoid Locomotion",

    subtitle:
      "Reinforcement learning for continuous control",

    description:
      "A reinforcement-learning experiment exploring how a high-dimensional humanoid can learn balance and locomotion from interaction with a physics simulator.",

    problem:
      "Humanoid locomotion requires coordinating many continuous joints while simultaneously maintaining balance and discovering a useful gait.",

    approach:
      "I trained PPO policies in MuJoCo Humanoid-v4 and analyzed reward, entropy, and value-loss dynamics to diagnose convergence and stability.",

    result:
      "The trained policy developed a stable walking behavior while providing a practical study of PPO in high-dimensional continuous-control environments.",

    technologies: [
      "Python",
      "MuJoCo",
      "PPO",
      "Reinforcement Learning",
      "PyTorch",
    ],

    image:
      "/assets/images/projects/humanoid-rl/thumbnail.webp",
  },
];