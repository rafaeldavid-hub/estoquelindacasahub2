import { AppLayout } from "@/components/layout/AppLayout";

export default function NotFound() {
  return (
    <AppLayout>
      <h1 className="text-2xl font-bold mt-8">Página não encontrada</h1>
      <p className="mt-4">A rota requisitada não existe.</p>
    </AppLayout>
  );
}
