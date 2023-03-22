export default {
    patcher: {
        baseDirectory: 'data',
        hashAlgorithm: 'sha256'
    },

    server: {
        ssl: {
            useSsl: true,
            keyPath: 'certs/server.key',
            certPath: 'certs/server.crt',
            caPath: 'certs/ca.crt'
        },

        port: 5000,
        key: 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoicGF0Y2hlciIsIklzc3VlciI6ImNvc21vcyIsIlVzZXJuYW1lIjoibmFubyIsImlhdCI6MTY3OTQxNzg3N30.SsJxgyF9KDQqiY3zjNHF1-oIErtmmhlf6QDJc3uCR00'
    }
}