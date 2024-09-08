import { create } from "domain";
import { connect } from "http2";

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//Trabalhar com os dados -> populando dados
(async () => {
    //Clientes
    const cliente1 = await prisma.cliente.create({
        data:{
            nome: "Adeline"
        }
    });
    const cliente2 = await prisma.cliente.create({
        data:{
            nome: "Peter"
        }
    });
    //Estabelecimentos
    const estabelecimentos = await prisma.estabelecimento.create({
        data:{
            nome: "Millie Bistrot"
        }
    });
    //Itens
    const item1 = await prisma.item.create({
        data:{
            nome: "Café Coado",
            preco: 3.50,
            tipo: "Bebida",
            descricao: "Bebida quente",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item2 = await prisma.item.create({
        data:{
            nome: "Café com Leite",
            preco: 5.00,
            tipo: "Bebida",
            descricao: "Bebida quente",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item3 = await prisma.item.create({
        data:{
            nome: "Suco de Laranja",
            preco: 10.00,
            tipo: "Bebida",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item4 = await prisma.item.create({
        data:{
            nome: "Suco de Limão",
            preco: 10.00,
            tipo: "Bebida",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item5 = await prisma.item.create({
        data:{
            nome: "Suco de Abacaxi",
            preco: 10.00,
            tipo: "Bebida",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item6 = await prisma.item.create({
        data:{
            nome: "Suco de Maracujá",
            preco: 10.00,
            tipo: "Bebida",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item7 = await prisma.item.create({
        data:{
            nome: "Suco de Frutas Vermelhas",
            preco: 12.00,
            tipo: "Bebida",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item8 = await prisma.item.create({
        data:{
            nome: "Morango com Leite",
            preco: 14.00,
            tipo: "Bebida",
            descricao: "Bebida gelada",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item9 = await prisma.item.create({
        data:{
            nome: "Iogurte Batido",
            preco: 10.00,
            tipo: "Bebida",
            descricao: "Bebida gelada",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item10 = await prisma.item.create({
        data:{
            nome: "Pão na Chapa",
            preco: 4.50,
            tipo: "Lanche",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item11 = await prisma.item.create({
        data:{
            nome: "Pão com Ovo",
            preco: 5.00,
            tipo: "Lanche",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item12 = await prisma.item.create({
        data:{
            nome: "Queijo Quente",
            preco: 5.00,
            tipo: "Lanche",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item13 = await prisma.item.create({
        data:{
            nome: "Misto Quente",
            preco: 14.00,
            tipo: "Lanche",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item14 = await prisma.item.create({
        data:{
            nome: "Seladinho de Requeijão",
            preco: 10.00,
            tipo: "Lanche",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item15 = await prisma.item.create({
        data:{
            nome: "Wrap de Atum",
            preco: 15.00,
            tipo: "Lanche",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item16 = await prisma.item.create({
        data:{
            nome: "Wrap de Frango",
            preco: 15.00,
            tipo: "Lanche",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item17 = await prisma.item.create({
        data:{
            nome: "Lanche Natural na Ciabata",
            preco: 15.00,
            tipo: "Lanche",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item18 = await prisma.item.create({
        data:{
            nome: "Carne Louca na Ciabata",
            preco: 22.00,
            tipo: "Lanche",
            descricao: "Carne temperada desfiada, mussarela e fritas",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item19 = await prisma.item.create({
        data:{
            nome: "(Filé) Frango com Queijo na Ciabata",
            preco: 20.00,
            tipo: "Lanche",
            descricao: "Mussarela e fritas",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item20 = await prisma.item.create({
        data:{
            nome: "Pizza",
            preco: 16.00,
            tipo: "Tapioca",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item21 = await prisma.item.create({
        data:{
            nome: "2 Queijos",
            preco: 17.00,
            tipo: "Tapioca",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item22 = await prisma.item.create({
        data:{
            nome: "Atum com Tomate",
            preco: 15.00,
            tipo: "Tapioca",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item23 = await prisma.item.create({
        data:{
            nome: "Frango com Queijo",
            preco: 17.00,
            tipo: "Tapioca",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item24 = await prisma.item.create({
        data:{
            nome: "Nutella",
            preco: 18.00,
            tipo: "Tapioca",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item25 = await prisma.item.create({
        data:{
            nome: "Polpetone à Parmegiana",
            preco: 40.50,
            tipo: "Prato Executivo",
            descricao: "Fettuccine ao molho sugo",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item26 = await prisma.item.create({
        data:{
            nome: "Filé de Carne Acebolado",
            preco: 37.00,
            tipo: "Prato Executivo",
            descricao: "Arroz, feijão e saladinha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item27 = await prisma.item.create({
        data:{
            nome: "Filé de Carne à Parmegiana",
            preco: 40.50,
            tipo: "Prato Executivo",
            descricao: "Arroz e fritas",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item28 = await prisma.item.create({
        data:{
            nome: "Filé de Carne à Cavalo",
            preco: 38.50,
            tipo: "Prato Executivo",
            descricao: "Arroz, feijão, ovo, fritas e saladinha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item29 = await prisma.item.create({
        data:{
            nome: "Filé de Carne à Milanesa",
            preco: 39.00,
            tipo: "Prato Executivo",
            descricao: "Arroz, feijão e fritas",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item30 = await prisma.item.create({
        data:{
            nome: "Filé de Frango à Milanesa",
            preco: 36.50,
            tipo: "Prato Executivo",
            descricao: "Arroz, feijão e fritas",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item31 = await prisma.item.create({
        data:{
            nome: "Filé de Frango com Legumes",
            preco: 32.00,
            tipo: "Prato Executivo",
            descricao: "Arroz integral, legumes na manteiga e saladinha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item32 = await prisma.item.create({
        data:{
            nome: "Filé de Frango à Cavalo",
            preco: 32.50,
            tipo: "Prato Executivo",
            descricao: "Arroz, feijão, ovo, fritas e saladinha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item33 = await prisma.item.create({
        data:{
            nome: "Filé de Frango à Parmegiana",
            preco: 38.50,
            tipo: "Prato Executivo",
            descricao: "Arroz e fritas",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item34 = await prisma.item.create({
        data:{
            nome: "Filé de Peixe ao Molho Ervas Finas",
            preco: 40.50,
            tipo: "Prato Executivo",
            descricao: "Saint peter, arroz, legumes na manteiga e saladinha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item35 = await prisma.item.create({
        data:{
            nome: "Strogonoff de Carne",
            preco: 37.00,
            tipo: "Prato Executivo",
            descricao: "Arroz e batata palha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item36 = await prisma.item.create({
        data:{
            nome: "Strogonoff de Frango",
            preco: 33.00,
            tipo: "Prato Executivo",
            descricao: "Arroz e batata palha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item37 = await prisma.item.create({
        data:{
            nome: "Berinjela à Parmegiana",
            preco: 33.50,
            tipo: "Prato Executivo",
            descricao: "Vegetariano. Arroz integral e saladinha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item38 = await prisma.item.create({
        data:{
            nome: "Omelete",
            preco: 26.00,
            tipo: "Prato Executivo",
            descricao: "Queijo, presunto, tomate e cebola, arroz, feijão e saladinha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item39 = await prisma.item.create({
        data:{
            nome: "Salada Caesar",
            preco: 33.00,
            tipo: "Salada",
            descricao: "Alface americana, parmesão, crountons e filé de frango",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item40 = await prisma.item.create({
        data:{
            nome: "Salada da Casa",
            preco: 34.00,
            tipo: "Salada",
            descricao: "Folhas verdes, tomate cereja, cenoura, mussarela e filé de frango",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item41 = await prisma.item.create({
        data:{
            nome: "Omelete Completo",
            preco: 25.00,
            tipo: "Omelete",
            descricao: "Queijo, tomate, cebola e presunto",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item42 = await prisma.item.create({
        data:{
            nome: "Omelete com Saladinha",
            preco: 22.00,
            tipo: "Omelete",
            descricao: "Queijo, tomate, cebola e presunto",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item43 = await prisma.item.create({
        data:{
            nome: "Spaguetti",
            preco: 27.00,
            tipo: "Massa",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item44 = await prisma.item.create({
        data:{
            nome: "Penne",
            preco: 27.00,
            tipo: "Massa",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item45 = await prisma.item.create({
        data:{
            nome: "Fettuccine",
            preco: 28.00,
            tipo: "Massa",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item46 = await prisma.item.create({
        data:{
            nome: "Nhoque de Batata",
            preco: 31.00,
            tipo: "Massa",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item47 = await prisma.item.create({
        data:{
            nome: "Ravioli Verde de Búfala",
            preco: 42.00,
            tipo: "Massa",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item48 = await prisma.item.create({
        data:{
            nome: "Ravioli de Carne",
            preco: 40.00,
            tipo: "Massa",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item49 = await prisma.item.create({
        data:{
            nome: "Lasanha Presunto e Queijo a Bolonhesa",
            preco: 40.50,
            tipo: "Massa",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item50 = await prisma.item.create({
        data:{
            nome: "Lasanha Mussarela com Molho Branco",
            preco: 42.50,
            tipo: "Massa",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item51 = await prisma.item.create({
        data:{
            nome: "Ravioli Zucca de Abóbora",
            preco: 33.00,
            tipo: "Massa",
            descricao: "Vegetariano",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item52 = await prisma.item.create({
        data:{
            nome: "Molho Sugo",
            preco: 0.00,
            tipo: "Molho para Massa",
            descricao: "Acompanhamento de massa",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item53 = await prisma.item.create({
        data:{
            nome: "Molho Branco",
            preco: 0.00,
            tipo: "Molho para Massa",
            descricao: "Acompanhamento de massa",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item54 = await prisma.item.create({
        data:{
            nome: "Molho Rose",
            preco: 0.00,
            tipo: "Molho para Massa",
            descricao: "Acompanhamento de massa",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item55 = await prisma.item.create({
        data:{
            nome: "Molho Bolonhesa",
            preco: 0.00,
            tipo: "Molho para Massa",
            descricao: "Acompanhamento de massa",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item56 = await prisma.item.create({
        data:{
            nome: "Filé de Frango à Milanesa",
            preco: 12.00,
            tipo: "File para Massa",
            descricao: "Acompanhamento de massa",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item57 = await prisma.item.create({
        data:{
            nome: "Filé de Frango Grelhado",
            preco: 8.00,
            tipo: "File para Massa",
            descricao: "Acompanhamento de massa",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item58 = await prisma.item.create({
        data:{
            nome: "Filé de Carne à Milanesa",
            preco: 18.00,
            tipo: "Acompanhamentos",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item59 = await prisma.item.create({
        data:{
            nome: "Filé de Frango Grelhado",
            preco: 11.00,
            tipo: "Acompanhamentos",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item60 = await prisma.item.create({
        data:{
            nome: "Filé de Frango à Milanesa",
            preco: 15.00,
            tipo: "Acompanhamentos",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item61 = await prisma.item.create({
        data:{
            nome: "Feijão, Arroz, Legumes ou Saladinha",
            preco: 8.00,
            tipo: "Acompanhamentos",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item62 = await prisma.item.create({
        data:{
            nome: "Fritas",
            preco: 10.00,
            tipo: "Acompanhamentos",
            descricao: "Sem descrição",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item63 = await prisma.item.create({
        data:{
            nome: "Strogonoff de Frango",
            preco: 25.00,
            tipo: "Prato Kids",
            descricao: "Arroz e batata palha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item64 = await prisma.item.create({
        data:{
            nome: "Da Casa",
            preco: 25.00,
            tipo: "Prato Kids",
            descricao: "Arroz, feijão, iscas de fraldinha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item65 = await prisma.item.create({
        data:{
            nome: "Almôndegas",
            preco: 22.00,
            tipo: "Prato Kids",
            descricao: "Arroz, feijão, 02 almôndegas e saladinha",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    const item66 = await prisma.item.create({
        data:{
            nome: "Filé de Frango Grelhado",
            preco: 22.00,
            tipo: "Prato Kids",
            descricao: "Arroz, feijão e fritas",
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
        },
    });
    //Pedidos
    const pedido1 = await prisma.item.create({
        data:{
            statusPedido: "Em andamento",
            tipoPagamento: "Pix",
            total: 57.50,
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
            cod_cli:{
                connect: {
                    nome: "Adeline",
                },
            },
        },
    });
    const pedido2 = await prisma.item.create({
        data:{
            statusPedido: "Cancelado",
            tipoPagamento: "Cartão de Débito",
            total: 80.00,
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
            cod_cli:{
                connect: {
                    nome: "Peter",
                },
            },
        },
    });
    const pedido3 = await prisma.item.create({
        data:{
            statusPedido: "Finalizado",
            tipoPagamento: "Cartão de Crédito",
            total: 16.99,
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
            cod_cli:{
                connect: {
                    nome: "Peter",
                },
            },
        },
    });
    //ItemPedido
    const itempedido1 = await prisma.item.create({
        data:{
            quantidade: 1,
            cod_ped:{
                connect: {
                    cod: "1",
                },
            },
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
            cod_item:{
                connect: {
                    nome: "Ravioli Zucca de Abóbora",
                },
            },
        },
    });
    const itempedido2 = await prisma.item.create({
        data:{
            quantidade: 1,
            cod_ped:{
                connect: {
                    cod: "1",
                },
            },
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
            cod_item:{
                connect: {
                    nome: "Molho Branco",
                },
            },
        },
    });const itempedido3 = await prisma.item.create({
        data:{
            quantidade: 1,
            cod_ped:{
                connect: {
                    cod: "1",
                },
            },
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
            cod_item:{
                connect: {
                    nome: "Filé de Frango Grelhado",
                },
            },
        },
    });const itempedido4 = await prisma.item.create({
        data:{
            quantidade: 1,
            cod_ped:{
                connect: {
                    cod: "2",
                },
            },
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
            cod_item:{
                connect: {
                    nome: "Filé de Carne à Parmegiana",
                },
            },
        },
    });const itempedido5 = await prisma.item.create({
        data:{
            quantidade: 1,
            cod_ped:{
                connect: {
                    cod: "3",
                },
            },
            cod_loja:{
                connect: {
                    nome: "Millie Bistrot",
                },
            },
            cod_item:{
                connect: {
                    nome: "Suco de Maracujá",
                },
            },
        },
    });
    const select = await prisma.cliente.findMany();
})();