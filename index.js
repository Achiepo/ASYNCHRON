// Task 1: Iterate avec Async/Await
async function iterateWithAsyncAwait(values) {
  for (const value of values) {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log(value)
  }
}

// Task 2: Wait pour un API call
async function awaitCall() {
  // Simuler API call , prendre 2 seconds et returns  data
  const fakeApiCall = () => 
    new Promise(resolve => 
      setTimeout(() => resolve({ data: "API Response Data" }), 2000)
    )

  console.log("Starting API call...")
  const response = await fakeApiCall()
  console.log("API Response:", response.data)
}

// Task 3: Handle erreur avec Async/Await
async function awaitCallWithErrorHandling() {
  // Simuler API call 
  const fakeApiCall = () => 
    new Promise((resolve, reject) => {
      setTimeout(() => {
        // succes ou fail
        if (Math.random() > 0.5) {
          resolve({ data: "API Response Data" })
        } else {
          reject(new Error("API call failed"))
        }
      }, 2000)
    })

  try {
    console.log("Starting API call...")
    const response = await fakeApiCall()
    console.log("API Response:", response.data)
  } catch (error) {
    console.log("eurreur de message: fetch data. svp revener plus tard.")
    console.error("Technical error details:", error.message);
  }
}

// Test d'implementation
async function runTests() {
  console.log("Teste Task 1 - Iterate avec Async/Await:")
  await iterateWithAsyncAwait([1, 2, 3])
  
  console.log("\nTeste Task 2 - Wait pour API call:")
  await awaitCall();
  
  console.log("\nTeste Task 3 - Erreur Handling:")
  await awaitCallWithErrorHandling()
}

runTests().catch(console.error)