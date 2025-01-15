import type { APIContext } from 'astro';

export const prerender = false;

export async function POST({ request, locals }: APIContext) {
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

        // Update existing record
        const updateResult = await d1.prepare(
            `UPDATE page_views 
             SET views = views + 1 
             WHERE slug = ?`
        ).run(slug);

        if (updateResult.changes === 0) {
            return new Response(JSON.stringify({
                error: 'Page not found',
                slug
            }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        return new Response(JSON.stringify({
            success: true,
            slug
        }), {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        console.error('View counter increment error:', error);
        return new Response(JSON.stringify({
            error: 'Failed to increment view count',
            details: error instanceof Error ? error.message : 'Unknown error'
        }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}