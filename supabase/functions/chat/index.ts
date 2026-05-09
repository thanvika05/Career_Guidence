import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { messages, userContext } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const systemPrompt = `You are CareerGuide AI, an intelligent career advisor for Indian students from 12th grade to Engineering (UG level).

You provide personalized guidance on:
- College recommendations based on cutoff marks, location, and interests
- Career path suggestions with salary ranges and growth potential
- Skill development roadmaps
- Internship and job preparation
- Entrance exam guidance (JEE, TNEA, GATE, GRE, etc.)
- Scholarship information
- Resume tips and interview preparation
- Domain guidance (AI, Web Dev, Data Science, etc.)

${userContext ? `Student Profile:
- Name: ${userContext.name || 'Not provided'}
- Type: ${userContext.userType === '12th_student' ? '12th Grade Student' : 'UG Engineering Student'}
- State: ${userContext.state || 'Not provided'}
- Cutoff Marks: ${userContext.cutoffMarks || 'Not provided'}
- CGPA: ${userContext.cgpa || 'Not provided'}
- Interests: ${userContext.interests?.join(', ') || 'Not provided'}
- Skills: ${userContext.skills?.join(', ') || 'Not provided'}
- Career Goal: ${userContext.careerGoal || 'Not provided'}` : ''}

Keep responses helpful, encouraging, and specific to the Indian education system. Use markdown formatting. Be concise but thorough.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI credits exhausted. Please add funds." }), {
          status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }), {
      status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
