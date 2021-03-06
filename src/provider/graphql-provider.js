import React, { useContext } from 'react'
import { GraphQLContext, AuthContext, NotificationContext } from '../context'
import { withRouter } from 'react-router-dom'

import { withApollo } from 'react-apollo'
import gql from 'graphql-tag'

const GraphQLProvider = ({ children, history, client }) => {
  const { logout } = useContext(AuthContext)
  const { sendError, sendWarning } = useContext(NotificationContext)

  const Error = err => {
    err.message = err.message.substring(err.message.indexOf(':') + 1)
    if (err.message.includes('Unauthenticated')) {
      logout()
      sendWarning('Token expired, please do login again')
      history.push('/auth')
      return
    }
    sendError(err.message)
  }

  const query = async options => {
    try {
      options.query = gql(options.query)
      const { data } = await client.query(options)
      return data
    } catch (err) {
      Error(err)
    }
  }

  const mutate = async options => {
    try {
      options.mutation = gql(options.mutation)
      const { data } = await client.mutate(options)
      return data
    } catch (err) {
      Error(err)
    }
  }

  const subscribe = ({ subscription, callback }) => {
    return client
      .subscribe({
        query: gql(subscription)
      })
      .subscribe(callback)
  }

  return (
    <GraphQLContext.Provider
      value={{
        query: query,
        mutate: mutate,
        subscribe: subscribe
      }}
    >
      {children}
    </GraphQLContext.Provider>
  )
}

export default withRouter(withApollo(GraphQLProvider))
