export async function GET() {
    const boturl = process.env.BOT_URL;
    const render_api_key = process.env.RENDER_API_KEY;
    const web_service_id = process.env.WEB_SERVICE_ID;
    const endpoint = process.env.ENDPOINT;

    const full_url = `${boturl}${endpoint}`;

    const check_bot_status = await fetch(full_url, {
        method: 'GET',
        cache: "no-store",
    });

    if (check_bot_status.status === 200) {
        return Response.json({ msg: "Bot is online" });
    }

    const render_restart = await fetch(
        `https://api.render.com/v1/services/${web_service_id}/deploys`,
        {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${render_api_key}`,
                'Content-Type': 'application/json',
            },
        }
    );

    return Response.json({
        msg: "Bot is offline, restarting...",
        status: render_restart.status,
    });
}
