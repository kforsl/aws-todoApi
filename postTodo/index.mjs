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
    let response = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Can't add a todo without a task in body.",
        }),
    };
    if (event.body) {
        const { task } = JSON.parse(event.body);

        if (task) {
            const newTodo = {
                id: todos[todos.length - 1].id + 1,
                task: task,
                done: false,
            };
            todos.push(newTodo);
            // TODO implement
            response = {
                statusCode: 200,
                body: JSON.stringify({
                    message: "New Todo Added",
                    newTodo,
                    todos,
                }),
            };
        }
    }

    return response;
};
