let todos = [
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
            message: "No todo found with that ID.",
        }),
    };

    const foundTodo = todos.find(
        (todo) => todo.id === parseInt(event.pathParameters.id)
    );

    if (foundTodo) {
        const indexOf = todos.indexOf(foundTodo);
        todos.splice(indexOf, 1);

        response = {
            statusCode: 200,
            body: JSON.stringify({
                message: "Todo deleted.",
                removed: foundTodo,
                todos: todos,
            }),
        };
    }

    // TODO implement

    return response;
};
