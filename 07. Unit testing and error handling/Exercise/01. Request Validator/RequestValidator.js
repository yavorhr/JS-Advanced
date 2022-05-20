function solve(obj) {
    const methods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0']

    if ((obj.method === undefined) || !methods.includes(obj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if ((obj.uri === undefined) || !(/^([a-zA-z.0-9]+|\*)$/g.test(obj.uri))) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if ((obj.version === undefined) || !version.includes(obj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if ((obj.message === undefined) || !(/^[^<>\\&'"]*$/gm.test(obj.message))) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}

