const yargs = require("yargs")
const { sequelize } = require("./db/connection")
const { addMovie, updateMovie, deleteMovie, showMovie } = require("./movie/functions")
const { addUser, updateUser, showUser, deleteUser, testInnerJoin } = require("./users/userFunctions")

const app = async (yargsObject) =>
{
    try
    {
        await sequelize.sync()
        if (yargsObject.addMovie)
        {
            await addMovie({ title: yargsObject.title, actor: yargsObject.actor })
            await showMovie()
        }
        else if (yargsObject.updateMovie)
        {
            await updateMovie({ title: yargsObject.title, actor: yargsObject.actor, titleR: yargsObject.titleR, actorR: yargsObject.actorR })
        }
        else if (yargsObject.showMovie)
        {
            await showMovie()
        }
        else if (yargsObject.delMovie)
        {
            await deleteMovie({ title: yargsObject.title, actor: yargsObject.actor })
            await showMovie()
        }

        else if (yargsObject.addUser)
        {
            await addUser({ name: yargsObject.name, age: yargsObject.age, MovieId: yargsObject.MovieId })
        }
        else if (yargsObject.updateUser)
        {
            await updateUser({ name: yargsObject.name, age: yargsObject.age, nameR: yargsObject.nameR, ageR: yargsObject.ageR })
        }
        else if (yargsObject.showUser)
        {
            await showUser()
        }
        else if (yargsObject.delUser)
        {
            await deleteUser({ name: yargsObject.name, age: yargsObject.age })
            await showUser()
        }

        else if (yargsObject.joinTest)
        {
            await testInnerJoin()
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