import Link from 'next/link'
import React from 'react'
import ChangePage from '../test/input/ChangePage'
import InputHandle from '../test/input/InputHandle'
import XHR from '../XHR/XHR'
import ExcuteApi from './../test/api/ExcuteApi'

const FindAccount = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const tel = e.target.tel.value
        const username = e.target.username.value
        //     const response = await XHR(
        //         'get',
        //         `http://127.0.0.1:3714/findall?tel=${tel.value}&username=${username.value}`
        //     )
        //     if (response.data.result) alert(`아이디 : ${response.data.email}`)
        //     else alert('계정을 찾을 수 없습니다. 다시 입력해주세요.')

        ExcuteApi.find(tel, username)
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
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
                    <input type='submit' value='아이디 찾기' />
                </div>
                <br />
                <div>
                    <Link href='/deletePage'>
                        <a>
                            <input type='button' value='비밀번호 찾기' />
                        </a>
                    </Link>
                </div>
            </form>
        </>
    )
}
export default FindAccount
