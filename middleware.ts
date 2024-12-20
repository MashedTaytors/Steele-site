import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const themeCookie = request.cookies.get('theme')?.value;

  // Check system preference if no cookie exists
  const prefersDark = request.headers.get('sec-ch-prefers-color-scheme') === 'dark';

  // Determine theme: cookie takes precedence, fallback to system preference
  const theme = themeCookie || (prefersDark ? 'dark' : 'light');

  // Set the cookie if it doesn't exist
  const response = NextResponse.next();
  if (!themeCookie) {
    response.cookies.set('theme', theme, {
      path: '/',
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
    });
  }
}

export const config = {
  matcher: '/:path*', // Apply middleware to all routes
};
