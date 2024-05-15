import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          Sean Hart
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a href="mailto:hartsean@gmail.com">Contact</a>
        </div>
        
      </div>
      
      <div style={{borderRadius: '5px', overflow: 'hidden'}}>
        <Image
        src="/headshot.jpg"
        width={350}
        height={350}
        alt="Sean Hart"
      />
    </div>
    </main>
  );
}
