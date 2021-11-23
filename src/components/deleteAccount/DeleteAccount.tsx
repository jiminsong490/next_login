import ChangePage from '../test/input/ChangePage'
import InputHandle from '../test/input/InputHandle'
import XHR from '../XHR/XHR'
import ExcuteApi from './../test/api/ExcuteApi'
const deleteAccount = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        ExcuteApi.delete(email, password)
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
                    <input type='submit' value='회원탈퇴' />
                </div>
            </form>
        </>
    )
}
export default deleteAccount
