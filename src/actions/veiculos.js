'use server';

import { prisma } from '@lib/prisma';
import { revalidatePath } from 'next/cache';

export async function salvar({ id, ...data }) {
    try {
        if (id) await prisma.veiculo.update({ where: { id }, data });
        else await prisma.veiculo.create({ data });
    } catch {
        return { erro: 'Erro ao salvar o veículo' };
    }
    revalidatePath('/veiculos');
}

export async function excluir(id) {
    try {
        await prisma.veiculo.delete({ where: { id } });
    } catch (e) {
        if (e.code === 'P2003') return { erro: 'Veículo possui agendamentos cadastrados' };
        return { erro: 'Erro ao excluir o veículo' };
    }
    revalidatePath('/veiculos');
}