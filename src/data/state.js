let state = {

    postsData: [
        {post: "Hello, how are you?", id: "1", likesCount: 21},
        {post: "Hey, why nobody love me?", id: "2", likesCount: 2},
        {post: "it's my first program", id: "3", likesCount: 1},
    ],

    dialogData: [
        {dialog: "Витя", id: "1"},
        {dialog: "Алексей", id: "2"},
        {dialog: "Оксана", id: "3"},
        {dialog: "Денис", id: "4"},
        {dialog: "Олег", id: "5"},
        {dialog: "Света", id: "6"},
    ],

    messagesData: [
        {message: "hdddi", id: "1"},
        {message: "hello", id: "2"},
        {message: "What the F..", id: "3"},
        {message: "ololo", id: "4"},
        {message: "Oy, sheet", id: "5"},
    ],
}

export let addPost = (postMessage) => {
    let newPost = {
        post: postMessage,
        id: 5,
        likesCount: 0,
    };

    state.postsData.push(newPost);
}

export default state;