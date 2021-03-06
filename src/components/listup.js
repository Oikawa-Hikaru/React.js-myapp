import React from 'react';
import Samplebox from './samplebox'

class Listup extends React.Component {
    render () {
        const vegetableList = [
            {
            id: 0,
            name: 'にんじん', 
            image: 'https://3.bp.blogspot.com/-QCe-ngfpbTg/UkJM8tkaq6I/AAAAAAAAYWM/U3pbo3YS9XA/s800/ninjin_carrot.png',
            },
            {
            id: 1,
            name: 'じゃがいも',
            image: 'https://3.bp.blogspot.com/-EiqKoF2kMTQ/UkJM5vVnb7I/AAAAAAAAYVU/tCuJxeQQiNE/s800/jagaimo_poteto.png',
            },
            {
            id: 2,
            name: 'トマト',
            image: 'https://4.bp.blogspot.com/-FlkEDz3wQSc/Vtw1wrbo6AI/AAAAAAAA4fk/k8tfPNkMvb4/s800/tomato_red.png',
            },
            {
            id: 3,
            name: '玉ねぎ',
            image: 'https://4.bp.blogspot.com/-M8GXUQ8fR_w/U32Nh_FTaSI/AAAAAAAAgxA/fgd_91u5n_M/s800/vegetable_tamanegi.png',
            },
        ];

        return (
            <div className="eachvegeDiv">
            {vegetableList.map((vegetable) => {
                return (
                <Samplebox
                    key={vegetable.id}
                    name={vegetable.name}
                    image={vegetable.image}
                />
                )
            })}
            </div>
        );
    }
}

export default Listup;
