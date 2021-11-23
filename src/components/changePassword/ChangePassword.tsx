import React from 'react'
import ChangePage from '../test/input/ChangePage'
import InputHandle from './../test/input/InputHandle'
import changPasswordPage from './../../pages/changePasswordPage'
import XHR from '../XHR/XHR'
import ExcuteApi from './../test/api/ExcuteApi'
const ChangePassword = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const change = e.target.changepassword.value
        ExcuteApi.change(email, password, change)
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
                <br />
                <div>
                    <input type='submit' value='비밀번호 변경' />
                </div>
                <div>
                    <InputHandle
                        id='changepassword'
                        type='password'
                        name='changepassword'
                        // autocomplete='off'
                        placeholder='변경할 비밀번호를 입력하여주십시오.'
                        size='28'
                    />
                </div>
            </form>
        </>
    )
}
export default ChangePassword
