// respond to each request with json containing the url and method

async function handler(req: Request) {
  const method = req.method;
  const url = req.url;
  const result = {
    url,
    method,
  };
  const jsonHeader = new Headers();
  jsonHeader.append("content-type", "application/json");
  return new Response(JSON.stringify(result), { headers: jsonHeader });
}

Deno.serve({ port: 9000 }, handler);
