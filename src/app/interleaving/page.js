import { ClientComponentOne } from "@/components/client-component-one";
import { ServerComponentOne } from "@/components/server-component-one";

const InterleavingPage = () => {
  return (
    <>
      <h1>Interleaving</h1>
      {/* <ServerComponentOne /> */}
      <ClientComponentOne>
        <ServerComponentOne />
      </ClientComponentOne>
    </>
  );
};

export default InterleavingPage;
