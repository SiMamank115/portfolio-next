import { NextRequest, NextResponse, userAgent } from "next/server";
const PUBLIC_FILE = /\.(.*)$/;
export function middleware(request = new NextRequest()) {
    if (request.nextUrl.pathname.startsWith("/_next") || request.nextUrl.pathname.includes("/api/") || PUBLIC_FILE.test(request.nextUrl.pathname)) {
        return;
    }
    const { device } = userAgent(request);
    const viewport = device.type === "mobile" ? "mobile" : "desktop";
    request.nextUrl.searchParams.set("viewport", viewport);
    return NextResponse.rewrite(request.nextUrl);
}
