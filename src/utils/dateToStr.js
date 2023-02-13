const dateToString = (publishedDate) => {
  return (
    publishedDate.toLocaleDateString('en-US'),
    console.log('dateToString', dateToString)
  );
};
export default dateToString;
