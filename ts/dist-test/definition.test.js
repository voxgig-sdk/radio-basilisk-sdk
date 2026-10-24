"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_test_1 = require("node:test");
const __1 = require("..");
const definition_runner_1 = require("./definition-runner");
const utility_1 = require("./utility");
// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN = [
    {
        "entity": "music",
        "accessor": "Music",
        "op": "list",
        "method": "GET",
        "path": "/songs/recently-played",
        "args": [],
        "select": {
            "limit": 10
        },
        "headers": [],
        "cookies": [],
        "responseMedia": [
            "application/json"
        ],
        "query": [
            "limit"
        ],
        "queryArgs": [
            {
                "name": "limit",
                "wire": "limit"
            }
        ],
        "auth": null,
        "status": 200,
        "sample": {
            "songs": [
                {
                    "id": "12345",
                    "title": "Example Song",
                    "artist": "Example Artist",
                    "album": "Example Album",
                    "playedAt": "2026-01-15T10:30:00Z",
                    "duration": 210,
                    "coverImage": "https://example.com/cover.jpg"
                }
            ],
            "count": 1,
            "timestamp": "2026-01-15T10:35:00Z"
        },
        "idField": "id"
    }
];
(0, node_test_1.describe)('definition', () => {
    for (const point of PLAN) {
        (0, node_test_1.test)(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
            const control = (0, utility_1.isControlSkipped)('entityOp', point.entity + '.' + point.op, 'definition');
            if (control.skip) {
                t.skip(control.reason || 'skipped via sdk-test-control.json');
                return;
            }
            await (0, definition_runner_1.runDefinitionPoint)(__1.SDK, point);
        });
    }
});
//# sourceMappingURL=definition.test.js.map