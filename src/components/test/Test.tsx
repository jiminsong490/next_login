import React, { useEffect } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import ChangePage from './input/ChangePage'
import InputHandle from './input/InputHandle'
import ExcuteApi from './api/ExcuteApi'
import { fetcher } from './../../pages/_app'
import cookies from 'next-cookies'

const Test = ({ token }) => {
    // const listing = async () => {
    //     const cookietoken = document.cookie.split('=')
    //     const token = cookietoken[1]
    //     const response = await XHR(
    //         'get',
    //         `http://127.0.0.1:3714/cheaktoken`,
    //         {},
    //         {
    //             token: token,
    //         }
    //     )
    //     const loginDiv = document.createElement('label')
    //     const section = document.querySelector('section')
    //     // const div = section.querySelector('div')
    //     const jbBtnText = document.createTextNode(
    //         response.data + '님 환영합니다!'
    //     )
    //     loginDiv.append(jbBtnText)
    //     document.body.append(loginDiv)
    //     // section.insertBefore(loginDiv, div)
    // }
    const { data, isValidating, error } = useSWR(
        ['http://localhost:3714/cheaktoken', token],
        (url, token) => fetcher(url, { token })
    )
    const a = data

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        ExcuteApi.login(email, password)
    }

    const handleClick = () => {
        document.cookie =
            document.cookie + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;'
        location.reload()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <InputHandle
                        type='email'
                        name='email'
                        placeholder='이메일을 입력하여주십시오.'
                        id='email'
                        size='28'
                    />
                </div>
                <div>
                    <InputHandle
                        type='password'
                        name='password'
                        placeholder='비밀번호를 입력하여주십시오.'
                        id='password'
                        size='28'
                    />
                    <input type='submit' value='login' />
                    <input type='button' value='logout' onClick={handleClick} />
                </div>
                <br />
                <div>
                    <Link href='/signupPage'>
                        <a>
                            <input type='button' value='회원가입' />
                        </a>
                    </Link>

                    <Link href='/deletePage'>
                        <a>
                            <input type='button' value='회원탈퇴' />
                        </a>
                    </Link>
                    <Link href='/changePasswordPage'>
                        <a>
                            <input type='button' value='비밀번호 변경' />
                        </a>
                    </Link>
                </div>
                <br />
                <div>
                    <Link href='/findPage'>
                        <a>
                            <input type='button' value='아이디/비밀번호 찾기' />
                        </a>
                    </Link>
                </div>
                <div>
                    <p>{a}</p>
                </div>
            </form>
        </>
    )
}
export default Test
