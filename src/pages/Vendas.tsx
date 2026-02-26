import { AppLayout } from "@/components/layout/AppLayout";

export default function Vendas() {
  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mt-8">Vendas</h1>
      <p className="mt-4">Área restrita para vendas. Faça login para visualizar.</p>
    </AppLayout>
  );
}
