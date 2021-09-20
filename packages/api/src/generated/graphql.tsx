import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date */
  Date: any;
  /** A type representing a formatted JSON */
  JSON: any;
  /** A type representing a formatted java.util.UUID */
  UUID: any;
};

export type CaseCreated = {
  __typename?: 'CaseCreated';
  caseId: Scalars['UUID'];
};

export type CaseDefinition = {
  __typename?: 'CaseDefinition';
  id: Scalars['String'];
  schema: Scalars['JSON'];
  statusDefinition: Array<Scalars['String']>;
};

export type CaseInstance = {
  __typename?: 'CaseInstance';
  caseDefinitionId: Scalars['String'];
  createdOn: Scalars['String'];
  externalId?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  status?: Maybe<Status>;
  statusHistory?: Maybe<Array<HistoricStatus>>;
  submission: Scalars['JSON'];
  userId: Scalars['String'];
};

export type CaseInstanceOrderingInput = {
  createdOn: Sort;
};

export type FormDefinition = {
  __typename?: 'FormDefinition';
  formDefinition: Scalars['JSON'];
  name: Scalars['String'];
};

export type HistoricStatus = {
  __typename?: 'HistoricStatus';
  createdOn: Scalars['String'];
  status: Status;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Mutation used to complete public tasks */
  completePublicTask: TaskInstance;
  /** Complete task mutation */
  completeTask: TaskInstance;
  /** Convert submission to json return resulting data */
  processSubmission: CaseCreated;
};


export type MutationCompletePublicTaskArgs = {
  submission: Scalars['JSON'];
  taskExternalId: Scalars['String'];
};


export type MutationCompleteTaskArgs = {
  submission: Scalars['JSON'];
  taskId: Scalars['UUID'];
};


export type MutationProcessSubmissionArgs = {
  caseDefinitionId: Scalars['String'];
  initialStatus?: Maybe<Scalars['String']>;
  submission: Scalars['JSON'];
};

export type Query = {
  __typename?: 'Query';
  /** retrieves all available case definitions */
  allCaseDefinitions: Array<CaseDefinition>;
  /** retrieves all available case instances */
  allCaseInstances: Array<CaseInstance>;
  /** find all form definitions from repository */
  allFormDefinitions: Array<FormDefinition>;
  /** find all available tasks */
  findAllTasks: Array<TaskInstance>;
  /** find public task with id */
  findPublicTask: TaskInstance;
  /** find all available tasks for external case id */
  findTasks?: Maybe<Array<TaskInstance>>;
  /** retrieves single case instance from repository */
  getCaseInstance?: Maybe<CaseInstance>;
  /** find single form definition from repository */
  getFormDefinition?: Maybe<FormDefinition>;
  /** Gets all zaken for the user */
  getZaken: Array<Zaak>;
};


export type QueryAllCaseInstancesArgs = {
  orderBy: CaseInstanceOrderingInput;
};


export type QueryFindPublicTaskArgs = {
  taskId: Scalars['String'];
};


export type QueryFindTasksArgs = {
  caseId: Scalars['UUID'];
};


export type QueryGetCaseInstanceArgs = {
  id: Scalars['UUID'];
};


export type QueryGetFormDefinitionArgs = {
  name: Scalars['String'];
};


export type QueryGetZakenArgs = {
  page?: Maybe<Scalars['Int']>;
};

export enum Sort {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Status = {
  __typename?: 'Status';
  createdOn: Scalars['String'];
  name: Scalars['String'];
};

export type TaskInstance = {
  __typename?: 'TaskInstance';
  caseDefinitionId?: Maybe<Scalars['String']>;
  createdOn: Scalars['String'];
  externalCaseId: Scalars['String'];
  externalTaskId: Scalars['String'];
  formDefinition: Scalars['JSON'];
  isCompleted: Scalars['Boolean'];
  taskDefinitionKey: Scalars['String'];
  taskId: Scalars['UUID'];
};

export type Zaak = {
  __typename?: 'Zaak';
  omschrijving: Scalars['String'];
  startdatum: Scalars['Date'];
  status?: Maybe<ZaakStatus>;
  statusGeschiedenis: Array<ZaakStatus>;
  uuid: Scalars['UUID'];
  zaaktype: ZaakType;
};

export type ZaakStatus = {
  __typename?: 'ZaakStatus';
  datumStatusGezet: Scalars['String'];
  statustype: ZaakStatusType;
};

export type ZaakStatusType = {
  __typename?: 'ZaakStatusType';
  isEindstatus: Scalars['Boolean'];
  omschrijving: Scalars['String'];
};

export type ZaakType = {
  __typename?: 'ZaakType';
  identificatie: Scalars['String'];
  omschrijving: Scalars['String'];
};

export type GetZakenQueryVariables = Exact<{ [key: string]: never; }>;


export type GetZakenQuery = { __typename?: 'Query', getZaken: Array<{ __typename?: 'Zaak', uuid: any, omschrijving: string, startdatum: any, zaaktype: { __typename?: 'ZaakType', identificatie: string }, status?: Maybe<{ __typename?: 'ZaakStatus', statustype: { __typename?: 'ZaakStatusType', isEindstatus: boolean } }> }> };


export const GetZakenDocument = gql`
    query GetZaken {
  getZaken {
    uuid
    omschrijving
    zaaktype {
      identificatie
    }
    startdatum
    status {
      statustype {
        isEindstatus
      }
    }
  }
}
    `;

/**
 * __useGetZakenQuery__
 *
 * To run a query within a React component, call `useGetZakenQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetZakenQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetZakenQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetZakenQuery(baseOptions?: Apollo.QueryHookOptions<GetZakenQuery, GetZakenQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetZakenQuery, GetZakenQueryVariables>(GetZakenDocument, options);
      }
export function useGetZakenLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetZakenQuery, GetZakenQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetZakenQuery, GetZakenQueryVariables>(GetZakenDocument, options);
        }
export type GetZakenQueryHookResult = ReturnType<typeof useGetZakenQuery>;
export type GetZakenLazyQueryHookResult = ReturnType<typeof useGetZakenLazyQuery>;
export type GetZakenQueryResult = Apollo.QueryResult<GetZakenQuery, GetZakenQueryVariables>;