const User = require("./userTable")
const Movie = require("../movie/table")
const { QueryTypes } = require("sequelize")
const { sequelize } = require("../db/connection")

Movie.hasMany(User);
User.belongsTo(Movie, { foreignKey: 'MovieId' });

exports.testInnerJoin = async () =>
{
    try
    {
        const data = await User.findAll({ include: Movie })
        return console.log(JSON.stringify(data, null, 2))
    }
    catch (error)
    {
        console.log(error)
    }
}

// exports. = async () =>
// {
//     try
//     {
//         let list = await sequelize.query("SELECT * FROM Users INNER JOIN Movies ON Users.MovieId = Movies.id ", { type: QueryTypes.SELECT });
//         console.table(list.map(({ id, name, age, title }) => ({ id, name, age, title })));
//     } catch (error)
//     {
//         console.log(error)
//     }
// };

exports.addUser = async (userObject) =>
{
    try
    {
        await User.create(userObject)
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.listUser = async () =>
{
    try
    {
        return await User.findAll()
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.updateUser = async (userObject) =>
{
    try
    {
        return await User.update(

            {
                name: userObject.nameR,
                age: userObject.ageR,
            },
            {
                where: { title: userObject.name }
            })
    }
    catch (error)
    {
        console.log(error)
    }
}

exports.deleteUser = async (userObject) =>
{
    try
    {
        return await User.destroy({ where: userObject })
    }
    catch (error)
    {
        console.log(error)
    }
}


exports.updateUser = async (yargsObject) =>
{
    await User.update(
        {
            title: yargsObject.newTitle
        },
        {
            where: { title: yargsObject.title }
        });
    console.log('yes');
}

exports.showUser = async () =>
{
    try
    {
        let list = await User.findAll();
        console.table(list.map(({ id, name, age }) => ({ id, name, age })));
    } catch (error)
    {
        console.log(error)
    }
};