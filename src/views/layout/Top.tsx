import './css/top.css'
import * as React from 'react'
import { Link } from 'react-router-dom'

export default class extends React.Component {
    render() {
        return (
            <div className="gl-top">
                <div>
                    <span><Link to='/'>首页</Link></span>
                    <span><Link to='/videos'>视频</Link></span>
                    <span><Link to='/book'>电子书</Link></span>
                    <span><Link to="/tool">工具</Link></span>
                </div>

                <div>
                    <span><Link to='/login'>登陆</Link></span>
                    <span><Link to='/register'>注册</Link></span>
                </div>
            </div>
        )
    }
}