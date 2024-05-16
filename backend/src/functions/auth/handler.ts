import { verify } from "jsonwebtoken";

const generatePolicy = (principalId: string, methodArn: string) => {
    const [arn, region, account, ...rest] = methodArn.split(":");
    const [service, ...resource] = rest.join(":").split("/");
    
    return {
        principalId,
        policyDocument: {
            Version: "2012-10-17",
            Statement: [
                {
                    Action: "execute-api:Invoke",
                    Effect: "Allow",
                    Resource: `${arn}:${region}:${account}:${service}/${resource.join("/")}`,
                }
            ]
        }
    };
}

async function auth(event: any, _context: any) {
    if (!event.authorizationToken) {
        throw "Unauthorized";
    }
  
    const [, token] = event.authorizationToken.split(" ");
  
    try {
        const claims = verify(token, process.env.AUTH0_PUBLIC_KEY) as { sub: string };
        const policy = generatePolicy(claims.sub, event.methodArn);
    
        return {
            ...policy,
            context: claims
        };
    } catch (error) {
        throw "Unauthorized";
    }
}
  
export default auth;