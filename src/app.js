const yargs = require("yargs")
const { sequelize } = require("./db/connection")
const { addMovie, listMovie, updateMovie, showTable } = require("./movie/functions")

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
        else if (yargsObject.read)
        {
            console.log(await listMovie())
        }
        else if (yargsObject.update)
        {
            await updateMovie({ title: yargsObject.title, actor: yargsObject.actor, titleR: yargsObject.titleR, actorR: yargsObject.actorR })
            // console.log(await listMovie())
        }
        else if (yargsObject.display)
        {
            await showTable()
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