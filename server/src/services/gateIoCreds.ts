const GateApi = require('gate-api');

const client = new GateApi.ApiClient();

export const gateIOapi = new GateApi.SpotApi(client);

export const loadGateIoCreds = () => {
        const GATEIO_API = process.env.GATEIO_API
        const GATEIO_SECRET = process.env.GATEIO_SECRET

    // return Configuration(key=GATEIO_API, secret=GATEIO_SECRET)
}
