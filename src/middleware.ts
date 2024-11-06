import { NextRequest, NextResponse } from 'next/server';
import { handleLocalization } from '@/middlewares/localization';

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js|site.webmanifest).*)']
}

export async function middleware(req: NextRequest) {
    const localizationResponse = handleLocalization(req);
    if (localizationResponse) return localizationResponse;
  
    return NextResponse.next();
}
