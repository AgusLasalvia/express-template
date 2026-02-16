import jwt from "jsonwebtoken";
import { JWT } from "../config/env.config";

const JWT_EXPIRES_IN = "7d";

export function signToken(userId: string) {
    return jwt.sign(
        { sub: userId.toString() },
        JWT.SECRET as string,
        { expiresIn: JWT_EXPIRES_IN }
    );
}

export function verifyToken(token: string) {
    return jwt.verify(token, JWT.SECRET as string) as { sub: string };
}