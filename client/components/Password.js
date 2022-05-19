// import React, { useState } from 'react'
// import { me, authenticate } from '../store'
// import {fetchUpdatedUser} from '../store'
// import { useSelector, useDispatch } from 'react-redux'
// import { Button, PopContainer } from './style'
// import PopUp from './PopUp'

// const Password = () => {
//   const dispatch = useDispatch()
//   const [notMatching, setNotMatching] = useState(false)
//   const [newPassword, setNewPassword] = useState('')
//   const [confPassword, setConfPassword] = useState('')

//   const user = useSelector((state) => {
//     return state.auth
//   })

//   console.log('before handle submit', user.password)
//   user.password = newPassword
//   console.log('changing?', user.password)
//   const handleSubmit = (event) => {
//     console.log('?')
//     event.preventDefault()
//     console.log('how about here')
//     if (newPassword === confPassword) {
//       user.password = newPassword
//       console.log('is this getting hit?')
//       console.log('new user password', user.password)
//       dispatch(fetchUpdatedUser(user.username, user.email, user.password))
//     } else if (newPassword !== confPassword) {
//       return (
//         <PopContainer>
//           <PopUp
//             open={notMatching}
//             togglePopUp={() => setNotMatching(!notMatching)}
//           >
//             <p> </p>
//             <p>Hmm... those passwords don't match.</p>
//           </PopUp>
//         </PopContainer>
//       )
//     }
//   }

//   return (
//     <form>
//       <p>New Password:</p>
//       <input
//         placeholder='Password'
//         type="password"
//         required
//         onChange={(e) => {
//           setNewPassword(e)
//         }}
//       />
//       <p>Confirm New Password:</p>
//       <input
//         placeholder='Confirm Password'
//         type="password"
//         required
//         onChange={(e) => {
//           setConfPassword(e)
//         }}
//       />
//       <Button type='submit' onSubmit={handleSubmit}>Submit</Button>
//     </form>
//   )
// }

// export default Password
