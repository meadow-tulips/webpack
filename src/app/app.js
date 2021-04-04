import { parseInputs } from './utils/parse-inputs'
import { inputsAreValid } from './utils/inputs-are-valid'


export const run = (alertInstance, componentInstance) => {
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
            console.log(inputs)
            alertInstance.handleAdditionError(inputs, parsedInputs);
        }
    });
}
