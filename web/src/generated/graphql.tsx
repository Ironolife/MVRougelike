import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  me: AuthResponse;
};

export type AuthResponse = {
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type FieldError = {
  field: Scalars['String'];
  message: Scalars['String'];
};

export type User = {
  id: Scalars['Int'];
  created_at: Scalars['String'];
  updated_at: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
};

export type Mutation = {
  register: AuthResponse;
  login: AuthResponse;
  logout: Scalars['Boolean'];
};


export type MutationRegisterArgs = {
  authProps: AuthProps;
};


export type MutationLoginArgs = {
  authProps: AuthProps;
};

export type AuthProps = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password: Scalars['String'];
};

export type AuthResponseFragment = { errors?: Maybe<Array<FieldErrorFragment>>, user?: Maybe<UserFragment> };

export type FieldErrorFragment = Pick<FieldError, 'field' | 'message'>;

export type UserFragment = Pick<User, 'id' | 'username' | 'email'>;

export type RegisterMutationVariables = Exact<{
  authProps: AuthProps;
}>;


export type RegisterMutation = { register: { errors?: Maybe<Array<Pick<FieldError, 'field' | 'message'>>>, user?: Maybe<Pick<User, 'id' | 'email' | 'username'>> } };

export const FieldErrorFragmentDoc = gql`
    fragment fieldError on FieldError {
  field
  message
}
    `;
export const UserFragmentDoc = gql`
    fragment user on User {
  id
  username
  email
}
    `;
export const AuthResponseFragmentDoc = gql`
    fragment authResponse on AuthResponse {
  errors {
    ...fieldError
  }
  user {
    ...user
  }
}
    ${FieldErrorFragmentDoc}
${UserFragmentDoc}`;
export const RegisterDocument = gql`
    mutation Register($authProps: AuthProps!) {
  register(authProps: $authProps) {
    errors {
      field
      message
    }
    user {
      id
      email
      username
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      authProps: // value for 'authProps'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;