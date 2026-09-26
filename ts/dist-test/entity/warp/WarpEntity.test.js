"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WarpEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when WARP_VLESS_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('WARP_VLESS_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.WarpVlessSDK.test();
        const ent = testsdk.Warp();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.WARP_VLESS_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'warp.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "amneziaMode": { "a": true, "h": "Amnezia Mode", "n": "amneziaMode", "r": false, "sh": "Amnezia VPN mode configuration", "t": "`$STRING`", "key$": "amneziaMode", "index$": 0 }, "configs": { "a": true, "h": "Configs", "n": "configs", "r": false, "sh": "Array of configuration objects when multiple configs are returned", "t": "`$ARRAY`", "key$": "configs", "index$": 1 }, "content": { "a": true, "h": "Content", "n": "content", "r": false, "sh": "Base64 encoded WARP configuration content", "t": "`$STRING`", "key$": "content", "index$": 2 }, "deviceType": { "a": true, "h": "Device Type", "n": "deviceType", "r": false, "sh": "The type of device requesting the configuration", "t": "`$STRING`", "key$": "deviceType", "index$": 3 }, "errorCode": { "a": true, "h": "Error Code", "n": "errorCode", "r": false, "sh": "Error code if an error occurred", "t": "`$STRING`", "key$": "errorCode", "index$": 4 }, "message": { "a": true, "h": "Message", "n": "message", "r": false, "sh": "Human-readable message or error description", "t": "`$STRING`", "key$": "message", "index$": 5 }, "selectedDns": { "a": true, "h": "Selected Dns", "n": "selectedDns", "r": false, "sh": "DNS provider selection", "t": "`$STRING`", "key$": "selectedDns", "index$": 6 }, "selectedServices": { "a": true, "h": "Selected Services", "n": "selectedServices", "r": false, "sh": "List of selected services to include in the configuration", "t": "`$ARRAY`", "key$": "selectedServices", "index$": 7 }, "siteMode": { "a": true, "h": "Site Mode", "n": "siteMode", "r": false, "sh": "The site mode for the WARP configuration", "t": "`$STRING`", "key$": "siteMode", "index$": 8 } }, "name": "warp", "op": { "create": { "input": "data", "name": "create", "points": [{ "a": true, "co": { "id": "POST /api/warp", "source": "openapi3", "version": 2 }, "g": {}, "k": "http", "m": "POST", "o": "/api/warp", "q": {}, "r": {}, "s": [{ "lit": "api" }, { "lit": "warp" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [] }, "key$": "warp", "name__orig": "warp", "Name": "Warp", "name_": "warp", "name-": "warp", "NAME": "WARP", "index$": 0 }, { "active": true, "entity": "warp", "key$": "BasicWarpFlow", "kind": "basic", "name": "BasicWarpFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "warp_ref01" }, "m": {}, "o": "create", "s": [], "v": [], "index$": 0 }] }, 'Warp', { "POST /api/warp": { "protocol": "http", "operationId": "generateWarpConfig", "requestBody": { "required": true, "content": { "application/json": { "schema": { "type": "object", "properties": { "siteMode": { "type": "string", "description": "The site mode for the WARP configuration", "example": "awg2", "key$": "siteMode" }, "deviceType": { "type": "string", "description": "The type of device requesting the configuration", "example": "desktop", "key$": "deviceType" }, "amneziaMode": { "type": "string", "description": "Amnezia VPN mode configuration", "example": "warp_amnezia_awg2", "key$": "amneziaMode" }, "selectedDns": { "type": "string", "description": "DNS provider selection", "enum": ["cloudflare", "google", "quad9"], "example": "cloudflare", "key$": "selectedDns" }, "selectedServices": { "type": "array", "description": "List of selected services to include in the configuration", "items": { "type": "string" }, "example": ["service1", "service2"], "key$": "selectedServices" } }, "index$": 1 }, "examples": { "default": { "summary": "Default WARP configuration request", "value": { "siteMode": "awg2", "deviceType": "desktop", "amneziaMode": "warp_amnezia_awg2", "selectedDns": "cloudflare", "selectedServices": [] } }, "googleDns": { "summary": "WARP configuration with Google DNS", "value": { "siteMode": "awg2", "deviceType": "mobile", "amneziaMode": "warp_amnezia_awg2", "selectedDns": "google", "selectedServices": [] } } } }, "application/x-www-form-urlencoded": { "schema": { "type": "object", "properties": { "siteMode": { "type": "string" }, "deviceType": { "type": "string" }, "amneziaMode": { "type": "string" }, "selectedDns": { "type": "string" }, "selectedServices": { "type": "string" } } } } } }, "responses": { "200": { "description": "Successfully generated WARP configuration", "content": { "application/json": { "schema": { "type": "object", "properties": { "content": { "type": "string", "description": "Base64 encoded WARP configuration content", "example": "W0ludGVyZmFjZV0KUHJpdmF0ZUtleSA9IGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MTIK", "key$": "content" }, "configs": { "type": "array", "description": "Array of configuration objects when multiple configs are returned", "items": { "type": "object", "properties": { "content": { "type": "string", "description": "Base64 encoded configuration content" }, "name": { "type": "string", "description": "Configuration name or identifier" } } }, "key$": "configs" }, "errorCode": { "type": "string", "description": "Error code if an error occurred", "key$": "errorCode" }, "message": { "type": "string", "description": "Human-readable message or error description", "key$": "message" } }, "index$": 0 }, "examples": { "success": { "summary": "Successful configuration generation", "value": { "content": "W0ludGVyZmFjZV0KUHJpdmF0ZUtleSA9IGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MTIK", "message": "Configuration generated successfully" } }, "multipleConfigs": { "summary": "Multiple configurations returned", "value": { "configs": [{ "content": "W0ludGVyZmFjZV0KUHJpdmF0ZUtleSA9IGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MTIK", "name": "config1" }, { "content": "W0ludGVyZmFjZV0KUHJpdmF0ZUtleSA9IHp5eHd2dXRzcnFwb25tbGtqaWhnZmVkY2JhMTIK", "name": "config2" }] } } } } } }, "400": { "description": "Bad request - Invalid parameters provided", "content": { "application/json": { "schema": { "type": "object", "properties": { "errorCode": { "type": "string", "example": "INVALID_PARAMETERS" }, "message": { "type": "string", "example": "Invalid DNS provider specified" }, "suggestions": { "type": "array", "items": { "type": "string" }, "example": ["Use 'cloudflare', 'google', or 'quad9' as DNS provider"] } } } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "errorCode": { "type": "string", "example": "INTERNAL_ERROR" }, "message": { "type": "string", "example": "Failed to generate configuration" } } } } } }, "503": { "description": "Service unavailable", "content": { "application/json": { "schema": { "type": "object", "properties": { "errorCode": { "type": "string", "example": "SERVICE_UNAVAILABLE" }, "message": { "type": "string", "example": "WARP generation service is currently unavailable" } } } } } } }, "parameters": [], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const warp_ref01_ent = client.Warp();
        let warp_ref01_data = setup.data.new.warp['warp_ref01'];
        warp_ref01_data = (await warp_ref01_ent.create(warp_ref01_data)).data();
        (0, node_assert_1.default)(null != warp_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/warp/WarpTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.WarpVlessSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['warp01', 'warp02', 'warp03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'WARP_VLESS_TEST_WARP_ENTID': idmap,
        'WARP_VLESS_TEST_LIVE': 'FALSE',
        'WARP_VLESS_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['WARP_VLESS_TEST_WARP_ENTID'];
    const live = 'TRUE' === env.WARP_VLESS_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['WARP_VLESS_TEST_WARP_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.WarpVlessSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.WARP_VLESS_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=WarpEntity.test.js.map