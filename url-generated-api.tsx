import gql from 'graphql-tag';

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Block = CommentBlock | DefinitionBlock | ExempleBlock | ImageBlock | MathBlock | SectionBlock | TextBlock | TheoremBlock | VideoBlock;

export type CommentBlock = {
  __typename?: 'CommentBlock';
  blocks: Array<Block>;
  id: Scalars['String'];
};

export type DefinitionBlock = {
  __typename?: 'DefinitionBlock';
  blocks: Array<Block>;
  id: Scalars['String'];
};

export type ExempleBlock = {
  __typename?: 'ExempleBlock';
  blocks: Array<Block>;
  id: Scalars['String'];
};

export type ImageBlock = {
  __typename?: 'ImageBlock';
  id: Scalars['String'];
  legend: Scalars['String'];
  url: Scalars['String'];
};

export type MathBlock = {
  __typename?: 'MathBlock';
  equation: Scalars['String'];
  id: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  getCourse?: Maybe<SectionBlock>;
};

export type SectionBlock = {
  __typename?: 'SectionBlock';
  blocks: Array<Block>;
  id: Scalars['String'];
  title: Scalars['String'];
};

export type TextBlock = {
  __typename?: 'TextBlock';
  content: Scalars['String'];
  id: Scalars['String'];
};

export type TheoremBlock = {
  __typename?: 'TheoremBlock';
  blocks: Array<Block>;
  id: Scalars['String'];
};

export type VideoBlock = {
  __typename?: 'VideoBlock';
  id: Scalars['String'];
  legend: Scalars['String'];
  url: Scalars['String'];
};

export type GetCourseQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCourseQuery = { __typename?: 'Query', getCourse?: { __typename?: 'SectionBlock', title: string } | null | undefined };
