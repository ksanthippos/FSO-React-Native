import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList'

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {

      // test data
      const repositories = {
        pageInfo: {
          totalCount: 8,
          hasNextPage: true,
          endCursor:
            'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
        },
        edges: [
          {
            node: {
              id: 'jaredpalmer.formik',
              fullName: 'jaredpalmer/formik',
              description: 'Build forms in React, without the tears',
              language: 'TypeScript',
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars2.githubusercontent.com/u/4060187?v=4',
            },
            cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          {
            node: {
              id: 'async-library.react-async',
              fullName: 'async-library/react-async',
              description: 'Flexible promise-based React data loader',
              language: 'JavaScript',
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                'https://avatars1.githubusercontent.com/u/54310907?v=4',
            },
            cursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
          },
        ],
      };

      //  render
      const { getAllByTestId } = render(<RepositoryListContainer repositories={repositories} />);

      // tests for both elements in the array!
      expect(getAllByTestId('name')[0]).toHaveTextContent(repositories.edges[0].node.fullName);
      expect(getAllByTestId('name')[1]).toHaveTextContent(repositories.edges[1].node.fullName);

      expect(getAllByTestId('description')[0]).toHaveTextContent(repositories.edges[0].node.description);
      expect(getAllByTestId('description')[1]).toHaveTextContent(repositories.edges[1].node.description);
      
      expect(getAllByTestId('language')[0]).toHaveTextContent(repositories.edges[0].node.language);
      expect(getAllByTestId('language')[1]).toHaveTextContent(repositories.edges[1].node.language);

      // value formatting is made inside RepisitoryItem, so these (4) have to be formatted separately
      expect(getAllByTestId('forks')[0]).toHaveTextContent('1.6k');
      expect(getAllByTestId('forks')[1]).toHaveTextContent('69');

      expect(getAllByTestId('stars')[0]).toHaveTextContent('21.9k');
      expect(getAllByTestId('stars')[1]).toHaveTextContent('1.8k');

      expect(getAllByTestId('rating')[0]).toHaveTextContent(repositories.edges[0].node.ratingAverage);
      expect(getAllByTestId('rating')[1]).toHaveTextContent(repositories.edges[1].node.ratingAverage);

      expect(getAllByTestId('reviews')[0]).toHaveTextContent(repositories.edges[0].node.reviewCount);
      expect(getAllByTestId('reviews')[1]).toHaveTextContent(repositories.edges[1].node.reviewCount);

    });
  });
});