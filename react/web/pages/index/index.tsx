import React from 'react';
import '../../common.less';
import style from './index.module.less';

type typeProps = {
    des: string;
};
export default function (props: typeProps) {
    return (
        <div className={style.home}>
            <p className={style.title}>Umajs-react-ssr</p>
            <div className={style.des}>{props.des}</div>
            <a href="https://github.com/Umajs/plugin-react-ssr">@umajs/plugin-react-ssr(插件用法和配置)</a>
            <a href="https://github.com/Umajs/umajs-react-ssr">更多样例</a>
        </div>
    );
}