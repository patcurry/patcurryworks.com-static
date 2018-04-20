let outputData = '';
storeLog = inputs => (outputData += inputs);

test('console log "You are sane"', () => {
    console["log"] = jest.fn(storeLog);
    require("../sanity.js");
    expect(outputData).toBe("You are sane");
});
