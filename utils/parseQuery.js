

export default function parseQuery(queryObj){
  let dbQuery ={...queryObj};
  delete dbQuery.sort;
  dbQuery = JSON.stringify(dbQuery).replace(/(lte|gte|gt|lt|in)/g, (match)=>`$${match}`);
  const sortBy = queryObj.sort ? queryObj.sort.split(',').join(' ').concat(' -createdAt'): '-createdAt';
  return {query: dbQuery , sortBy}
}