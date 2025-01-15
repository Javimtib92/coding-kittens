import type { APIContext } from 'astro';

export const prerender = false;

export async function GET({ request, locals }: APIContext) {
    try {
        const url = new URL(request.url);
        const slug = url.searchParams.get('slug');

        if (!slug) {
            return new Response(JSON.stringify({ 
                error: 'Slug parameter is required' 
            }), { 
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const d1 = locals.runtime.env.DB;

        // Simply get the current view count
        const result = await d1.prepare(
            `SELECT views 
             FROM page_views 
             WHERE slug = ?`
        ).bind(slug).first() as { views: number } | null;

        return new Response(JSON.stringify({
            success: true,
            slug,
            views: result?.views ?? 0
        }), {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store, max-age=0'
            }
        });
    } catch (error) {
        console.error('View counter error:', error);
        return new Response(JSON.stringify({
            error: 'Failed to fetch view count',
            details: error instanceof Error ? error.message : 'Unknown error'
        }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}