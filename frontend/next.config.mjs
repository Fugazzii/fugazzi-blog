/** @type {import("next").NextConfig} */
const nextConfig = {
    env: {
        LOCAL_SERVER_URL: "http://localhost:8888",
        SERVER_URL: "https://tzvvg9qim8.execute-api.us-east-1.amazonaws.com/dev",
        AUTH0_SECRET: "561684a245ac72e7b18f4ab9b0f08323eb11e3a0efbbea641875781470189ca6",
        AUTH0_BASE_URL: "http://localhost:3000",
        AUTH0_ISSUER_BASE_URL: "https://dev-6bi988f9.us.auth0.com",
        AUTH0_CLIENT_ID: "VihID3upBOkQIpuNqmWqmpTfjRwYSyB8",
        AUTH0_CLIENT_SECRET: "bdcxh-1Y1Yzk0orhmb7C8hYEOjAjSy2qIq1T77HS6GYUI1xteemMM7KKdA7DXJnw"
    }
};

export default nextConfig;
