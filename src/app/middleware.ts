import { NextResponse } from 'next/server';
import { get } from '@vercel/edge-config';
 
export const config = { matcher: '/welcome' };
 
export async function middleware() {
  const value = await get('middleblom');
  return NextResponse.json(value);
}