export const projects = [
  {
    id: "treasure-search",
    number: "01",

    title: "Autonomous Treasure Search",
    video: "assets/images/projects/treasure-search/navigation.mp4",
    links: [
      {
        label: "View on GitHub",
        url: "https://github.com/Seetrax/Autonomous-Rover-Treasure-Search",
      },
    ],

    subtitle:
      "Multi-sensor mobile manipulation",

    period: "Aug 2025 — Dec 2025",

    description:
      "An autonomous mobile manipulator that combines learned perception, vehicle control, and robotic manipulation to locate and retrieve hidden targets in simulation.",

    problem:
      "The robot had to estimate the location of a target from noisy sensor measurements while coordinating navigation and manipulation.",

    approach:
      "Built a ROS2 and CoppeliaSim perception-and-control pipeline integrating a metal detector, Ackermann-steered vehicle, and 4-DOF robotic arm. Trained an MLP for distance estimation and CNN-based imitation-learning controllers for steering and arm positioning.",

    result:
      "The complete system performed autonomous target localization and retrieval, with the learned localization model achieving 0.59 MSE.",

    technologies: [
      "ROS2",
      "CoppeliaSim",
      "PyTorch",
      "CNN",
      "MLP",
      "Imitation Learning",
      "Robotics",
    ],

    image:
      "/assets/images/projects/treasure-search/thumbnail.webp",
  },

  {
    id: "humanoid-rl",
    number: "02",

    title: "Humanoid Locomotion",

    subtitle:
      "Reinforcement learning for continuous control",

    period: "Aug 2024 — Dec 2024",

    description:
      "A reinforcement-learning experiment exploring how a high-dimensional humanoid can learn balance and locomotion through interaction with a physics simulator.",

    problem:
      "Humanoid locomotion requires coordinating many continuous joints while maintaining balance and discovering a stable gait.",

    approach:
      "Trained a locomotion policy in MuJoCo Humanoid-v4 using Proximal Policy Optimization and analyzed reward, entropy, and value-loss metrics during training.",

    result:
      "The learned policy developed stable walking behavior while providing a practical study of PPO convergence and stability in continuous-control environments.",

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

  {
    id: "pacman-ai",
    number: "03",

    title: "Pacman AI",
    links: [
      {
        label: "View on GitHub",
        url: "https://github.com/Seetrax/Pacman",
      },
    ],

    subtitle:
      "Search, adversarial reasoning and reinforcement learning",

    period: "May 2023 — Jul 2023",

    description:
      "A series of AI implementations built around the UC Berkeley Pacman environment, covering classical search, adversarial decision-making, Markov decision processes, and reinforcement learning.",

    problem:
      "Different Pacman tasks require fundamentally different decision-making strategies, ranging from deterministic pathfinding to adversarial planning and learning from interaction.",

    approach:
      "Implemented BFS, DFS, and A* with different heuristics; built adversarial agents using Minimax, Alpha-Beta pruning, and Expectiminimax; and implemented Value Iteration, Policy Iteration, and Q-learning.",

    result:
      "Applied the same reinforcement-learning ideas beyond Pacman by training a simulated crawler robot to learn locomotion behavior.",

    technologies: [
      "Python",
      "A*",
      "Minimax",
      "Alpha-Beta",
      "MDPs",
      "Q-Learning",
    ],

    image:
      "/assets/images/projects/pacman-ai/thumbnail.webp",
  },

  {
    id: "interpretable-ai",
    number: "04",

    title: "Interpretable AI Models",

    subtitle:
      "Privacy and explainability in machine learning",

    period: "Dec 2023 — Mar 2024",

    description:
      "Experiments exploring two different questions around trustworthy machine learning: protecting training data and understanding what learned models rely on.",

    problem:
      "Machine-learning models can expose sensitive information during training while also behaving as black boxes whose decisions are difficult to interpret.",

    approach:
      "Implemented differentially private logistic regression by injecting gamma-distributed noise into gradient updates. Separately trained a CNN image classifier and analyzed it using Shapley values and Testing with Concept Activation Vectors.",

    result:
      "The project provided hands-on implementations of both privacy-preserving learning and feature- and concept-level model interpretation.",

    technologies: [
      "Python",
      "CNN",
      "Differential Privacy",
      "Shapley Values",
      "TCAV",
      "Machine Learning",
    ],

    image:
      "/assets/images/projects/interpretable-ai/thumbnail.webp",
  },

  {
    id: "quora-db",
    number: "05",

    title: "Quora 2.0",

    subtitle:
      "Relational database system",

    period: "Dec 2023 — Mar 2024",

    description:
      "A PostgreSQL-backed Q&A platform modeled around interactions found in systems such as Quora and StackExchange.",

    problem:
      "The database needed to represent interconnected users, questions, answers, votes, and comments while maintaining consistency as those entities changed.",

    approach:
      "Designed normalized relational schemas using the StackExchange dataset and implemented PostgreSQL triggers, functions, and constraints for operations such as posting, voting, and commenting.",

    result:
      "Built a relational data model that automated integrity checks and application-side database behavior through PostgreSQL itself.",

    technologies: [
      "PostgreSQL",
      "SQL",
      "Database Design",
      "Triggers",
      "Functions",
      "Constraints",
    ],

    image:
      "/assets/images/projects/quora-db/thumbnail.webp",
  },

  {
    id: "search-visualizer",
    number: "06",

    title: "AI Search Visualizer",

    subtitle:
      "Interactive search and constraint-solving demonstrations",

    description:
      "A collection of small interactive visualizations built to make classical AI search behavior easier to understand.",

    problem:
      "Search algorithms are straightforward to describe mathematically but their exploration behavior can be difficult to intuit from pseudocode alone.",

    approach:
      "Built a randomized maze generator and solver together with an interactive 8-Queens solver, visualizing how search and constraint-solving methods explore possible states.",

    result:
      "Turned otherwise abstract search procedures into visual demonstrations where the progression of the algorithm can be observed directly.",

    technologies: [
      "Search Algorithms",
      "Constraint Satisfaction",
      "Algorithm Visualization",
    ],

    image:
      "/assets/images/projects/search-visualizer/thumbnail.webp",
  },
];
