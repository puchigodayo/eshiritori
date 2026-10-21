export default {
  async fetch(request) {
    const cors = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    const url = new URL(request.url);

    if (url.pathname === "/") {
      return Response.json({
        status: "ok",
        message: "Radio notification server is running"
      }, { headers: cors });
    }

    if (url.pathname === "/notify" && request.method === "POST") {
      return Response.json({
        status: "received",
        message: "通知リクエストを受け取りました"
      }, { headers: cors });
    }

    return Response.json(
      { error: "Not found" },
      { status: 404, headers: cors }
    );
  }
};
