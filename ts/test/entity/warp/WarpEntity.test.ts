

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { WarpVlessSDK, BaseFeature, config, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('WarpEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when WARP_VLESS_TEST_LIVE=TRUE.
  afterEach(liveDelay('WARP_VLESS_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = WarpVlessSDK.test()
    const ent = testsdk.Warp()
    assert(null != ent)
  })


  test('validate', async (t) => {
    if (null == (config as any).feature?.validate) {
      t.skip('feature not present in this SDK: validate')
      return
    }
    const client = WarpVlessSDK.test(undefined, { feature: { validate: { active: true } } })
    await assert.rejects(client.Warp().create({"amneziaMode":1} as any),
      (err: any) => 'validate_failed' === err.code)
  })



  test('basic', async (t) => {

    const live = 'TRUE' === process.env.WARP_VLESS_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'warp.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amneziaMode":{"a":true,"h":"Amnezia Mode","n":"amneziaMode","r":false,"sh":"Amnezia VPN mode configuration","t":"`$STRING`","key$":"amneziaMode","index$":0},"configs":{"a":true,"h":"Configs","n":"configs","r":false,"sh":"Array of configuration objects when multiple configs are returned","t":"`$ARRAY`","key$":"configs","index$":1},"content":{"a":true,"h":"Content","n":"content","r":false,"sh":"Base64 encoded WARP configuration content","t":"`$STRING`","key$":"content","index$":2},"deviceType":{"a":true,"h":"Device Type","n":"deviceType","r":false,"sh":"The type of device requesting the configuration","t":"`$STRING`","key$":"deviceType","index$":3},"errorCode":{"a":true,"h":"Error Code","n":"errorCode","r":false,"sh":"Error code if an error occurred","t":"`$STRING`","key$":"errorCode","index$":4},"message":{"a":true,"h":"Message","n":"message","r":false,"sh":"Human-readable message or error description","t":"`$STRING`","key$":"message","index$":5},"selectedDns":{"a":true,"h":"Selected Dns","n":"selectedDns","r":false,"sh":"DNS provider selection","t":"`$STRING`","key$":"selectedDns","index$":6},"selectedServices":{"a":true,"h":"Selected Services","n":"selectedServices","r":false,"sh":"List of selected services to include in the configuration","t":"`$ARRAY`","key$":"selectedServices","index$":7},"siteMode":{"a":true,"h":"Site Mode","n":"siteMode","r":false,"sh":"The site mode for the WARP configuration","t":"`$STRING`","key$":"siteMode","index$":8}},"name":"warp","op":{"create":{"input":"data","name":"create","points":[{"a":true,"bf":["amneziaMode","deviceType","selectedDns","selectedServices","siteMode"],"co":{"id":"POST /api/warp","source":"openapi3","version":2},"g":{},"k":"http","m":"POST","o":"/api/warp","q":{},"r":{},"rb":{"alternatives":[{"fields":[{"name":"amneziaMode"},{"name":"deviceType"},{"name":"selectedDns"},{"name":"selectedServices"},{"name":"siteMode"}],"kind":"form","media":"application/x-www-form-urlencoded"}],"kind":"json","media":"application/json"},"rs":{"kind":"json","media":"application/json"},"s":[{"lit":"api"},{"lit":"warp"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[]},"key$":"warp","name__orig":"warp","Name":"Warp","name_":"warp","name-":"warp","NAME":"WARP","index$":0}, {"active":true,"entity":"warp","key$":"BasicWarpFlow","kind":"basic","name":"BasicWarpFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"warp_ref01"},"m":{},"o":"create","s":[],"v":[],"index$":0}]}, 'Warp', {"POST /api/warp":{"protocol":"http","requestBody":{"required":true,"content":{"application/json":{"schema":{"type":"object","properties":{"siteMode":{"type":"string","description":"The site mode for the WARP configuration","example":"awg2","key$":"siteMode"},"deviceType":{"type":"string","description":"The type of device requesting the configuration","example":"desktop","key$":"deviceType"},"amneziaMode":{"type":"string","description":"Amnezia VPN mode configuration","example":"warp_amnezia_awg2","key$":"amneziaMode"},"selectedDns":{"type":"string","description":"DNS provider selection","enum":["cloudflare","google","quad9"],"example":"cloudflare","key$":"selectedDns"},"selectedServices":{"type":"array","description":"List of selected services to include in the configuration","items":{"type":"string"},"example":["service1","service2"],"key$":"selectedServices"}},"index$":1},"examples":{"default":{"summary":"Default WARP configuration request","value":{"siteMode":"awg2","deviceType":"desktop","amneziaMode":"warp_amnezia_awg2","selectedDns":"cloudflare","selectedServices":[]}},"googleDns":{"summary":"WARP configuration with Google DNS","value":{"siteMode":"awg2","deviceType":"mobile","amneziaMode":"warp_amnezia_awg2","selectedDns":"google","selectedServices":[]}}}},"application/x-www-form-urlencoded":{"schema":{"type":"object","properties":{"siteMode":{"type":"string"},"deviceType":{"type":"string"},"amneziaMode":{"type":"string"},"selectedDns":{"type":"string"},"selectedServices":{"type":"string"}}}}}},"parameters":[]}}, { strict: LIVE_STRICT, t })
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const warp_ref01_ent = client.Warp()
    let warp_ref01_data = setup.data.new.warp['warp_ref01']

    warp_ref01_data = (await warp_ref01_ent.create(warp_ref01_data)).data()
    assert(null != warp_ref01_data)


  })
})



// main.kit.test.live.strict is true (the default is true): a live
// request that fails, or a live test missing an input it needs,
// fails the test.
// An account with no record for a test to read skips it either way.
const LIVE_STRICT = true

function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/warp/WarpTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = WarpVlessSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['warp01','warp02','warp03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'WARP_VLESS_TEST_WARP_ENTID': idmap,
    'WARP_VLESS_TEST_LIVE': 'FALSE',
    'WARP_VLESS_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['WARP_VLESS_TEST_WARP_ENTID']

  const live = 'TRUE' === env.WARP_VLESS_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['WARP_VLESS_TEST_WARP_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new WarpVlessSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
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
  }

  return setup
}
  
