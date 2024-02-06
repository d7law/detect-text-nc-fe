import { NextRequest } from "next/server";
import { NextResponse as res } from "next/server";

export const config = {
  matcher: ["/api"],
};

export default async function middleware(req: NextRequest) {
  const pathName = req.nextUrl.pathname;

  if (pathName.startsWith("/api")) {
    const url = `${process.env.DETECT_TEXT_API}${pathName}`;
    return res.rewrite(url);
  }

  return res.next();
}
