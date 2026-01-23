export const portfolioData = {
  personal: {
    name: "AGUSTÍN GARCÍA NAVAS",
    email: "agusgarcia569@gmail.com",
    phone: "1163005095",
    location: "Argentina, CABA",
    linkedin: "www.linkedin.com/in/agustin-matias-garcia/",
    github: "https://github.com/Agusmat22",
    profileImage: "figma:asset/0ddd0938ea253c1d07b7304f0ef6aa982b3e5fa5.png"
  },

  experience: [
    {
      company: "GRUPO ROISA – Doctored",
      location: "Buenos Aires",
      highlightKeys: [
        "exp.highlight1",
        "exp.highlight2",
        "exp.highlight3",
        "exp.highlight4",
        "exp.highlight5",
        "exp.highlight6"
      ]
    }
  ],

  skills: {
    development: {
      categoryKey: "skills.cat.development",
      items: [
        { name: ".NET 8 (C#)", icon: "SiDotnet", levelKey: "skills.level.expert" },
        { name: "Next.js", icon: "SiNextdotjs", levelKey: "skills.level.expert" },
        { name: "TypeScript", icon: "SiTypescript", levelKey: "skills.level.expert" },
        { name: "Python", icon: "SiPython", levelKey: "skills.level.advanced" },
        { name: "PHP", icon: "SiPhp", levelKey: "skills.level.intermediate" },
        { name: "SQL", icon: "SiMysql", levelKey: "skills.level.expert" },
        { name: "JavaScript", icon: "SiJavascript", levelKey: "skills.level.expert" }
      ]
    },
    cloudDevops: {
      categoryKey: "skills.cat.cloudDevops",
      items: [
        { name: "AWS", icon: "SiAws", levelKey: "skills.level.expert" },
        { name: "Docker", icon: "SiDocker", levelKey: "skills.level.expert" },
        { name: "GitHub Actions", icon: "SiGithubactions", levelKey: "skills.level.advanced" },
        { name: "Linux", icon: "SiLinux", levelKey: "skills.level.advanced" }
      ]
    },
    ai: {
      categoryKey: "skills.cat.ai",
      items: [
        { name: "LangGraph", icon: "SiPython", levelKey: "skills.level.expert" },
        { name: "LangChain", icon: "SiPython", levelKey: "skills.level.expert" },
        { name: "MCP", icon: "SiOpenai", levelKey: "skills.level.advanced" },
        { name: "N8N", icon: "SiN8n", levelKey: "skills.level.advanced" }
      ]
    },
    databases: {
      categoryKey: "skills.cat.databases",
      items: [
        { name: "SQL Server", icon: "SiMicrosoftsqlserver", levelKey: "skills.level.expert" },
        { name: "PostgreSQL", icon: "SiPostgresql", levelKey: "skills.level.advanced" },
        { name: "MySQL", icon: "SiMysql", levelKey: "skills.level.advanced" },
        { name: "MongoDB", icon: "SiMongodb", levelKey: "skills.level.intermediate" },
        { name: "Prisma ORM", icon: "SiPrisma", levelKey: "skills.level.advanced" }
      ]
    },
    orm: {
      categoryKey: "skills.cat.orm",
      items: [
        { name: "Entity Framework", icon: "SiDotnet", levelKey: "skills.level.expert" }
      ]
    },
    architecture: {
      categoryKey: "skills.cat.architecture",
      items: [
        { name: "SOLID", icon: "SiArchlinux", levelKey: "skills.level.expert" },
        { name: "Clean Code", icon: "SiArchlinux", levelKey: "skills.level.expert" },
        { name: "REST APIs", icon: "SiSwagger", levelKey: "skills.level.expert" },
        { name: "Microservices", icon: "SiMicroservices", levelKey: "skills.level.advanced" },
        { name: "Hangfire", icon: "SiDotnet", levelKey: "skills.level.advanced" },
        { name: "JWT", icon: "SiJsonwebtokens", levelKey: "skills.level.expert" },
        { name: "RBAC", icon: "SiAuth0", levelKey: "skills.level.expert" }
      ]
    }
  },

  projects: [
    { titleKey: "project1.title", descKey: "project1.desc", stack: [".NET 8", "C#", "SQL Server"], tags: ["ETL", "Healthcare", "Data Processing"] },
    { titleKey: "project2.title", descKey: "project2.desc", stack: ["Next.js", "Prisma", ".NET 8", "C#", "SQL Server"], tags: ["Full-stack", "Enterprise", "Forms"] },
    { titleKey: "project3.title", descKey: "project3.desc", stack: ["N8N", "AI", "Automation"], tags: ["AI", "Chatbot", "Automation"] }
  ],

  education: [
    {
      institution: "UTN Avellaneda",
      degreeKey: "education.degree1",
      periodKey: "education.period1",
      status: "In Progress"
    },
    {
      institution: "Asociación Argentina de Cultura Inglesa (AACI)",
      degreeKey: "education.degree2",
      periodKey: "education.period2",
      status: "In Progress"
    }
  ],

  languages: [
    { nameKey: "languages.spanish", levelKey: "languages.level.native" },
    { nameKey: "languages.english", levelKey: "languages.level.b1" }
  ]
};
