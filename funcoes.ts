const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Trabalhar com os dados -> populando dados
(async () => {
    //Clientes
    const cliente1 = await prisma.cliente.create({
        data:{
            nome: "Adelia"
        }
    })
    const cliente2 = await prisma.cliente.create({
        data:{
            nome: "Ben"
        }
    })
    //Estabelecimentos
    const estabelecimentos = await prisma.estabelecimento.create({
        data:{
            nome: "Millie Bistrot"
        }
    })
    //console.log(estabelecimentos);
    //const itens = await prisma.item.count();
    //console.log(itens);
    //const pedidos = await prisma.pedido.count();
    //console.log(pedidos);
})();