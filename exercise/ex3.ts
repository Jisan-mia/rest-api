//  Respond to each request with a single HTML
// file (Create a simple HTML file and put it
//  in the same folder as your server.js file)

async function handler(req: Request) {
  const file = await Deno.open("./ex3.html");
  const fileStream = file.readable;

  const headers = new Headers();
  headers.set("content-type", "text/html");

  return new Response(fileStream, { headers });
}

Deno.serve({ port: 9000 }, handler);
