const service = {
    appID: process.env.APP_ID,
    appKey: process.env.APP_KEY,
}

export async function getDepartures() {
    const resp = await fetch(`https://transportapi.com/v3/uk/train/station/FPK/live.json?app_id=${service.appID}&app_key=${service.appKey}&darwin=false&train_status=passenger`);
    const data = await resp.json();
    const departures = data.departures.all;

    return departures;
}
