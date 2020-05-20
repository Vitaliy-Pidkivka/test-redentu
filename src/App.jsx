import React from 'react';
import './App.scss';
import Button from "./components/shared/Button/Button";

class App extends React.Component {

    componentDidMount() {
        let text = document.querySelector('.text');
        text.innerHTML = `${this.state.text}`
    }

    domRangeHighlight(text, style) {
        let root = document.querySelector('.text').firstChild;
        let content = root.nodeValue;
        if (~content.indexOf(text)) {
            if (document.createRange) {
                let rng = document.createRange();
                rng.setStart(root, content.indexOf(text));
                rng.setEnd(root, content.indexOf(text) + text.length);
                let highlightDiv = document.createElement('span');
                let br = document.createElement('br');
                style === 'color' ? highlightDiv.style.color = 'blue' :
                    style === 'background' ? highlightDiv.style.background = 'red' :
                        style === 'font' ? highlightDiv.style.fontSize = '35px' :
                            highlightDiv.style.background = 'white'
                if (style === 'br') {
                    rng.surroundContents(br);
                } else {
                    rng.surroundContents(highlightDiv);
                    this.setState({
                        text: rng
                    }, ()=>{ console.log(this.state.text) })
                }
            }
        } else {
            alert('Совпадений не найдено');
        }
    }

    state = {
        text: 'Hi My lovely little Ponny',
        cutText: '',
        focusOffset: 0,
        anchorOffset: 0,
    }
    changeColor = () => {
        this.domRangeHighlight(this.state.cutText, 'color')
    }
    changeBg = () => {
        this.domRangeHighlight(this.state.cutText, 'background')
    }
    zoomInFont = () => {
        this.domRangeHighlight(this.state.cutText, 'font')
    }
    createBr = () => {
        this.domRangeHighlight(this.state.cutText, 'br')
    }
    getRangeObject = (win) => {
        win = win || window;
        if (win.getSelection) {
            try {
                return win.getSelection().getRangeAt(0);
            } catch (e) {  }
        } else if (win.document.selection) {
            var range = win.document.selection.createRange();
            return this.fixIERangeObject(range, win);
        }
        return null;
    }
    setNewCutText = () => {
        var range = this.getRangeObject();
        if (range) {
            this.setState({
                text: range.startContainer.nodeValue,
                cutText: range.toString() ,
                focusOffset: range.startOffset,
                anchorOffset: range.endOffset,
            })
        } else {
            alert('Виділіть текст');
        }
    }

    render() {
        return (
            <div className="App">
                <span spellCheck={true}
                      className="text"
                      onMouseUp={this.setNewCutText}>
                </span>
                <div className="buttons">
                    <Button onClick={this.changeBg} className="button" value={"change bg"}/>
                    <Button onClick={this.changeColor} className="button" value={"change color"}/>
                    <Button onClick={this.zoomInFont} className="button" value={"zoom in font"}/>
                    <Button onClick={this.createBr} className="button" value={"br"}/>
                </div>
            </div>
        );
    }
}

export default App;
