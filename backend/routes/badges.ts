

const users = [
  { id: 1, name: "Zachary", badges: ["Starter", "Backend Dev"] },
];

export async function badgesHandler(req: Request): Promise<Response> {
  const url = new URL(req.url);


  if (req.method === "GET") {
    const id = parseInt(url.pathname.split("/").pop() || "");
    const user = users.find((u) => u.id === id);

    if (user) {
      return new Response(JSON.stringify({ badges: user.badges }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("User not found", { status: 404 });
  }


  if (req.method === "POST") {
    const body = await req.json();
    const { userId, badge } = body;

    const user = users.find((u) => u.id === userId);
    if (user && badge) {
      user.badges.push(badge);
      return new Response(JSON.stringify({ message: "Badge awarded!" }), {
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response("Bad request", { status: 400 });
  }

  return new Response("Method not allowed", { status: 405 });
}
