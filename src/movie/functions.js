const Movie = require("./table")

exports.addMovie = async (movieObject) =>
{
    try
    {
        await Movie.create(movieObject)
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.listMovie = async () =>
{
    try
    {
        return await Movie.findAll()
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.updateMovie = async (movieObject) =>
{
    try
    {
        console.log("Got to Update")
        console.log(movieObject.titleR)
        return await Movie.update(

            {
                title: movieObject.titleR,
                actor: movieObject.actorR,
            },
            {
                where: { title: movieObject.title }
            })
    }
    catch (error)
    {
        console.log(error)
    }
}
