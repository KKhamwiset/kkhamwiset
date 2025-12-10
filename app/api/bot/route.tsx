let lastDownTime = 0;

export async function GET() {
    
    const boturl = process.env.BOT_URL;
    const endpoint = process.env.ENDPOINT;
    const render_api_key = process.env.RENDER_API_KEY;
    const web_service_id = process.env.RENDER_WEB_SERVICE_ID;
    const full_url = `${boturl}${endpoint}`;

    const check_bot_status = await fetch(full_url, { method: 'GET', cache: "no-store" });

    if (check_bot_status.status === 200) {
        lastDownTime = 0;
        return Response.json({ msg: "Bot is online" });
    }

    const now = Date.now();

    if (lastDownTime === 0) {
        lastDownTime = now;
        return Response.json({ msg: "Bot might be offline, waiting..." });
    }

    if (now - lastDownTime < 70000) {
        return Response.json({ msg: "Waiting to confirm bot offline..." });
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

    lastDownTime = 0;

    return Response.json({
        msg: "Bot offline for > 1 min, restarting...",
        status: render_restart.status,
    });
}
