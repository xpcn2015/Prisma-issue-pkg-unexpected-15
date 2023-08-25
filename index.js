const prisma = require("@prisma/client")
const client = new prisma.PrismaClient()
console.log("Begin")

client.user.findFirst().then(v => {
    console.log(v)
})