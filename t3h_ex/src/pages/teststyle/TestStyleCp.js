import React from 'react';
import styled from 'styled-components'
import TestStyle from './../../pages/teststyle/TestStyleCp.module.css';

const TestStyleCp = () => {

    const LabelFake=styled.label`
        color: ${props=>props.colorlb};
    `

    const InputFake = styled.input`
        margin-left: 10px;
    `

    const ButtonFake = styled.button`
        border:none;
        background:${props=>props.bg}
    
    `
    const FormFake = styled.form`

    
    
    `
    return (
        <div>
            <form className={TestStyle.form} action="">
                <div className={TestStyle.text_input} >
                    <LabelFake  colorlb="blue" htmlFor="User">User</LabelFake>
                    <InputFake type="text" placeholder="Nhập tên" />
                </div>
                <br/>
                <div className={TestStyle.text_input} >
                    <LabelFake htmlFor="Password">Password</LabelFake>
                    <InputFake type="text" placeholder="Nhập mật khẩu" />
                </div>
                <ButtonFake bg="green">Submit</ButtonFake>
            </form>
        </div>
    );
};

export default TestStyleCp;