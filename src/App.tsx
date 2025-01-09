import { useState } from "react";
import { Intro } from "@/components/intro";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Intro />
        <main className="grow"></main>
      </div>
    </>
  );
}

export default App;
