import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Redirect /en/... → /...
  if (pathname.startsWith('/en/') || pathname === '/en') {
    const newPath = pathname.replace(/^\/en/, '') || '/';
    return NextResponse.redirect(new URL(newPath, request.url), 308);
  }

  // Rewrite non-localized paths (not /es/...) → /en/...
  if (!pathname.startsWith('/es/') && pathname !== '/es') {
    return NextResponse.rewrite(new URL(`/en${pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|api|.*\\.[a-zA-Z0-9]{2,20}$).*)'],
};
