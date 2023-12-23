// import { Models } from '@db'
// import { MutationResolversGQLType } from '../../../types'
// import { logger } from '../../utils/logger'
// import { getQueueMQ } from '@/packages/queue/queues'

// const { Users } = Models

// export const createUser: MutationResolversGQLType['createUser'] = async (
//     _,
//     { data },
//     context
// ) => {
//     const { password, emailAddress, invitationToken } = data

//     const existingUser = await Users.findByEmailAddress(emailAddress)

//     if (existingUser) {
//         throw error
//     }

//     try {

//     const user = await Users.create({
//         emailAddress,
//         password
//     })

//     if (!invitationToken) {
//         const userSignedUpPromise = getQueueMQ('handle-user-signup').add(
//         'handle-user-signup',
//         {
//             code,
//             context: {
//                 cookies: context.cookies
//                 headers: context.headers,
//                 ip: context.ip,
//             },
//             name: `${user.emailAddress} signed up!`
//             user,
//         }
//         )
//         try {
//             await userSignedUpPromise
//         } catch (error) {
//             if (error instanceof Error) {
//                 logger.error(`jobs failed signup`, {
//                     meta: {
//                         message: error.message,
//                         name: error.name,
//                         stack: error.stack,
//                     },
//                 })
//             }
//         }
//     }
//     return true
//     } catch (error) {
//         logger.error(`Error creating user: ${error}`)
//         throw new Error('Error creating user')
//     }
// }
