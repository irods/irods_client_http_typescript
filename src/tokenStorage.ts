import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const TOKEN_PATH = path.join(__dirname, 'token.json');
console.log(TOKEN_PATH)

interface TokenData {
    token: string;
    expiry: string; // ISO string format
}

export function saveToken(token: string): void {
    const expiry = new Date(Date.now() + 3600 * 1000).toISOString(); // 1 hour from now
    const tokenData: TokenData = { token, expiry };
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokenData, null, 2));
}

export function loadToken(): TokenData | null {
    try {
        if (fs.existsSync(TOKEN_PATH)) {
            const tokenData = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8')) as TokenData;
            return tokenData;
        }
    } catch (error) {
        console.error('Failed to load token:', error);
    }
    return null;
}

export function clearToken(): void {
    try {
        if (fs.existsSync(TOKEN_PATH)) {
            fs.unlinkSync(TOKEN_PATH);
        }
    } catch (error) {
        console.error('Failed to clear token:', error);
    }
}
