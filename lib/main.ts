import { ElseStatementElement, IfStatementElement } from "./conditional";
import { ForEachLoopElement, ForLoopElement } from "./loops";

window.onload = () => {
  customElements.define("if-element", IfStatementElement);
  customElements.define("else-element", ElseStatementElement);
  customElements.define("foreach-element", ForEachLoopElement);
  customElements.define("forloop-element", ForLoopElement);
}