export const RoutesConfig = {
  EMPTY: {
    path: ''
  },
  JOBS: {
    path: 'jobs',
    title: 'Jobs',
    children: {
      LIST: {
        path: '',
        title: 'Job list'
      },
      DETAIL: {
        path: ':id',
        title: 'Job detail'
      },
      FAVORITES: {
        path: 'favorites',
        title: 'Favorites jobs list'
      }
    }
  },
  WILDCARD: {
    path: '**'
  }
};
