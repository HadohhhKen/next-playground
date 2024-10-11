export const dynamic = 'force-dynamic';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export async function GET(request: Request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      ...corsHeaders,
    },
  });
}

export async function OPTIONS(request: Request) {
  return new Response(null, {
    status: 204,
    headers: {
      ...corsHeaders,
    },
  });
}
