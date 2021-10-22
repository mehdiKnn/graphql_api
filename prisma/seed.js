const {PrismaClient, Prisma} = require("@prisma/client");

const prisma = new PrismaClient()

const userData = [{
    firstname: "Lilith",
    lastname: "Raddon",
    email: "lraddon0@1688.com",
    password: "j3cQqZUgxe6"
}, {
    firstname: "Dallon",
    lastname: "Ertel",
    email: "dertel1@mozilla.com",
    password: "6EVNXiLC5VF7"
}, {
    firstname: "Menard",
    lastname: "Wytchard",
    email: "mwytchard2@digg.com",
    password: "68F3WWF83Xt"
}, {
    firstname: "Ulises",
    lastname: "Hampstead",
    email: "uhampstead3@telegraph.co.uk",
    password: "lCPGVkwznk2k"
}, {
    firstname: "Cynde",
    lastname: "Matyas",
    email: "cmatyas4@sciencedirect.com",
    password: "84u5i5b"
}]
const commentData = [{
    content: "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    createdAt: new Date("12/12/2020"),
    updatedAt: new Date("12/12/2020"),
    postId: 1,
    userId: 1
}, {
    content: "Fusce consequat. Nulla nisl. Nunc nisl.",
    createdAt: new Date("12/12/2020"),
    updatedAt: new Date("12/12/2020"),
    postId: 2,
    userId: 2
}, {
    content: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    createdAt: new Date("12/12/2020"),
    updatedAt: new Date("12/12/2020"),
    postId: 2,
    userId: 3
}, {
    content: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    createdAt: new Date("12/12/2020"),
    updatedAt: new Date("12/12/2020"),
    postId: 3,
    userId: 2
}, {
    content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.",
    createdAt: new Date("12/12/2020"),
    updatedAt: new Date("12/12/2020"),
    postId: 4,
    userId: 5
}]
const postData = [{
    title: "in ante vestibulum ante ipsum primis in faucibus orci luctus et",
    content: "Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    createdAt: new Date("12/12/2020"),
    updatedAt: new Date("12/12/2020"),
    userId: 1
}, {
    title: "dictumst morbi vestibulum velit id pretium iaculis diam erat fermentum justo nec condimentum neque sapien placerat",
    content: "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    createdAt: new Date("12/12/2020"),
    updatedAt: new Date("12/12/2020"),
    userId: 2
}, {
    title: "dui vel nisl duis ac nibh fusce lacus purus aliquet at",
    content: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    createdAt: new Date("12/12/2020"),
    updatedAt: new Date("12/12/2020"),
    userId: 2
}, {
    title: "in blandit ultrices enim lorem ipsum dolor sit amet consectetuer",
    content: "Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
    createdAt: new Date("12/12/2020"),
    updatedAt: new Date("12/12/2020"),
    userId: 3
}, {
    title: "mi pede malesuada in imperdiet et commodo vulputate justo in blandit ultrices enim lorem",
    content: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    createdAt: new Date("12/12/2020"),
    updatedAt: new Date("12/12/2020"),
    userId: 5
}]

async function main() {
    console.log(`start seeding ...`)
    for (const u of userData) {
        const user = await prisma.user.create({
           data : u
        })
        console.log(`Create user with id: ${user.id}`)
    }
    for (const p of postData) {
        const post = await prisma.post.create({
            data: p
        })
        console.log(`Create Post with id: ${post.id}`)
    }
    for (const c of commentData) {
        const comment = await prisma.comment.create({
            data: c
        })
        console.log(`Create Post with id: ${comment.id}`)
    }
    console.log(`Seeding finished`)
}

main().catch((e) => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect()
})
