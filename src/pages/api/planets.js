export const prerender = false; // Run dynamically on Vercel server

export async function POST({ request }) {
  try {
    const payload = await request.json();
    
    // Read the secret key from Astro's server environment variables
    const apiKey = import.meta.env.FREE_ASTRO_API_KEY || process.env.FREE_ASTRO_API_KEY;
    
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "API Key not configured on the server." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    // Translate incoming client keys into the format expected by FreeAstroAPI
    const formattedPayload = {
      year: payload.year || 1990,
      month: payload.month || 11,
      date: payload.day || 22,
      hours: payload.hour !== undefined ? payload.hour : 12,
      minutes: payload.min !== undefined ? payload.min : 0,
      seconds: 0,
      latitude: payload.lat || 40.7128,
      longitude: payload.lon || -74.0060,
      timezone: payload.tzone || -5,
      settings: {
        observation_point: "topocentric",
        ayanamsha: "lahiri"
      }
    };

    const apiResponse = await fetch("https://json.freeastrologyapi.com/western/planets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey
      },
      body: JSON.stringify(formattedPayload)
    });

    if (!apiResponse.ok) {
      const errorText = await apiResponse.text();
      return new Response(
        JSON.stringify({ error: `FreeAstroAPI returned an error: ${errorText}` }),
        { status: apiResponse.status, headers: { "Content-Type": "application/json" } }
      );
    }

    const data = await apiResponse.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
