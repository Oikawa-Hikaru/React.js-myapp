import React from 'react';
import Modalopen from './modalopen';

class Modal extends React.Component {
    render () {
        const vegetable = {
            name: 'にんじん',
            image: 'https://3.bp.blogspot.com/-QCe-ngfpbTg/UkJM8tkaq6I/AAAAAAAAYWM/U3pbo3YS9XA/s800/ninjin_carrot.png',
            introduction: 'ニンジン（人参、学名：Daucus carota subsp. sativus）はアフガニスタン原産のセリ科ニンジン属の2年草。 -- wikipediaより引用',
            comment: '※ βカロテンが豊富な野菜です。'
        }

        return (
            <div className="eachvegeDiv">
            <Modalopen 
                name={vegetable.name}
                image={vegetable.image}
                introduction={vegetable.introduction}
                comment={vegetable.comment}
            />
            </div>
        )
    }
}

export default Modal;