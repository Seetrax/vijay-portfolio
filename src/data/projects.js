const img = (p) => `assets/images/projects/${p}`
export const projects = [
  {
    title: 'Autonomous Treasure Search',
    meta: 'Multi-sensor mobile manipulator, Aug–Dec 2025',
    description: 'A ROS2 / CoppeliaSim system that finds and retrieves hidden targets using a metal detector, an Ackermann-steered vehicle and a 4-DOF arm. An MLP estimates distance from the detector and CNN imitation-learning controllers drive steering and arm positioning, reaching 0.59 MSE in target localization.',
    tags: ['ROS2', 'CoppeliaSim', 'PyTorch', 'Imitation learning'],
    thumbnail: img('treasure-search/thumbnail.webp'),
    video: 'assets/videos/treasure-search-demo.mp4',
    links: [],
  },
  {
    title: 'Humanoid Locomotion with RL',
    meta: 'MuJoCo Humanoid-v4, Aug–Dec 2024',
    description: 'A bipedal controller trained with Proximal Policy Optimization in a high-dimensional continuous-control environment. I tracked reward, entropy and value loss to diagnose convergence and reach a stable walking gait.',
    tags: ['PPO', 'MuJoCo', 'PyTorch'],
    thumbnail: img('humanoid-rl/humanoid.webp'),
    video: 'assets/videos/humanoid-walking.mp4',
    links: [],
  },
  {
    title: 'PatExpert and PEOA',
    meta: 'Tata Research Group, 2024',
    description: 'A multi-agent patent analysis system and the orchestration framework behind it, covering classification, summarization, claim generation and multi-patent analysis, with Graph-RAG retrieval and automated refinement.',
    tags: ['LLM agents', 'Graph-RAG', 'Llama 3.1', 'GPT-4o-mini'],
    thumbnail: img('tata-research/thumbnail.webp'),
    links: [],
  },
  {
    title: 'Permission-aware RAG Platform',
    meta: 'MagicLemp, 2025–2026',
    description: 'Streaming gRPC services for RAG and web-search agents over SharePoint content synced into Qdrant, with permission filtering and cited answers.',
    tags: ['Qdrant', 'gRPC', 'Celery', 'Redis', 'Docker'],
    thumbnail: img('magic-lemp/thumbnail.webp'),
    links: [],
  },
]
