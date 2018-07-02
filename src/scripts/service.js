export const service = {
    appID: '2a373638',
    appKey: 'ccc63563f288d782d0b4152a01f7d10c'
}

export async function getDepartures() {
    const resp = await fetch(`https://transportapi.com/v3/uk/train/station/FPK/live.json?app_id=${service.appID}&app_key=${service.appKey}&darwin=false&train_status=passenger`);
    const data = await resp.json();
    const departures = data.departures.all;

    return departures;
}