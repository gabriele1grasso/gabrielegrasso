import { problems } from '@/data/content'

export function Problems() {
  return (
    <section className="border-b">
      <div className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-[26px] sm:text-[34px]">
            Ti riconosci in una di queste situazioni?
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Sono le cinque difficoltà più comuni di chi si avvicina a Meta Ads senza un
            metodo.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <div key={problem.id} className="bg-card rounded-xl border p-6">
              <span className="text-accent text-sm font-semibold">
                0{index + 1}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{problem.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
