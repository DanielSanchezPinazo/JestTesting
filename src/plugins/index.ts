
// const { getId } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { httpClientPlugin } = require('../plugins/http-client.plugin');
// const buildLogger = require('../plugins/logger.plugin');

import { getId } from "../plugins/get-id.plugin";
import { getAge } from "../plugins/get-age.plugin";
import { httpClientPlugin as httpClient } from "../plugins/http-client.plugin";
import { buildLogger } from "../plugins/logger.plugin";

// module.exports = {
//     getId,
//     getAge,
//     httpClientPlugin,
//     buildLogger,
// }

export { getId, getAge, httpClient, buildLogger };