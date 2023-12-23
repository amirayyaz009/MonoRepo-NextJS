// import { Models } from '@db'

// const { Users } = Models


// export const userQueries: QueryResolversGQLType = {
//     user: async (_, { id, emailAddress }, context) => {
//         if (!id && !emailAddress) throw new Error('Must provide id or emailAddress')
//         if (emailAddress) return Users.findByEmailAddress(emailAddress)
//         if (id) return Users.findByAnyId(id)
//     },

//     // users: async (_, { filter, limit, offset }, context) => {
//     //     if (!context.user) return []

//     //     return Users.search({ filter, limit, offset })
//     // }
// }