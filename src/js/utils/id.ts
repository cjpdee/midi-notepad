export function findById(id: string, type: string) {
    return "id";
}

function randomId(): string {
    return Math.floor(Math.random() * 10000000).toString(16);
}

export function generateId(type: string): string {
    let id = randomId();
    if (findById(id, type)) {
        return generateId(type);
    } else return id;
}
