import React, {Component} from 'react'
import { Input, Button, Row, Col } from 'antd';
import "./index.css"

export default class myOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      result: '',
    };
  }

  componentDidMount() {
    const expression = localStorage.getItem('expression');
    if (expression) {
      this.setState({expression});
    }
  }

  componentDidUpdate() {
    localStorage.setItem('expression', this.state.expression);
  }

  handleButtonClick = (value) => {
    let expression = this.state.expression;
    if (value === 'AC') {
      expression = '';
    } else if (value === 'C') {
      expression = expression.slice(0, -1);
    } else if (value === '=') {
      try {
        const result = eval(expression);
        this.setState({result: result.toString()});
      } catch {
        this.setState({result: 'Error'});
      }
    } else {
      expression += value;
    }
    this.setState({expression});
  };

  render() {
    return (
        <div style={{margin: '20px'}}>
          <Row>
            <Col span={24}>
              <Input value={this.state.expression}/>
            </Col>
            <Col span={24}>
              <Input value={this.state.result}/>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('7')}>7</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('8')}>8</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('9')}>9</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('/')}>/</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('4')}>4</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('5')}>5</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('6')}>6</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('*')}>*</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('1')}>1</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('2')}>2</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('3')}>3</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('-')}>-</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('0')}>0</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('**')}>^</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('sqrt(')}>sqrt</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('+')}>+</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('AC')}>AC</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('C')}>C</Button>
            </Col>
            <Col span={6}>
              <Button onClick={() => this.handleButtonClick('=')}>=</Button>
            </Col>
          </Row>
        </div>
    );
  }
}
