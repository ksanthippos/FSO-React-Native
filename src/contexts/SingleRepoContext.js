import { createContext } from "react";

const SingleRepoContext = createContext({
  showSingle: false,
  toggleSingle: () => {},
})

export default SingleRepoContext