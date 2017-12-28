import React, { Component } from 'react';
import Top from '../../component/app/top.jsx';
import Context from '../../component/app/context.jsx';
import Calculator from '../../component/app/calculator.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cur: 'shop',
      name: '',
      sex: true,
      apple: false,
      grape: false,
      city: '1',
      textarea: ''
    };
    this.handleName = this.handleName.bind(this);
    this.handleSex = this.handleSex.bind(this);
    this.handleLove = this.handleLove.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  componentDidMount() {
  }

  handleName(e) {
    this.setState({
      name: e.target.value
    })
  }

  handleSex(e) {
    this.setState({
      sex: Number(e.target.value) === 0
    })
  }

  handleLove(e) {
    if (e.target.value === 'apple') {
      this.setState({
        apple: !this.state.apple
      })
    } else if (e.target.value === 'grape') {
      this.setState({
        grape: !this.state.grape
      })
    }
  }

  handleCity(e) {
    this.setState({
      city: e.target.value
    })
  }

  handleText(e) {
    this.setState({
      textarea: e.target.value
    })
  }

  render() {
    const lists = [{
      name: 'mili',
      age: 12
    }, {
      name: 'Tony',
      age: 15
    }, {
      name: 'lindy',
      age: 15
    }];
    const listItems = lists.map(item => {
      return <li key={item.name}>Name is {item.name}, age is {item.age}</li>
    });
    const cities = [{
      value: '1',
      name: '北京'
    }, {
      value: '2',
      name: '上海'
    }, {
      value: '3',
      name: '广州'
    }, {
      value: '4',
      name: '深圳'
    }];
    const current = cities.find(city => {
      if (city.value === this.state.city) {
        return city;
      }
    });
    return (
      <div className="page">
        <Calculator></Calculator>


      </div>
    );
  }
}

/*

<Top cur={this.state.cur} switchTabChange={val => this.setState({cur: val})}></Top>
<Context cur={this.state.cur}></Context>
<ul>
  {listItems}
</ul>
<form action="">
  <div className="">
  <label htmlFor="">输入框</label>
<input type="text" placeholder="please input name" value={this.state.name} onChange={this.handleName}/>
</div>
<div>
  <label htmlFor="">单选框</label>
  男：<input type="radio" name='sex' value='0' checked={this.state.sex} onChange={this.handleSex}/>
  女：<input type="radio" name='sex' value='1' checked={!this.state.sex} onChange={this.handleSex}/>
</div>
<div>
<label htmlFor="">复选框</label>
苹果：<input type="checkbox" name='love' value='apple' checked={this.state.apple} onChange={this.handleLove}/>
葡萄：<input type="checkbox" name='love' value='grape' checked={this.state.grape} onChange={this.handleLove}/>
</div>
<div>
  <label htmlFor="">下拉框</label>
  <select name="" id="" value={this.state.city} onChange={this.handleCity}>
    <option value="1">北京</option>
    <option value="2">上海</option>
    <option value="3">广州</option>
    <option value="4">深圳</option>
  </select>
</div>
<div>
<label htmlFor="">文本框</label>
<textarea name="" id="" cols="30" rows="10" value={this.state.textarea} placeholder='请输入备注信息' onChange={this.handleText}></textarea>
</div>
</form>
<div>
  您的名字是：{this.state.name}
  <br/>
  您的性别：{this.state.sex ? '男': '女'}
  <br/>
  您爱吃的水果：{this.state.apple ? '苹果': ''} {this.state.grape ? '葡萄': ''}
  <br/>
  您在居住地：{current.name}
  <br/>
  备注信息：{this.state.textarea}
</div>
<div>------------------------</div>*/
