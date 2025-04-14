
export default {
  fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return Response.json({
        title: "Hello from Munch & Lunch",
      });
    }

    return new Response(null, { status: 404 });
  },
} 