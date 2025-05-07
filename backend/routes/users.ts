export function usersHandler(req: Request): Response {
  const users = [{
    id: 1,
    name: "Zachary",
    badges: ["Starter", "Backend Dev"],
  }];

  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
}
