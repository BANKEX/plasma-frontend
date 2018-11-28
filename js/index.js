/*
    Should send to verifier private key and amount. In future it should be on client side
 */
function deposit(privateKey, amount) {
    
}

/*
    Should get deposit amount
 */
function getAmount() {

}

async function getSmartContractBalance() {
    const response = await fetch(`${endpointUrl}/etherBalance`);
    if (response.ok === false)
        throw new Error("Can not get smart contract balance");
    return (await response.json()).Balance;
}

async function getPlasmaBalance() {
    const response = await fetch(`${endpointUrl}/plasmaBalance`);
    if (response.ok === false)
        throw new Error("Can not get plasma balance");
    return (await response.json()).Balance;
}

async function getContractAddress() {
    const response = await fetch(`${endpointUrl}/contractAddress`);
    if (response.ok === false)
        throw new Error("Can not get plasma balance");
    return (await response.json()).Address;
}