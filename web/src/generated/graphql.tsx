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
  classes: Array<Class>;
  me: AuthResponse;
};

export type Class = {
  id: Scalars['Int'];
  name: Scalars['String'];
  stats: Stats;
};

export type Stats = {
  attributes: Attributes;
  skills: Skills;
};

export type Attributes = {
  strength: Scalars['Int'];
  dexterity: Scalars['Int'];
  vitality: Scalars['Int'];
  intelligence: Scalars['Int'];
  wisdom: Scalars['Int'];
  charisma: Scalars['Int'];
};

export type Skills = {
  fishing: Scalars['Int'];
  mining: Scalars['Int'];
  harvesting: Scalars['Int'];
  cooking: Scalars['Int'];
  smithing: Scalars['Int'];
  alchemy: Scalars['Int'];
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

export type AttributesFragment = Pick<Attributes, 'strength' | 'dexterity' | 'vitality' | 'intelligence' | 'wisdom' | 'charisma'>;

export type AuthResponseFragment = { errors?: Maybe<Array<FieldErrorFragment>>, user?: Maybe<UserFragment> };

export type ClassFragment = (
  Pick<Class, 'id' | 'name'>
  & { stats: StatsFragment }
);

export type FieldErrorFragment = Pick<FieldError, 'field' | 'message'>;

export type SkillsFragment = Pick<Skills, 'fishing' | 'mining' | 'harvesting' | 'cooking' | 'smithing' | 'alchemy'>;

export type StatsFragment = { attributes: AttributesFragment, skills: SkillsFragment };

export type UserFragment = Pick<User, 'id' | 'username' | 'email'>;

export type LoginMutationVariables = Exact<{
  authProps: AuthProps;
}>;


export type LoginMutation = { login: AuthResponseFragment };

export type RegisterMutationVariables = Exact<{
  authProps: AuthProps;
}>;


export type RegisterMutation = { register: AuthResponseFragment };

export type ClassesQueryVariables = Exact<{ [key: string]: never; }>;


export type ClassesQuery = { classes: Array<ClassFragment> };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { me: AuthResponseFragment };

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
export const AttributesFragmentDoc = gql`
    fragment attributes on Attributes {
  strength
  dexterity
  vitality
  intelligence
  wisdom
  charisma
}
    `;
export const SkillsFragmentDoc = gql`
    fragment skills on Skills {
  fishing
  mining
  harvesting
  cooking
  smithing
  alchemy
}
    `;
export const StatsFragmentDoc = gql`
    fragment stats on Stats {
  attributes {
    ...attributes
  }
  skills {
    ...skills
  }
}
    ${AttributesFragmentDoc}
${SkillsFragmentDoc}`;
export const ClassFragmentDoc = gql`
    fragment class on Class {
  id
  name
  stats {
    ...stats
  }
}
    ${StatsFragmentDoc}`;
export const LoginDocument = gql`
    mutation Login($authProps: AuthProps!) {
  login(authProps: $authProps) {
    ...authResponse
  }
}
    ${AuthResponseFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      authProps: // value for 'authProps'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($authProps: AuthProps!) {
  register(authProps: $authProps) {
    ...authResponse
  }
}
    ${AuthResponseFragmentDoc}`;
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
export const ClassesDocument = gql`
    query Classes {
  classes {
    ...class
  }
}
    ${ClassFragmentDoc}`;

/**
 * __useClassesQuery__
 *
 * To run a query within a React component, call `useClassesQuery` and pass it any options that fit your needs.
 * When your component renders, `useClassesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useClassesQuery({
 *   variables: {
 *   },
 * });
 */
export function useClassesQuery(baseOptions?: Apollo.QueryHookOptions<ClassesQuery, ClassesQueryVariables>) {
        return Apollo.useQuery<ClassesQuery, ClassesQueryVariables>(ClassesDocument, baseOptions);
      }
export function useClassesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ClassesQuery, ClassesQueryVariables>) {
          return Apollo.useLazyQuery<ClassesQuery, ClassesQueryVariables>(ClassesDocument, baseOptions);
        }
export type ClassesQueryHookResult = ReturnType<typeof useClassesQuery>;
export type ClassesLazyQueryHookResult = ReturnType<typeof useClassesLazyQuery>;
export type ClassesQueryResult = Apollo.QueryResult<ClassesQuery, ClassesQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...authResponse
  }
}
    ${AuthResponseFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;