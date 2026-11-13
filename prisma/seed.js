import bcrypt from 'bcryptjs';

try {
    process.loadEnvFile();
} catch {
    console.error('   ❌ parceria ... arquivo .env não encontrado');
    process.exit(1);
}

const { criptografar } = await import('../src/lib/cripto.js');
const { prisma } = await import('../src/lib/prisma.js');

// para ter mais linhas no banco, acrescente mais objetos em cada lista/tabela
const dados = {
    usuario: [
        { nome: 'admin', senha: bcrypt.hashSync('admin123', 10) },
        { nome: 'marcos', senha: bcrypt.hashSync('123', 10) },
        { nome: 'joelma', senha: bcrypt.hashSync('in12', 10) },
    ],
    cliente: [
        { nome: 'Bagui', cpf: criptografar('121.456.789-01')},
        { nome: 'Ilyanna Rasputin', cpf: criptografar('123.446.789-01') },
        { nome: 'Bárbara', cpf: criptografar('126.456.789-05') },''
    ],

    veiculo: [
        { modelo: 'Civic', placa: 'ABC-1234', cliente_id: 1 },
        { modelo: 'VW Gol', placa: 'DEF45G7', cliente_id: 2 },
        { modelo: 'Corolla', placa: '67R67R', cliente_id: 3 },
    ],
    agendamento: [
        { data: new Date('2026-11-10'), veiculo_id: 1 },
        { data: new Date('2026-11-11'), veiculo_id: 2 },
        { data: new Date('2026-11-12'), veiculo_id: 3 }
    ],
};

const tabelas = Object.keys(dados).reverse().join(', ');
await prisma.$executeRawUnsafe(`TRUNCATE TABLE ${tabelas} RESTART IDENTITY CASCADE`);
console.log('   🧹 registros anteriores apagados (ids reiniciados)');

for (const [tabela, data] of Object.entries(dados)) {
    const { count } = await prisma[tabela].createMany({ data });
    console.log(`   ✅ ${tabela}: ${count} registros`);
}

await prisma.$disconnect();
