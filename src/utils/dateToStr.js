// const dateToString = (publishedDate) => {
//   return (
//     publishedDate.toLocaleDateString('en-US'),
//     console.log('dateToString', dateToString)
//   );
// };
// export default dateToString;

// const dateToString = (publishedDate) => {
//   const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
//   return publishedDate.toLocaleDateString('en-US', options);
// };

// export default dateToString;

const dateToString = (publishedDate) => {
  if (!(publishedDate instanceof Date)) {
    return '';
  }

  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  return publishedDate.toLocaleDateString('en-US', options);
};

export default dateToString;
