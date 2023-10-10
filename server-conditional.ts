async function handler(req: Request) {
  const url = new URL(req.url);

  if (url.pathname === "/foo") {
    return new Response("fooo 😸");
  } else {
    return new Response("Not found 💣");
  }
}

Deno.serve(handler);
