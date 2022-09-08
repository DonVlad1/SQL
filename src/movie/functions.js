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

exports.deleteMovie = async (movieObject) =>
{
    try
    {
        return await Movie.destroy({ where: movieObject })
    }
    catch (error)
    {
        console.log(error)
    }
}


exports.updateMovie = async (yargsObject) =>
{
    await Movie.update(
        {
            title: yargsObject.newTitle
        },
        {
            where: { title: yargsObject.title }
        });
    console.log('yes');
}

exports.showMovie = async () =>
{
    try
    {
        let list = await Movie.findAll();
        console.table(list.map(({ id, title, actor }) => ({ id, title, actor })));
    } catch (error)
    {
        console.log(error)
    }
};