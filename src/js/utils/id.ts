export function findById(
    id: string,
    type: "stack" | "oscillator" | "filter" | "pattern",
    state: any
) {
    let entryPoint = undefined;
    switch (type) {
        case "stack":
        case "oscillator":
        case "filter":
            entryPoint = "stacks";
            break;
        case "pattern":
            entryPoint = "patterns";
            break;
    }

    function objectSearch(needle, haystack) {
        console.log("current haystack:", haystack);
        for (const item in haystack) {
            console.log("iterating", item, needle);
            if (item === needle) {
                return false;
            } else {
                if (
                    Object.keys(haystack[item]).length === 1 ||
                    !Object.keys(haystack[item])
                ) {
                    console.log("could not be found");
                    return id;
                } else {
                    console.log(
                        "are there more keys? ",
                        Object.keys(haystack[item]).length
                    );
                    objectSearch(needle, haystack[item]);
                }
            }
        }
    }

    return objectSearch(id, state[entryPoint]);
}

function randomId(): string {
    // return "lol";
    return Math.floor(Math.random() * 10000000).toString(16);
}

export function generateId(type: string, state: any): string {
    let id = randomId();
    if (findById(id, type, state)) {
        return generateId(type, state);
    } else return id;
}
