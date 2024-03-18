class ConditionalStatements {
    checkStatement(statement: string): boolean {
        return eval(statement);
    }
}

export class IfStatementElement extends HTMLElement {

    constructor() {
        super()
    }

    static get observedAttributes() {
        return ["value"]
    }

    connectedCallback() {
        const conditional = this.attributes.getNamedItem("conditional")?.value;
        const { checkStatement } = new ConditionalStatements();

        if(!conditional) {
            throw new Error("Conditional Missing");
        }

        const conditionalCheck = checkStatement(conditional);
        
        if(!conditionalCheck) {
            this.childNodes.forEach(node => !node.nodeName.includes("ELSE-ELEMENT") ? node.replaceWith("") : false);
            this.childNodes.forEach(node => console.log(node.nodeName))
            return false;
        }

        const attribute = document.createAttribute("conditionalResponse")
        attribute.value = String(conditionalCheck);

        this.attributes.setNamedItem(attribute);
    }

}

export class ElseStatementElement extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const conditionalResponse = this.parentElement?.attributes.getNamedItem("conditionalResponse")?.value;
        if(conditionalResponse) {
            this.innerHTML = "";
        }
    }
}

