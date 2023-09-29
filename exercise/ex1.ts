// return request method and url

async function handler(req: Request) {
  const method = req.method;
  const url = req.url;

  const result = `${method} ${url}`;
  const urlObj = new URL(url);
  const pathname = urlObj.pathname;
  console.log(`${method} ${pathname}`);
  return new Response(result);
}

Deno.serve({ port: 9000 }, handler);
