import * as crypto from 'crypto';

const secret = 'material-pro';
const hash = crypto.createHmac('sha256', secret);

export function hashSign(code: string): string {
  return hash.update(code.trim()).digest('hex');
}

export function compareHashSign(source: string, target: string): boolean {
  return hashSign(source) === target;
}
