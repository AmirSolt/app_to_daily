export async function adCounter(profileId:string, advertComponentId:string){
    // POST REQ
    const response = await fetch("/api/endpoints/advertCounter", {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            profileId,
            advertComponentId
        }),
      });
}