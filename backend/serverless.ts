//import auth from "@functions/auth";
import { GetPreviews, DeleteArticle, GetArticleById, PostArticle, Ping } from "@functions/index";

const serverlessConfiguration = {
    service: "backend",
    frameworkVersion: "3",
    plugins: ["serverless-esbuild", "serverless-certificate-creator"], //"serverless-plugin-log-retention"
    provider: {
        name: "aws",
        runtime: "nodejs20.x",
        httpApi: {
            cors: true
        },
        apiGateway: {
            minimumCompressionSize: 1024,
            shouldStartNameWithService: true
        },
        environment: {
            AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
            NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000"
        },
        logRetentionInDays: 14
    },
    // import the function via paths
    functions: {
        GetPreviews,
        GetArticleById,
        PostArticle,
        DeleteArticle,
        Ping
    },
    package: { individually: true },
    custom: {
        esbuild: {
            bundle: true,
            minify: false,
            sourcemap: true,
            exclude: ["aws-sdk"],
            target: "node20",
            define: { "require.resolve": undefined },
            platform: "node", 
            concurrency: 10
        }
    }
};

module.exports = serverlessConfiguration;
