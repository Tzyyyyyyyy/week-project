import React, {Component} from 'react'
import "./index.css"

export default class myTwo extends Component {
  state = {
    prices: [
      { id: '001', style: 'fontSize: "15px"', price: 0 },
      { id: '002', style: 'fontSize: "15px"', price: 1998 },
      { id: '003', style: 'fontSize: "15px"', price: 3998 },
    ],
  }

  render() {
    const {prices} = this.state
    return (
        <div className="main">
          <div className="left">
            <p className="p_top">免费版</p>
            <p>￥<span style={{fontSize: '30px', color: "red"}}>{prices[0].price}</span>/年</p>
            <p>5人成员上限</p>
            <p>5G容量</p>
            <p>单文件最大100M</p>
            <p>单项目最大1G</p>
            <p>社区与邮件支持</p>
            <button className="button_1">注册使用</button>
          </div>
          <div className="middle">
            <p className="p_top">标准版</p>
            <p>￥<span style={{fontSize: '30px'}}>{prices[1].price}</span>/年</p>
            <p>20人成员上限</p>
            <p>20G容量</p>
            <p>单文件最大100M</p>
            <p>单项目最大1G</p>
            <p>社区与邮件支持在线与电话支持</p>
            <p>短信通知</p>
            <button className="button_2">购买</button>
          </div>
          <div className="right">
            <p className="p_top">高级版</p>
            <p>￥<span style={{fontSize: '30px', color: "red"}}>{prices[2].price}</span>/年</p>
            <p>5人成员上限</p>
            <p>50G容量</p>
            <p>单文件最大200M</p>
            <p>单项目最大2G</p>
            <p>社区与邮件支持在线与电话支持</p>
            <p>短信通知</p>
            <button className="button_1">购买</button>
          </div>
        </div>
    );
  }
}