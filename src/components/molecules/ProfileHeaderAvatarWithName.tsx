import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import styled from '../../utils/styled'
import Avatar from '../atoms/Avatar'

const GET_USER_LOGIN = gql`
  query GitHubUserLogin {
    me {
      github {
        avatarUrl
        name
        login
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: row;

  div {
    text-align: left;
    h3 {
      font-size: 2.75rem;
      margin-bottom: 5px;
    }
    p {
      font-size: 2.25rem;
    }
  }
`

const ProfileHeaderAvatarWithName = () => (
  <Query query={GET_USER_LOGIN}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>
      if (error) return <div>Uh oh, something went wrong!</div>

      return (
        <Container>
          <Avatar
            src={data.me.github.avatarUrl}
            alt={`${data.me.github.name}'s GitHub avatar photo.`}
          />
          <div>
            <h3>{data.me.github.name}</h3>
            <p>@{data.me.github.login} • Level 1 Student</p>
          </div>
        </Container>
      )
    }}
  </Query>
)

export default ProfileHeaderAvatarWithName
