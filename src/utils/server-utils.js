//* this import statement will force this code to only run in server
//* any client side invocation of this function will cause a compile time error
import "server-only";

export const serverSideFunction = () => {
  console.log(`
    use multiple libraries
    use environment variables
    interact with a database
    process confidential information
     `);

  return "server result";
};
