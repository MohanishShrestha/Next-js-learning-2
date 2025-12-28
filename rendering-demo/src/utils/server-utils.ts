import "server-only";



export const serverSideFunction = () => {
  console.log(
    `use multiple libraries,
     use environment variables,
      intract with a database,
       process confidential information`
  );
  return "This is a server-side utility function.";
};
