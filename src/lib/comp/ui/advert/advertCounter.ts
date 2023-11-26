export async function adCounter(userId:string, advertComponentId:number){
    // POST REQ
    const response = await fetch("/api/advertCounter", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userId,
            advertComponentId
        }),
      });
      
}