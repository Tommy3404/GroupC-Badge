import { serve } from "https://deno.land/std@0.200.0/http/server.ts";
import { usersHandler } from "./routes/users.ts";
import { badgesHandler } from "./routes/badges.ts";

console.log("✅ Zachary's backend running on http://localhost:8000");

serve((req: Request) => {
  const url = new URL(req.url);

  if (url.pathname.startsWith("/api/users")) {
    return usersHandler(req);
  }

  if (url.pathname.startsWith("/api/badges")) {
    return badgesHandler(req);
  }

  return new Response("404 Not Found", { status: 404 });
});
