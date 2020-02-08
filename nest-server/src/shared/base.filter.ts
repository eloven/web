export type SortType = 'asc' | 'desc' | 'ascending' | 'descending' | 1 | -1;

const sortType: any = (s: string) => {
  if (['1', '-1', 1, -1].includes(s)) {
    return Number(s);
  } else if (['asc', 'desc', 'ascending', 'descending'].includes(s)) {
    return s;
  } else {
    return 1;
  }
};

export interface PageQuery {
  pageSize: number;
  pageNum: number;
  sortParams?: string;
  sortType?: SortType;
}

export interface PageResponse<T> {
  list: T[];
  total: number;
}

export function formatPageQuery(query: any): PageQuery {
  if (query.sortParams) {
    return {
      pageSize: parseInt(query.pageSize, 10),
      pageNum: parseInt(query.pageNum, 10),
      sortParams: query.sortParams,
      sortType: sortType(query.sortType)
    };
  }
  return {
    pageSize: parseInt(query.pageSize, 10),
    pageNum: parseInt(query.pageNum, 10)
  };
}
