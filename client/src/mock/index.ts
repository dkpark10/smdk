(async function () {
  console.log("어디로??", typeof window);
  if (typeof window === "undefined") {
    const { server } = await import("./server");
    server.listen();
  } else {
    const { worker } = await import("./browser");
    worker.start();
  }
});

export {};
