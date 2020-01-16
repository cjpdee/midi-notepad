export function findById(id: string) { return 'id' }

function randomId(): string {
    return Math.floor((Math.random() * 10000000)).toString(16);
}

export function generateId(): string {
    let id = randomId();
    if (findById(id)) {
        return generateId();
    } else return id
}