// import { authMiddleware } from "@clerk/nextjs";

// export default authMiddleware({
//   publicRoutes: ["/"],
// });

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
// };

// middleware.ts
import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
    publicRoutes: ["/"], // Add your public pages here
});

export const config = {
    matcher: ["/((?!_next|static|favicon.ico).*)"], // Protect all routes except Next.js internals
};
