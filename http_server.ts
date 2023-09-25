const handler = async (_request: Request): Promise<Response> => {
  const resp = await fetch("https://api.github.com/users/Jisan-mia", {
    // The init object here has a headers object containing a
    // header that indicates what type of response we accept.
    // We're not specifying the method field since by default
    // fetch makes a GET request.
    headers: {
      accept: "application/json",
    },
  });

  return new Response(resp.body, {
    status: resp.status,
    headers: {
      "content-type": "application/json",
    },
  });
};

Deno.serve(handler);
