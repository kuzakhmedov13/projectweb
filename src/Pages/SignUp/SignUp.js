import React from 'react'
import Input from '../../Components/Input'
import SignUpTop from '../../Components/SignUpTop'
import SingUpBottom from '../../Components/SingUpBottom'
import { motion } from 'framer-motion';

const SignUp = () => {
    return (

        <motion.div
    transition={{
      duration: 1
    }}
    initial={{
      y: -2000,
      opacity: 0
    }}
    animate={{
      y: 0,
      opacity: 1
    }}>
            <SignUpTop/>
            <Input label='' type='text' text='Username *'/>
            <Input label='' type='text' text='Email address *'/>
            <Input label='' type='password' text='Password *'/>
            <SingUpBottom/>
        <div/>
        </motion.div>
    )
}

export default SignUp
