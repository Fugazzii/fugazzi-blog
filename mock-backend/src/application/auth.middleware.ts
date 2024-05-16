import { NextFunction, Request, Response } from "express";
import { ConfigParams, auth } from "express-openid-connect";

const config: ConfigParams = {
    authRequired: false,
    auth0Logout: true,
    secret: "3bc6f8bd71f7bd67870c96c97163c438134f17b58e2d66354a1bfe79b38ac972",
    baseURL: "http://localhost:8888",
    clientID: "VihID3upBOkQIpuNqmWqmpTfjRwYSyB8",
    issuerBaseURL: "https://dev-6bi988f9.us.auth0.com",
    idpLogout: true
};

export const authMiddleware = auth(config);

export const verifyAuth = (req: Request, res: Response, next: NextFunction) => {
    if (req.oidc.isAuthenticated() && req.oidc.user.email === "sichinavailia@gmail.com") {
        return next();
    } else {
        return res.status(401).send("Unauthorized");
    }
}