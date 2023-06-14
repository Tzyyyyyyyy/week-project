import React, {Component} from 'react'
import {Input, Button, Row, Col} from 'antd';
import "./index.css"
import "./text.js"
import evaluate from "./text";

export default class myOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      result: '',
      history: [],
    };
  }

  componentDidMount() {
    // console.log('componentDidMount')
    // const expression = localStorage.getItem('expression');
    // const result = localStorage.getItem('result');
    // if (expression) {
    //   this.setState({expression});
    // }
    // if (result) {
    //   this.setState({result});
    // }
    // let history = localStorage.getItem('history')
    // console.log('componentDidMount', history)
  }

  componentDidUpdate() {
    // let history = localStorage.getItem('history')
    // if(history){
    //   console.log(history, this.state.history)
    // }

    // if(localStorage.length!==0){
    //   let arr1= []
    //   arr1 = JSON.parse(localStorage.getItem('history'))
    //   this.setState({history: arr1})
    //   // console.log(this.state.history)
    //   // console.log(JSON.parse(localStorage.getItem('history')))
    // }
    // console.log('componentDidUpdate')
    // localStorage.setItem('expression', this.state.expression);
    // localStorage.setItem('result', this.state.result);
  }

  handleButtonClick = (value) => {
    if (localStorage.length === 0) {
      let emptyArr = []
      this.setState({history: emptyArr})
    }
    let newArray = this.state.history;
    let expression = this.state.expression;
    let result = this.state.result;
    if (value === 'AC') {
      expression = '';
      result = '';
    } else if (value === 'History') {
      console.log(JSON.parse(localStorage.getItem('history')))
    } else if (value === 'Back') {
      expression = expression.slice(0, -1);
    } else if (value === '=') {
      try {
        result = evaluate(expression);
        let cal = {expression, result};
        newArray.push(cal);
        this.setState({history: newArray});
        localStorage.setItem('history', JSON.stringify(this.state.history));
        // localStorage.setItem(expression, result)
        result = '=' + result;
        this.setState({result: result.toString()});
      } catch {
        this.setState({result: 'Error'});
      }
    } else {
      expression += value;
    }
    this.setState({expression, result});
  };

  render() {
    return (
        <div id={'div_cal_main'}>
          <Row className={'row row_1'}>
            <Col span={24}>
              <Input value={`${this.state.expression}${this.state.result}`} id={'input_1'}/>
            </Col>
          </Row>
          <Row className={'row row_2'}>
            <Col span={6}>
              <Button className={'button_left_top'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>AC</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_left_top'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>Back</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_left_top'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>%</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_right'} onClick={(e) => this.handleButtonClick(e.target.innerText)}>/</Button>
            </Col>
          </Row>
          <Row className={'row row_3'}>
            <Col span={6}>
              <Button className={'button_left_middle'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>1</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_left_middle'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>2</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_left_middle'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>3</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_right'} onClick={(e) => this.handleButtonClick(e.target.innerText)}>*</Button>
            </Col>
          </Row>
          <Row className={'row row_4'}>
            <Col span={6}>
              <Button className={'button_left_middle'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>4</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_left_middle'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>5</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_left_middle'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>6</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_right'} onClick={(e) => this.handleButtonClick(e.target.innerText)}>+</Button>
            </Col>
          </Row>
          <Row className={'row row_5'}>
            <Col span={6}>
              <Button className={'button_left_middle'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>7</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_left_middle'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>8</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_left_middle'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>9</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_right'} onClick={(e) => this.handleButtonClick(e.target.innerText)}>-</Button>
            </Col>
          </Row>
          <Row className={'row row_6'}>
            <Col span={12}>
              <Button className={'button_left_middle'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>0</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_left_middle'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>.</Button>
            </Col>
            <Col span={6}>
              <Button className={'button_right'} onClick={(e) => this.handleButtonClick(e.target.innerText)}>=</Button>
            </Col>
          </Row>
          <Row className={'row row_7'}>
            <Col span={24}>
              <Button className={'button_history'}
                      onClick={(e) => this.handleButtonClick(e.target.innerText)}>History</Button>
            </Col>
          </Row>
        </div>
    );
  }
}
