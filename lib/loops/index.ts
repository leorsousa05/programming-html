class LoopStatements {
    forEachLoop(iter: [], nodeParent: Node, elementOutput?: string) {
        iter.map(item => {
            let element: HTMLElement = document.createElement("p");
            if (elementOutput) {
                element = document.createElement(elementOutput);
            }
            element.innerText = item;
            nodeParent.appendChild(element);
        })
    }

    async forLoop(range: string, nodeParent: HTMLElement) {
        const childs = nodeParent.childNodes;
        const rangeArray: number[] = range.split("..").map(number => parseInt(number));
        childs.forEach(node => {
            for (let initial = rangeArray[0]; initial < rangeArray[1]; initial++) {
                nodeParent.appendChild(node.cloneNode(true));
            }
        })

    }
}

export class ForEachLoopElement extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return ["list", "element"];
    }

    connectedCallback() {
        const list = this.attributes.getNamedItem("list")?.value;
        const elementOutput = this.attributes.getNamedItem("element")?.value;
        const { forEachLoop } = new LoopStatements();

        if (list) {
            const listParsed: [] = eval(list);
            forEachLoop(listParsed, this, elementOutput);
        }
    }

}

export class ForLoopElement extends HTMLElement {
    constructor() {
        super()
    }

    static get observedAttributes() {
        return ["range"]
    }

    connectedCallback() {
        const range = this.attributes.getNamedItem("range")?.value;
        const { forLoop } = new LoopStatements;

        if (range) {
            forLoop(range, this);
        }
    }
}