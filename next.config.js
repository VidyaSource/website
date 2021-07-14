const withPWA = require('next-pwa')

module.exports = withPWA({
    target: 'serverless',
    pwa: {
        dest: 'public',
        disable: process.env.NODE_ENV === 'development'
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
    env: {
        basePath: "https://www.vidyasource.com",
        spark: {
            name: "Software Engineering with Apache Spark",
            blurb: "Combine the power of Apache Spark with the quality from agile software engineering to transform your user data into business intelligence to take your organization to the next level.",
            description1: "Apache Spark is great for organizations who want their analytics\n" +
                "                            developed fast and executed fast. The problem is that large-scale distributed computing is\n" +
                "                            always hard. It’s not like you can set a breakpoint on code running on multiple machines\n" +
                "                            when\n" +
                "                            things go wrong. Monitoring your analytics jobs and optimizing accordingly are important.\n" +
                "                            You\n" +
                "                            also have to rethink the way you approach concepts like architecture, security, and software\n" +
                "                            engineering techniques like testing and DevSecOps.",
            description2: " teaches\n" +
                "                            you how to leverage just enough Scala to integrate\n" +
                "                            powerful data pipelines into your existing monolithic, microservices, and/or serverless\n" +
                "                            architecture.\n" +
                "                            You will also learn how your pipelines can benefit from the same testing, continuous\n" +
                "                            integration,\n" +
                "                            containerization with Docker, container orchestration with Kubernetes, and security\n" +
                "                            hardening\n" +
                "                            as the others components of your enterprise.",
            syllabus: {
                "Session 1: Mastering the Spark API": [
                    "MapReduce: The Phantom Menace",
                    "Advantages of Spark",
                    "Just Enough Scala",
                    "Using the Spark Shell",
                    "Writing You Own Spark Jobs",
                    "The Spark Ecosystem"
                ],
                "Session 2: Professional Spark": [
                    "Just Enough Hadoop",
                    "Testing Your Spark Jobs",
                    "Optimizing Spark and When to Stop Trying",
                    "Spark on Docker",
                    "Deploying Spark to Kubernetes",
                    "Spark Security",
                    "Visualizing Your Spark Jobs"
                ],
            },
            quote: "I have built several Scala and Apache Spark applications currently in production,\n" +
                "                                    and I\n" +
                "                                    worked with the original Apache Spark team, AMPLab at UC Berkeley, on a research\n" +
                "                                    project\n" +
                "                                    for DARPA known as XDATA. Somehow I have helped enough developers around the world\n" +
                "                                    to\n" +
                "                                    earn Spark and Scala badges on Stack Overflow. I am passionate about Spark and look\n" +
                "                                    forward to helping you harness its power."
        },
        agile: {
            name: "Modern Agile",
            blurb: "We've all worked on projects that claim to be agile but are nothing more than the same old wasteful waterfall with daily standups. Move beyond Scrum and SAFe and learn how to be agile rather than merely do agile.",
            description1: "It's been two decades since the Agile Manifesto, and its impact on software development has been so profound that  \n" +
                "every project claims to be agile. There's a backlog. The whole team mumbles its way through pointless daily standups.\n" +
                "You even do Fist of Five votes of confidence after long Sprint Planning meetings, but they're pure theater\n" +
                "because your boss told you to keep bad news away from the client. In the end, you\n" +
                "know full well there is nothing agile about your project. Sound familiar?",
            description2: " teaches you how to move past performative ceremonies--to be agile not just do agile. You will learn that what matters \n" +
                "most of all is outcomes. How you get there day to day depends on your organizational culture, but you will\n" +
                "learn about the keys to delivering the highest quality software in the least amount of time spending the least amount of money: \n" +
                "communication, psychological safety, and relentless feedback about your product, your client, your technology, your \n" +
                "competitive landscape, and most importantly, yourselves.",
            syllabus: {
                "Session 1: Leadership, Communication, Trust, and Psychological Safety": [
                    "Simple Rules",
                    "A Helping Hand",
                    "Don't be Square",
                    "Guardrails",
                    "Decentralized Decisions",
                    "The Technological Maestro",
                    "Listening",
                    "Embracing Bad News",
                    "No judgment. No Blame"
                ],
                "Session 2: Relentless Feedback": [
                    "Smaller is Better",
                    "Mistake Driven Development",
                    "Building the Right Thing: The Minimum Viable Product",
                    "Context and Core",
                    "Building the Thing Right: Developing Fast",
                    "Emerging Architecture and Software Design",
                    "Eliminating Waste",
                    "Testing Fast, Testing Right",
                    "Deploying Fast with DevSecOps",
                    "DevSecOps",
                    "Mature Optimization",
                    "Resisting Ceremony"
                ],
                "Session 3: Metrics": [
                    "Measuring the Right Things",
                    "Giving Developers SPACE",
                    "Outcomes vs. Outputs",
                    "Architecture Maintainability",
                    "Code Maintainability",
                    "Infrastructure Maintainability",
                    "Testing and the Pitfalls of Code Coverage",
                    "Security, Performance, and Accessibility",
                    "Culture",
                    "Continuous Improvement"
                ],
            },
            quote: "I care as much about building software the right way as I do about software itself. It hasn't been easy, but I have helped commercial businesses\n" +
                "and the least agile organization of all, government, become more agile. I'm certified in agile, which is...OK, but I am also\n" +
                "a member of the Government Accountability Office Agile Expert Group and a regular contributor to numerous guides for making\n" +
                "the government agile. I also worked with the Executive Office of the President of the United States to revolutionize\n" +
                "federal government contracting to maximize value for American taxpayers through agile development and open source."
        },
        java: {
            name: "Java For Work",
            blurb: "Java is one of the the most popular programming languages in the world. With all the legacy Java applications that need to be maintained\n" +
                "and new ones created every day, mastery of Java will guarantee you will always be in demand. Take the first step now.",
            description1: "According to Oracle, almost 20 billion devices run Java around the world. Java was the first language for Android. Java runs \n" +
                "on microservices, serverless, machine learning pipelines, and so much of the critical infrastructure in modern applications.",
            description2: " builds on the foundation of low-level primitives like conditionals and loops\n" +
                "with a thorough treatment of object-oriented programming, functional and reactive programming, and software engineering best practices to enable \n" +
                "you to build sophisticated Java programs in the real world.",
            syllabus: {
                "Session 1: Introduction to Java": [
                    "History and fundamentals of the language",
                    "Control Structures",
                    "Collections",
                    "Generics",
                    "Coding conventions"
                ],
                "Session 2: Combining Object-Oriented and Functional Programming": [
                    "Domain Modeling vs. Behavior",
                    "Objects and Methods",
                    "Java Object Hierarchy",
                    "Inheritance, Polymorphism, and Composition",
                    "Functional Interfaces"
                ],
                "Session 3: Leveling Up with Java": [
                    "Temporal Types",
                    "Records",
                    "Immutable collections",
                    "Asynchronous Programming with CompletableFuture",
                    "Reactive Programming with Reactive Streams",
                    "Experimentation Using the REPL"
                ],
                "Session 4: Professional Java": [
                    "Testing",
                    "Error handling",
                    "Database Persistence",
                    "File Processing",
                    "Logging",
                    "Cloud-Native Java",
                    "Serverless",
                    "Architectural Patterns",
                    "Alternative Languages for the JVM"
                ]
            },
            quote: "I am self-taught in Java with many years of experience delivering large-scale solutions ranging from\n" +
                "microservices to web and mobile and Big Data applications for government and commercial clients.\n" +
                "I have multiple Java badges on Stack Overflow, and I was even a Sun Certified Java Programmer when that was still a thing\n" +
                "and when I thought certifications really meant something."
        },
        googleAnalytics: "G-SV6CZCPD3B"
    }
})