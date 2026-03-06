import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ALLOWED_SERVICES = [
  "Meta & Social Ads",
  "Google Ads",
  "Tag Manager Setup",
  "Tracking & Attribution",
  "Strategy",
  "Creative Direction",
  "Consulting & Training",
];

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const NOTION_API_KEY = Deno.env.get("NOTION_API_KEY");
    if (!NOTION_API_KEY) throw new Error("NOTION_API_KEY is not configured");

    const NOTION_DATABASE_ID = Deno.env.get("NOTION_DATABASE_ID");
    if (!NOTION_DATABASE_ID) throw new Error("NOTION_DATABASE_ID is not configured");

    const { name, email, service, message } = await req.json();

    // Input validation
    if (!name || typeof name !== "string" || name.trim().length === 0 || name.length > 200) {
      return new Response(JSON.stringify({ success: false, error: "Invalid name" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!email || typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) || email.length > 320) {
      return new Response(JSON.stringify({ success: false, error: "Invalid email" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!service || !ALLOWED_SERVICES.includes(service)) {
      return new Response(JSON.stringify({ success: false, error: "Invalid service" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!message || typeof message !== "string" || message.trim().length === 0 || message.length > 5000) {
      return new Response(JSON.stringify({ success: false, error: "Invalid message" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_API_KEY}`,
        "Content-Type": "application/json",
        "Notion-Version": "2022-06-28",
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DATABASE_ID },
        properties: {
          Name: { title: [{ text: { content: name.trim() } }] },
          Email: { email: email.trim() },
          Service: { select: { name: service } },
          Message: { rich_text: [{ text: { content: message.trim() } }] },
          Status: { status: { name: "Not started" } },
        },
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Notion API error:", JSON.stringify(data));
      throw new Error(`Notion API error [${response.status}]`);
    }

    return new Response(JSON.stringify({ success: true, id: data.id }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error syncing to Notion:", error);
    return new Response(JSON.stringify({ success: false, error: "Internal server error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
