module.exports = {
    target: 'serverless',
    future: {
        webpack5: true,
    },
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false;
        }
        return config;
    },
    env: {
        spark: {
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
        }
    }
}