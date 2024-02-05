let posts = [
    {id:1, username:'james', country:"canada", eyecolor: 'green'},
    {id:2, username:'james', country:"canada", eyecolor: 'green'},
    {id:3, username:'james', country:"canada", eyecolor: 'green'},
]

export const getPosts = () => posts

export const addPosts = (post) => {
    posts.push(post)
}

export const deletePost = (id) => {
    posts = posts.filter((post) => post.id !== id)
}

export const updatePost = (id, title, desc) => {
    const post = posts.find((post) => post.id === id)

    if(post) {
        post.title = title
        post.desc = desc
    }else {
        throw new Error("NO POST FOUND")
    }
}

export const getById = (id) => {
    return posts.find((post) => post.id === id)
}