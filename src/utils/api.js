import { formatOptionsForEngine, compactUndefined } from './utils'
import { ENGINE_RPC_HOST } from './constants'
import Aria2 from 'aria2'
const port = 6800

export default class Api {
    constructor(options = {}) {
        this.options = options
        this.init()
    }

    init() {
        this.client = this.initClient()
        this.client.open()
    }

    initClient() {
        const host = ENGINE_RPC_HOST
        return new Aria2({
            host,
            port,
            secret: ''
        })
    }

    downloadURl() {
        const magnet = "magnet:?xt=urn:btih:88594AAACBDE40EF3E2510C47374EC0AA396C08E&dn=bbb_sunflower_1080p_30fps_normal.mp4&tr=udp%3a%2f%2ftracker.openbittorrent.com%3a80%2fannounce&tr=udp%3a%2f%2ftracker.publicbt.com%3a80%2fannounce&ws=http%3a%2f%2fdistribution.bbb3d.renderfarming.net%2fvideo%2fmp4%2fbbb_sunflower_1080p_30fps_normal.mp4";
        return this.client.call("addUri", [magnet], { dir: "/Users/huangshengyi/Downloads" })
    }

    addUri(params) {
        const { uris, outs, options } = params
        const tasks = uris.map((uri, index) => {
            const engineOptions = formatOptionsForEngine(options)
            if (outs && outs[index]) {
                engineOptions.out = outs[index]
            }
            const args = compactUndefined([[uri], engineOptions])
            return ['aria2.addUri', ...args]
        })
        return this.client.multicall(tasks)
    }
}