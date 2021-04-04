const alertInstance = new AlertService();
const componentInstance = new ComponentService();

const run = (alertInstance, componentInstance) => {
    alertInstance.hideErrors();

    componentInstance.onClick(() => {
        alertInstance.hideErrors();
        const inputs = componentInstance.getInputs();
        const parsedInputs = parseInputs(...inputs);
        if(inputsAreValid(...parsedInputs)) {
            const [numA, numB] = parsedInputs;
            console.log(numA, numB);
            componentInstance.setResult(numA + numB);
        } else {
            componentInstance.setResult("");
            alertInstance.handleAdditionError(inputs, parsedInputs);
        }
    });
}


run(alertInstance, componentInstance)