export default function HowToPlay() {
  return (
    <div className="flex min-h-screen items-center justify-center dark:bg-black">
      <div className="relative w-screen h-screen">
        <div className="text-lg text-white bg-linear-to-b from-transparent from-20% to-30% to-black absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-primary h-full w-full flex items-center justify-center flex-col">
          <h1 className="text-4xl font-bold text-white mb-4">How To Play</h1>
          <p className="">
            In Chi-Noir, you play as a detective trying to solve a murder case.
            You will gather clues, some of which may be misleading, or the
            ultimate truth you are looking for.
          </p>
          <p>
            While looking for clues, you may not have enough time to inspect
            every single one, choose wisely.
          </p>
        </div>
      </div>
    </div>
  );
}
