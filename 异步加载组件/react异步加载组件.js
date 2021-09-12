import React, { Component } from 'react'
// 异步加载组件
const Demo = React.lazy(() => import('./Demo'))
export default class App extends Component {
    render() {
        return (
            <div>
                {/* 挂载异步组件 */}
                <React.Suspense fallback={<div>loading...</div>}>
                    <Demo />
                </React.Suspense>
            </div>
        )
    }
}
