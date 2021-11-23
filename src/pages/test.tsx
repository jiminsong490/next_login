import { produceWithPatches } from 'immer'
import cookies from 'next-cookies'
import React from 'react'
import Test from '../components/test/Test'

const test = (props) => {
    return <Test token={props.token} />
}

test.getInitialProps = async (ctx) => {
    const { token } = cookies(ctx)
    console.log(token)
    return { token }
}

export default test
