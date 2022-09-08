const yargs = require("yargs")
const { sequelize } = require("./db/connection")
const { addMovie, listMovie, updateMovie, deleteMovie, showMovie } = require("./movie/functions")
const { addUser, listUser, updateUser, showUser, deleteUser, testInnerJoin } = require("./users/userFunctions")

const app = async (yargsObject) =>
{
    try
    {
        await sequelize.sync()
        if (yargsObject.create)
        {
            await addMovie({ title: yargsObject.title, actor: yargsObject.actor })
            console.log(await listMovie())
        }
        else if (yargsObject.update)
        {
            await updateMovie({ title: yargsObject.title, actor: yargsObject.actor, titleR: yargsObject.titleR, actorR: yargsObject.actorR })
        }
        else if (yargsObject.display)
        {
            await showMovie()
        }
        else if (yargsObject.delMovie)
        {
            await deleteMovie({ title: yargsObject.title, actor: yargsObject.actor })
            console.log(await listMovie())
        }

        else if (yargsObject.createUser)
        {
            await addUser({ name: yargsObject.name, age: yargsObject.age, MovieId: yargsObject.MovieId })
        }
        else if (yargsObject.readUser)
        {
            console.log(await listUser())
        }
        else if (yargsObject.updateUser)
        {
            await updateUser({ name: yargsObject.name, age: yargsObject.age, nameR: yargsObject.nameR, ageR: yargsObject.ageR })
        }
        else if (yargsObject.displayUser)
        {
            await showUser()
        }
        else if (yargsObject.delUser)
        {
            await deleteUser({ name: yargsObject.name, age: yargsObject.age })
            console.log(await listUser())
        }

        else if (yargsObject.joinTest)
        {
            console.log(await testInnerJoin())
        }

        else
        {
            console.log("Incorrect Command")
        }
        sequelize.close()
    }

    catch (error)
    {
        console.log("Error happened, plz help")
        console.log(error)
    }

}

app(yargs.argv)