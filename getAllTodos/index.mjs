const todos = [
    {
        id: 1,
        task: "Planera och förbereda måltider för veckan",
        done: false,
    },
    {
        id: 2,
        task: "Rensa och organisera en del av hemmet",
        done: false,
    },
    {
        id: 3,
        task: "Träna eller gå en promenad",
        done: false,
    },
    {
        id: 4,
        task: "Läsa en bok eller lyssna på en podcast",
        done: false,
    },
    {
        id: 5,
        task: "Kontakta en vän eller familjemedlem",
        done: false,
    },
];

export const handler = async (event) => {
    // TODO implement
    let response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "No Todos Found",
        }),
    };
    if (todos.length > 0) {
        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "Successfully got all Todos",
                todos,
            }),
        };
    }

    return response;
};
