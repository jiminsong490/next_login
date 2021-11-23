import React from 'react'
import ChangePage from '../test/input/ChangePage'
import InputHandle from '../test/input/InputHandle'
import XHR from '../XHR/XHR'
import ExcuteApi from './../test/api/ExcuteApi'

const Signup = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const tel = e.target.tel.value
        const username = e.target.username.value
        ExcuteApi.signup(email, password, tel, username)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <InputHandle
                        id='email'
                        type='email'
                        name='email'
                        // autocomplete='off'
                        placeholder='이메일을 입력하여주십시오.'
                        size='28'
                    />
                </div>
                <div>
                    <InputHandle
                        id='password'
                        type='password'
                        name='password'
                        // autocomplete='off'
                        placeholder='비밀번호를 입력하여주십시오.'
                        size='28'
                    />
                </div>
                <div>
                    <InputHandle
                        id='tel'
                        type='tel'
                        name='tel'
                        autocomplete='on'
                        placeholder='전화번호를 입력하여주십시오.'
                        size='28'
                    />
                </div>
                <div>
                    <InputHandle
                        id='username'
                        type='text'
                        name='username'
                        autocomplete='off'
                        placeholder='이름을 입력하여주십시오.'
                        size='28'
                    />
                </div>
                <br />
                <div>
                    <input type='submit' value='회원가입' />
                </div>
            </form>
        </>
    )
}
export default Signup
