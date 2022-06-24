import { JSONCache } from "./JSONCache";

describe("Microwave Sate Machine", () => {
    let jsonCache: JSONCache;

    beforeAll(() => {
        // setup a mock locastorage service
    })

    beforeEach(() => {
        jsonCache = new JSONCache('test');
    });

    it("'start' returns first valid state - off", () => {
        // expect(MicrowaveMachine.start().name).toBe('off');
    });

})