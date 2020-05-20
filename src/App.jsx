import React from 'react';
import './App.scss';
import Button from "./components/shared/Button/Button";
import NodeElement from "./components/NodeEmelent/NodeElement";


const defaultStyleValues = {
    color: 'blue',
    background: 'red',
    fontSize: '40px',
}
class App extends React.Component {

    componentDidMount() {
        const text = document.querySelector('.text');
        text.innerHTML = `${this.state.text}`
    }
    state = {
        text: 'Hi My lovely little Ponny',
        cutText: '',
        focusOffset: 0,
        anchorOffset: 0,
        textNodes: [],
    }
    domRangeHighlight(style) {
        const { cutText: text } = this.state
        const root = document.querySelector('.text').firstChild;
        const content = root.nodeValue;
        if (content.includes(text)) {
            if (document.createRange) {
                const range = document.createRange();
                range.setStart(root, content.indexOf(text));
                range.setEnd(root, content.indexOf(text) + text.length);
                const highlightDiv = document.createElement('span');
                const br = document.createElement('br');
                const isStyleBr = (style === 'br')
                if (!isStyleBr) {
                    highlightDiv.style[style] = defaultStyleValues[style]
                }
                const contentToSurround = isStyleBr ? br : highlightDiv
                range.surroundContents(contentToSurround)
            }
        } else {
            alert('Select text from right to left please, move only right to left direction');
        }
    }
    getRangeObject = () => {
        if (window.getSelection) {
             return window.getSelection().getRangeAt(0);
        }
        return null;
    }
    setNewCutText = () => {
        var range = this.getRangeObject();
        if (range) {
            this.setState({
                text: range.startContainer.nodeValue,
                cutText: range.toString(),
                focusOffset: range.startOffset,
                anchorOffset: range.endOffset,
            })
        } else {
            alert('Select text from right to left please, move only right to left direction');
        }
    }
    nodeToJson = () => {
        const body = document.querySelector('.text');
        const textNodes = [];
        let id = 0;
        function recursion(element) {
            element.childNodes.forEach((node => {
                const { nodeName, style, textContent } = node
                // const { background = 'white', color = 'black', fontSize = '20px' } = style
                if (nodeName.match(/^SPAN/)) {
                    const obj = {
                        id,
                        text: textContent,
                        fontSize: style.fontSize,
                        color:style.color,
                        background: style.background,
                        nodeName,
                    }
                    id++
                    textNodes.push(obj)
                } else { recursion(node)}
            }))
        }

        recursion(body)
        this.setState({textNodes}, () => {
            alert('Open console.log to view the result')
            console.log(JSON.stringify(this.state.textNodes))
        })

    }
    changeColor = () => {this.domRangeHighlight( 'color');}
    changeBg = () => {this.domRangeHighlight('background');}
    zoomInFont = () => {this.domRangeHighlight( 'fontSize'); }
    createBr = () => { this.domRangeHighlight( 'br'); }
    render() {
        return (
            <div className="App">
                <span
                    spellCheck={true}
                    className="text"
                    onMouseUp={this.setNewCutText}>
                </span>
                <div>
                    {this.state.textNodes.map(textNodes => (<NodeElement key={textNodes.id} {...textNodes} />))}
                </div>
                <div className="buttons">
                    <Button onClick={this.changeBg}>
                        change bg
                    </Button>
                    <Button onClick={this.changeColor}>
                        change color
                    </Button>
                    <Button onClick={this.zoomInFont}>
                        zoom in font
                    </Button>
                    <Button onClick={this.createBr}>
                        br
                    </Button>
                    <Button onClick={this.nodeToJson}>
                        create JSON
                    </Button>
                </div>
            </div>
        );
    }
}

export default App;
